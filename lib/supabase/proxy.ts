import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getUserRole } from "../data-service";
import { Database } from "./supabase";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const { data } = await supabase.auth.getClaims();

  const claims = data?.claims;
  const userId = claims?.sub; // "sub" is the standard JWT claim for user id

  const path = request.nextUrl.pathname;

  const protectedRoutes = ["/admin", "/rider", "/customer"];
  const isProtected = protectedRoutes.some((r) => path.startsWith(r));

  // not logged in, trying to reach a protected route
  if (!userId && isProtected) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", path);
    const redirectResponse = NextResponse.redirect(loginUrl);
    response.cookies
      .getAll()
      .forEach((cookie) => redirectResponse.cookies.set(cookie));
    return redirectResponse;
  }

  // i dont want wasted database calls,
  // run the query only when there is a user id
  let role;
  if (userId) {
    const userRow = await getUserRole(supabase, userId);
    role = userRow?.role;
  }

  // logged in — check role matches the section they're entering
  if (userId && isProtected) {
    // this only runs when path IS /admin, /rider, or /customer

    const roleHome = `/${role}`;
    if (role && !path.startsWith(roleHome)) {
      return NextResponse.redirect(new URL(roleHome, request.url));
    }
  }

  if (userId && path === "/") {
    const roleHome = `/${role}`;
    console.log("root redirect check — userId:", userId, "role:", role);
    if (role) {
      return NextResponse.redirect(new URL(roleHome, request.url));
    }
  }

  // logged in and trying to visit /login — send them to their dashboard instead
  if (userId && path === "/login") {
    const roleHome = `/${role}`;
    if (role) {
      return NextResponse.redirect(new URL(roleHome, request.url));
    }
  }

  return response;
}

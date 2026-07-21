"use server";

import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

type LoginState = {
  success: boolean | null;
  message: string;
};

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  //  1. Take email and password typed by the user
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectedPath = formData.get("redirectTo");
  console.log(redirectedPath);

  if (typeof email !== "string" || typeof password !== "string") {
    return { success: false, message: "Missing email or password" };
  }

  if (typeof redirectedPath !== "string") {
    return { success: false, message: "Missing redirect path" };
  }
  // 2. Ask Supabase: "sign in with this email and password"
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  // 3. Supabase gives back either an error or a successful session
  // 4. If error: return the error message to the page to display
  if (error) {
    console.error(error);
    return { success: false, message: "Invalid email or password" };
  }

  // 5. If success: return nothing (page redirects on success)
  return { success: true, message: "" }; //the redirect happens client side on login page
}

export async function logOut() {
  // 1. Create a Supabase server client
  const supabase = await createClient();

  // 2. Ask Supabase: "sign this user out"
  await supabase.auth.signOut();

  // 3. Once signed out, redirect the browser to "/login"
  redirect("/login");
}

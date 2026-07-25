"use server";

import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { LoginState } from "./type";
import { revalidatePath } from "next/cache";

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  //  1. Take email and password typed by the user
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectedPath = formData.get("redirectTo");

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

export async function completeOrder(
  // _previousState: LoginState,
  // _formData: FormData,
  orderId: string,
): Promise<LoginState> {
  // 1. Take orderId as input
  // 2. Create a supabase server client
  const supabase = await createClient();
  // 3. Update the order with this id: set status to "delivered"

  const { data, error } = await supabase
    .from("orders")
    .update({ status: "delivered" })
    .eq("id", orderId)
    .select();

  console.log("completeOrder orderId:", orderId);
  console.log("completeOrder data:", data);
  console.log("completeOrder error:", error);

  // 4. If it fails: return { success: false, message: "..." }
  if (error) {
    console.error(error);
    return {
      success: false,
      message: "Couldn't complete order, please try again",
    };
  }

  // 5. If it succeeds:
  //      revalidate the orders list page
  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${orderId}`);
  return { success: true, message: "Order marked as delivered" };
}

export async function logOut() {
  // 1. Create a Supabase server client
  const supabase = await createClient();

  // 2. Ask Supabase: "sign this user out"
  await supabase.auth.signOut();

  // 3. Once signed out, redirect the browser to "/login"
  redirect("/login");
}

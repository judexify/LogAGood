import { SupabaseClient } from "@supabase/supabase-js";
import { User, UserRoleRow } from "./type";
import { Database } from "./supabase/supabase";

export async function getUserRole(
  supabaseClient: SupabaseClient<Database>,
  userId: string | undefined,
): Promise<UserRoleRow | undefined> {
  if (!userId) return;

  // 2. Ask the database: find the row in users where id matches userId
  const { data, error } = await supabaseClient
    .from("users")
    .select("role")
    .eq("id", userId)
    .single();

  // 4. If nothing found, return nothing
  if (error) return;
  // 3. Return the role field from that row

  return data;
}

export async function getCurrentUser(
  supabaseClient: SupabaseClient<Database>,
  userId: string,
): Promise<Pick<User, "full_name" | "id" | "email" | "role"> | null> {
  //   1. Take the supabase client and userId as inputs

  // 2. Ask the database: find the row in users
  const { data, error } = await supabaseClient
    .from("users")
    // 3. Only pick out: full_name, email, role
    .select("id,full_name, email, role")
    // where id matches userId
    .eq("id", userId)
    // 4. Return that row
    .single();

  // 5. If nothing found, return nothing

  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }
  //6. return data

  return data;
}

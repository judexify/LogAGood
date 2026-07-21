import { SupabaseClient } from "@supabase/supabase-js";
import { UserRoleRow } from "./type";
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

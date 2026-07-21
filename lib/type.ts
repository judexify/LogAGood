import { Tables } from "./supabase/supabase";

export type UserRole = "admin" | "rider" | "customer";

export type UserRoleRow = {
  role: UserRole;
};

export type User = Tables<"users">;

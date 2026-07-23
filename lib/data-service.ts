import { SupabaseClient } from "@supabase/supabase-js";
import { GetOrdersOptions, User, UserRoleRow } from "./type";
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

export async function getOrders(
  supabaseClient: SupabaseClient<Database>,
  {
    page = 1,
    pageSize = 10,
    status,
    priority,
    riderId,
    dateFrom,
    dateTo,
    sortBy = "recent",
    searchQuery = "",
  }: GetOrdersOptions = {},
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabaseClient.from("orders").select(
    `
      id, status, priority, created_at, pickup_address, dropoff_address, delivery_notes,
      customer:users ( full_name, email, phone ),
      rider:riders ( id, user:users ( full_name, phone ) )
      `,
    { count: "exact" },
  );

  if (status) query = query.eq("status", status);
  if (priority) query = query.eq("priority", priority);
  if (riderId) query = query.eq("rider_id", riderId);
  if (dateFrom) query = query.gte("created_at", dateFrom);
  if (dateTo) query = query.lte("created_at", dateTo);
  if (searchQuery) query = query.ilike("id", `%${searchQuery}%`);

  query = query.order("created_at", { ascending: sortBy === "oldest" });
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching orders:", error);
    return { orders: [], count: 0 };
  }

  return { orders: data, count: count ?? 0 };
}

export async function getOrderById(
  supabaseClient: SupabaseClient<Database>,
  orderId: string,
) {
  // 1. Take the supabase client and orderId as inputs
  const { data, error } = await supabaseClient
    .from("orders")
    //    also bring along related info: the customer's name/email/phone (from users),
    //    the rider's name (from riders → users), and the status history (from order_status_history)
    .select(
      `
      id, status,priority,created_at,pickup_address,dropoff_address,delivery_notes,
      customer:users (
        full_name,email,phone
      ),
      rider:riders (
        id,user:users (full_name,phone
        )
      ),
      order_status_history (
        status, changed_at
      )
      `,
    )
    // 2. Ask the database: find the row in orders where id matches orderId
    .eq("id", orderId)
    .single();

  // 4. If nothing found, return nothing
  if (error) {
    console.error("Error fetching order:", error);
    return null;
  }

  // 3. Return that combined result
  return data;
}

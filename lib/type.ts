// import { OrderStatus } from "@/components/types";
import { Database, Tables } from "./supabase/supabase";
import { getOrderById, getOrders } from "./data-service";

export type UserRole = "admin" | "rider" | "customer";

export type UserRoleRow = {
  role: UserRole;
};

export type User = Tables<"users">;

export type Priority = "normal" | "express";

export type OrderStatus = Database["public"]["Enums"]["order_status"];

export type Order = {
  id: string;
  customer: string;
  phone: string;
  from: string;
  to: string;
  riderName: string;
  riderAvatar: string;
  priority: Priority;
  status: OrderStatus;
  createdTime: string;
};

export type OrderWithRelations = Awaited<ReturnType<typeof getOrderById>>;
export type GetOrdersResult = Awaited<ReturnType<typeof getOrders>>;

export type OrderListItem = GetOrdersResult["orders"][number];
export type OrderPriority = Database["public"]["Enums"]["order_priority"];

export type GetOrdersOptions = {
  page?: number;
  pageSize?: number;
  status?: OrderStatus;
  priority?: OrderPriority;
  riderId?: string;
  zoneId?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy?: "recent" | "oldest";
  searchQuery?: string;
};

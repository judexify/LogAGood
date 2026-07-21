import { Users } from "lucide-react";

export type SideNavigationProps = {
  children: React.ReactNode;
};

export type OrderStatus =
  | "pending"
  | "assigned"
  | "picked_up"
  | "in_transit"
  | "delivered"
  | "cancelled";

export const statusColors: Record<OrderStatus, { bg: string; text: string }> = {
  pending: { bg: "bg-amber-100", text: "text-amber-700" },
  assigned: { bg: "bg-purple-100", text: "text-purple-700" },
  picked_up: { bg: "bg-cyan-100", text: "text-cyan-700" },
  in_transit: { bg: "bg-blue-100", text: "text-blue-700" },
  delivered: { bg: "bg-green-100", text: "text-green-700" },
  cancelled: { bg: "bg-red-100", text: "text-red-700" },
};

export type Order = {
  id: string;
  from: string;
  to: string;
  customer: string;
  rider: string;
  status: OrderStatus;
  time: string;
};

export type ScheduleStatus = "pending" | "in_transit" | "delivered";

export type ScheduleItem = {
  time: string;
  period: "AM" | "PM";
  title: string;
  orderId: string;
  customer: string;
  phone: string;
  status: ScheduleStatus;
  dotColor: string;
};

export type Trend = "up" | "down" | "same";

export type StatCard = {
  label: string;
  value: string | number;
  change: string;
  trend: Trend;
  gradientFrom: string;
  gradientTo: string;
  labelColor: string;
};

export type OverviewStat = {
  label: string;
  value: string | number;
  change: string;
  icon: typeof Users;
  iconBg: string;
  iconColor: string;
};

import { startOfDay, startOfWeek, startOfMonth } from "date-fns";
import { OrderPriority, OrderStatus } from "@/lib/type";

export const VALID_STATUSES: OrderStatus[] = [
  "pending",
  "assigned",
  "picked_up",
  "in_transit",
  "delivered",
  "cancelled",
];

export const VALID_PRIORITIES: OrderPriority[] = ["normal", "express"];

export function resolveDateRange(date?: string) {
  if (!date) return {};
  const now = new Date();
  if (date === "today") return { dateFrom: startOfDay(now).toISOString() };
  if (date === "week") return { dateFrom: startOfWeek(now).toISOString() };
  if (date === "month") return { dateFrom: startOfMonth(now).toISOString() };
  return {};
}

export function parseStatus(value?: string): OrderStatus | undefined {
  return VALID_STATUSES.includes(value as OrderStatus)
    ? (value as OrderStatus)
    : undefined;
}

export function parsePriority(value?: string): OrderPriority | undefined {
  return VALID_PRIORITIES.includes(value as OrderPriority)
    ? (value as OrderPriority)
    : undefined;
}

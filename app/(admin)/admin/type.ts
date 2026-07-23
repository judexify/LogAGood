import { OrderStatus } from "@/components/types";

export type TimelineStep = {
  label: string;
  time: string;
  state: "done" | "current" | "upcoming";
};

export type OrderDetail = {
  id: string;
  status: OrderStatus;
  createdTime: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupAddress: string;
  destinationAddress: string;
  deliveryNotes: string;
  timeline: TimelineStep[];
};

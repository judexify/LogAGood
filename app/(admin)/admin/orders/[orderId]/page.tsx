import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getOrderById } from "@/lib/data-service";
import OrderDetailSheet from "./OrderDetailSheet";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const supabase = await createClient();
  const order = await getOrderById(supabase, orderId);

  if (!order) return notFound();

  return <OrderDetailSheet order={order} />;
}

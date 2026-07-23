import { createClient } from "@/lib/supabase/server";
import OrdersTable from "./OrderTable";
import { getOrders } from "@/lib/data-service";

async function OrdersTableContainer({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) {
  const supabase = await createClient();
  const { orders, count } = await getOrders(supabase, { page, pageSize });

  return (
    <OrdersTable
      orders={orders}
      count={count}
      page={page}
      pageSize={pageSize}
    />
  );
}

export default OrdersTableContainer;

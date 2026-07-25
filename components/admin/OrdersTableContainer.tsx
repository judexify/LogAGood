import { createClient } from "@/lib/supabase/server";
import OrdersTable from "./OrderTable";
import { getOrders } from "@/lib/data-service";

async function OrdersTableContainer({
  page,
  pageSize,
  searchParams,
}: {
  page: number;
  pageSize: number;
  searchParams: string;
}) {
  const supabase = await createClient();
  const { orders, count } = await getOrders(supabase, {
    page,
    pageSize,
    searchQuery: searchParams,
  });

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

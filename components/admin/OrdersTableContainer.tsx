import { createClient } from "@/lib/supabase/server";
import OrdersTable from "./OrderTable";
import { getOrders } from "@/lib/data-service";
import {
  parsePriority,
  parseStatus,
  resolveDateRange,
} from "../shared/utils/utils";

async function OrdersTableContainer({
  page,
  pageSize,
  searchParams,
  status,
  priority,
  riderId,
  date,
  sortBy,
}: {
  page: number;
  pageSize: number;
  searchParams: string;
  status?: string;
  priority?: string;
  riderId?: string;
  date?: string;
  sortBy: "recent" | "oldest";
}) {
  const supabase = await createClient();
  const { orders, count } = await getOrders(supabase, {
    page,
    pageSize,
    searchQuery: searchParams,
    status: parseStatus(status),
    priority: parsePriority(priority),
    riderId,
    sortBy,
    ...resolveDateRange(date),
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

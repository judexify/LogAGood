import { createClient } from "@/lib/supabase/server";
import OrderCTA from "./OrderCTA";
import OrderFilters from "./OrderFilters";
import { getOrders } from "@/lib/data-service";
import LoadingSpinner from "../ui/LoadongSpinner";
import { Suspense } from "react";
import OrdersTableContainer from "./OrdersTableContainer";

function Orders() {
  return (
    <div className="flex flex-col gap-8">
      <OrderCTA />
      <OrderFilters />
      <Suspense fallback={<LoadingSpinner />}>
        <OrdersTableContainer page={1} pageSize={10} />
      </Suspense>
    </div>
  );
}

export default Orders;

import OrderCTA from "./OrderCTA";
import OrderFilters from "./OrderFilters";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Suspense } from "react";
import OrdersTableContainer from "./OrdersTableContainer";

function Orders({
  searchQuery,
  page,
  pageSize,
}: {
  searchQuery: string;
  page: number;
  pageSize: number;
}) {
  return (
    <div className="flex flex-col gap-8">
      <OrderCTA />
      <OrderFilters />
      <Suspense fallback={<LoadingSpinner />}>
        <OrdersTableContainer
          page={page}
          pageSize={pageSize}
          searchParams={searchQuery}
        />
      </Suspense>
    </div>
  );
}

export default Orders;

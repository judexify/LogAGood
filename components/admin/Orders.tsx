import OrderCTA from "./OrderCTA";
import OrderFilters from "./OrderFilters";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Suspense } from "react";
import OrdersTableContainer from "./OrdersTableContainer";

function Orders({
  searchQuery,
  page,
  pageSize,
  status,
  priority,
  riderId,
  date,
  sortBy,
}: {
  searchQuery: string;
  page: number;
  pageSize: number;
  status?: string;
  priority?: string;
  riderId?: string;
  date?: string;
  sortBy: "recent" | "oldest";
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
          status={status}
          priority={priority}
          riderId={riderId}
          date={date}
          sortBy={sortBy}
        />
      </Suspense>
    </div>
  );
}

export default Orders;

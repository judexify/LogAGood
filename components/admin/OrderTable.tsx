"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { statusColors } from "../types";
import { OrderListItem, Priority } from "@/lib/type";

import { formatStatus } from "@/lib/utils";
import OrdersPagination from "./OrderPagination";
import { useRouter } from "next/navigation";

const priorityColors: Record<Priority, { bg: string; text: string }> = {
  normal: { bg: "bg-slate-100", text: "text-slate-600" },
  express: { bg: "bg-orange-50", text: "text-orange-600" },
};

function OrdersTable({
  orders,
  count,
  pageSize,
  page,
}: {
  orders: OrderListItem[];
  count: number;
  page: number;
  pageSize: number;
}) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="uppercase text-[12px] font-semibold p-4">
              Order ID
            </TableHead>
            <TableHead className="uppercase text-[12px] font-semibold p-4">
              Customer
            </TableHead>
            <TableHead className="uppercase text-[12px] font-semibold p-4">
              Route
            </TableHead>
            <TableHead className="uppercase text-[12px] font-semibold p-4">
              Rider
            </TableHead>
            <TableHead className="uppercase text-[12px] font-semibold p-4">
              Priority
            </TableHead>
            <TableHead className="uppercase text-[12px] font-semibold p-4">
              Status
            </TableHead>
            <TableHead className="uppercase text-[12px] font-semibold p-4">
              Created
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              className="hover:bg-brand-lightest-primary"
              onClick={() => router.push(`/admin/orders/${order.id}`)}
            >
              <TableCell className="text-brand-secondary font-medium p-4">
                {order.id.slice(0, 8)}
              </TableCell>

              <TableCell className="p-4">
                <p className="font-medium text-slate-800">
                  {order.customer.full_name}
                </p>
                <p className="text-xs text-slate-400">{order.customer.phone}</p>
              </TableCell>

              <TableCell className="p-4">
                <p className="text-sm">from {order.pickup_address}</p>
                <p className="text-sm">to {order.dropoff_address}</p>
              </TableCell>

              <TableCell className="p-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{order.rider?.user.full_name}</span>
                </div>
              </TableCell>

              <TableCell className="p-4">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${priorityColors[order.priority].bg} ${priorityColors[order.priority].text}`}
                >
                  {order.priority === "express" ? "Express" : "Normal"}
                </span>
              </TableCell>

              <TableCell className="p-4">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[order.status].bg} ${statusColors[order.status].text}`}
                >
                  {formatStatus(order.status)}
                </span>
              </TableCell>

              <TableCell className="p-4 text-sm text-slate-500">
                {order.created_at}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <OrdersPagination count={count} page={page} pageSize={pageSize} />
    </div>
  );
}

export default OrdersTable;

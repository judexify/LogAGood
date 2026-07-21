"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order, statusColors } from "../types";
import { formatStatus } from "@/lib/utils";
import { motion, type Variants } from "motion/react";

const tableVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const orders: Order[] = [
  {
    id: "LG-00029",
    from: "Tanke Junction",
    to: "Fate Road",
    customer: "Mr. Ibrahim",
    rider: "Sodiq",
    status: "pending",
    time: "8:45 AM",
  },
  {
    id: "LG-00028",
    from: "Sango",
    to: "GRA",
    customer: "Mrs. Bola",
    rider: "Azeez",
    status: "in_transit",
    time: "8:20 AM",
  },
  {
    id: "LG-00027",
    from: "Taiwo Road",
    to: "Pipeline",
    customer: "Ms. Omolara",
    rider: "Kunle",
    status: "in_transit",
    time: "8:10 AM",
  },
  {
    id: "LG-00026",
    from: "University Road",
    to: "Oke Odo",
    customer: "Mr. Lawal",
    rider: "Sodiq",
    status: "delivered",
    time: "7:55 AM",
  },
  {
    id: "LG-00025",
    from: "Challenge",
    to: "Basin",
    customer: "Mr. Musa",
    rider: "Ridwan",
    status: "pending",
    time: "7:30 AM",
  },
];

const headers = ["Order id", "Route", "Customer", "Rider", "Status", "Time"];
const headerClass = "uppercase text-[12px] font-semibold p-4";

function DashboardOrderTable() {
  return (
    <Table className="bg-white rounded-xl p-5">
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header} className={headerClass}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <motion.tbody variants={tableVariants} initial="hidden" animate="visible">
        {orders.map((order) => (
          <motion.tr
            key={order.id}
            variants={rowVariants}
            className="hover:bg-brand-lightest-primary border-b transition-colors"
          >
            <TableCell className="text-brand-secondary font-medium p-4">
              {order.id}
            </TableCell>

            <TableCell className="font-medium p-4">
              {order.from} &rarr; {order.to}
            </TableCell>

            <TableCell className="p-4">{order.customer}</TableCell>

            <TableCell className="p-4">{order.rider}</TableCell>

            <TableCell>
              <span
                className={`${statusColors[order.status].bg} ${statusColors[order.status].text} rounded-2xl px-3 py-1 font-medium`}
              >
                {formatStatus(order.status)}
              </span>
            </TableCell>

            <TableCell className="p-4">{order.time}</TableCell>
          </motion.tr>
        ))}
      </motion.tbody>
    </Table>
  );
}

export default DashboardOrderTable;

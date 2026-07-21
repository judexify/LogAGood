"use client";

import { formatStatus } from "@/lib/utils";
import { ScheduleItem, statusColors } from "../types";
import { motion } from "motion/react";

const schedule: ScheduleItem[] = [
  {
    time: "09:00",
    period: "AM",
    title: "Pickup at Tanke Junction",
    orderId: "LG-00029",
    customer: "Mr. Ibrahim",
    phone: "0803 123 4567",
    status: "pending",
    dotColor: "bg-amber-400",
  },
  {
    time: "10:30",
    period: "AM",
    title: "Deliver to Fate Road",
    orderId: "LG-00028",
    customer: "Mrs. Bola",
    phone: "0806 987 6543",
    status: "in_transit",
    dotColor: "bg-blue-500",
  },
  {
    time: "12:00",
    period: "PM",
    title: "Deliver to Pipeline",
    orderId: "LG-00027",
    customer: "Ms. Omolara",
    phone: "0705 555 1212",
    status: "in_transit",
    dotColor: "bg-green-500",
  },
  {
    time: "01:30",
    period: "PM",
    title: "Deliver to Oke Odo",
    orderId: "LG-00026",
    customer: "Mr. Lawal",
    phone: "0802 345 6789",
    status: "delivered",
    dotColor: "bg-green-500",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function TodaySchedule() {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold text-lg mb-4">Today's Schedule</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative"
      >
        {schedule.map((item, index) => (
          <motion.div
            key={item.orderId}
            variants={itemVariants}
            className="relative flex gap-10 pb-6"
          >
            <div className="w-14 text-right shrink-0">
              <p className="text-sm font-semibold text-green-600 leading-tight">
                {item.time}
              </p>
              <p className="text-xs text-slate-400">{item.period}</p>
            </div>

            <div className="relative flex flex-col items-center w-2.5 shrink-0">
              <span
                className={`h-2.5 w-2.5 rounded-full ${item.dotColor} mt-1.5`}
              />
              {index !== schedule.length - 1 && (
                <span className="absolute top-4 bottom-0 w-px bg-slate-200" />
              )}
            </div>

            <div className="flex-1 flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-slate-800">{item.title}</p>
                <p className="text-sm text-slate-500">
                  Order {item.orderId} &middot; {item.customer} &middot;{" "}
                  {item.phone}
                </p>
              </div>

              <span
                className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full ${statusColors[item.status].bg} ${statusColors[item.status].text}`}
              >
                {formatStatus(item.status)}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center pt-2 border-t border-slate-100">
        <button className="text-sm text-green-600 font-medium py-3">
          View full schedule
        </button>
      </div>
    </div>
  );
}

export default TodaySchedule;

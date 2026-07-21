"use client";
import { Users, Bike, Gift, Banknote } from "lucide-react";
import { motion } from "motion/react";
import { OverviewStat } from "../types";

const overviewStats: OverviewStat[] = [
  {
    label: "Total Customers",
    value: 142,
    change: "18%",
    icon: Users,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    label: "Riders",
    value: 18,
    change: "12%",
    icon: Bike,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    label: "Orders This Week",
    value: 156,
    change: "24%",
    icon: Gift,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    label: "Total Earnings",
    value: "₦245,600",
    change: "15%",
    icon: Banknote,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function QuickOverview() {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="font-semibold text-lg mb-4">Quick Overview</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {overviewStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center gap-2"
            >
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center ${stat.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              <p className="text-[12px] text-slate-500 whitespace-nowrap">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-green-600 font-medium">
                &uarr; {stat.change}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default QuickOverview;

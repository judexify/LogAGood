"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { motion } from "motion/react";
import { StatCard, Trend } from "../types";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  },
};

const stats: StatCard[] = [
  {
    label: "Orders Today",
    value: 28,
    change: "21%",
    trend: "up",
    gradientFrom: "from-green-50",
    gradientTo: "to-white",
    labelColor: "text-green-700",
  },
  {
    label: "Riders Active",
    value: 16,
    change: "14%",
    trend: "up",
    gradientFrom: "from-blue-50",
    gradientTo: "to-white",
    labelColor: "text-blue-700",
  },
  {
    label: "Pending Pickup",
    value: 12,
    change: "8%",
    trend: "down",
    gradientFrom: "from-amber-50",
    gradientTo: "to-white",
    labelColor: "text-amber-700",
  },
  {
    label: "In Transit",
    value: 9,
    change: "Same",
    trend: "same",
    gradientFrom: "from-slate-50",
    gradientTo: "to-white",
    labelColor: "text-slate-700",
  },
  {
    label: "Completed Today",
    value: 19,
    change: "26%",
    trend: "up",
    gradientFrom: "from-green-50",
    gradientTo: "to-white",
    labelColor: "text-green-700",
  },
];

const trendConfig: Record<Trend, { icon: typeof TrendingUp; color: string }> = {
  up: { icon: TrendingUp, color: "text-green-600" },
  down: { icon: TrendingDown, color: "text-red-500" },
  same: { icon: Minus, color: "text-slate-400" },
};

function DashboardStats() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-5 gap-4"
    >
      {stats.map((stat) => {
        const TrendIcon = trendConfig[stat.trend].icon;

        return (
          <motion.div key={stat.label} variants={cardVariants}>
            <Card
              className={`bg-linear-to-br ${stat.gradientFrom} ${stat.gradientTo} border-none p-4`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wide ${stat.labelColor}`}
              >
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-slate-800 mt-1">
                {stat.value}
              </p>
              <div
                className={`flex items-center gap-1 text-xs font-medium mt-2 ${trendConfig[stat.trend].color}`}
              >
                {stat.trend !== "same" && <TrendIcon className="h-3 w-3" />}
                <span>
                  {stat.change} {stat.trend !== "same" ? "vs yesterday" : ""}
                </span>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default DashboardStats;

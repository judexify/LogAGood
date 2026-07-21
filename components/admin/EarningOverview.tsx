"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart } from "recharts";

const earningsData = [
  { day: "Mon", amount: 28000 },
  { day: "Tue", amount: 35000 },
  { day: "Wed", amount: 22000 },
  { day: "Thu", amount: 41000 },
  { day: "Fri", amount: 38000 },
  { day: "Sat", amount: 52000 },
  { day: "Sun", amount: 29600 },
];

const chartConfig: ChartConfig = {
  amount: {
    label: "Earnings",
    color: "#22c55e",
  },
};

function EarningsOverview() {
  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Earnings Overview</h2>

        <Select defaultValue="week">
          <SelectTrigger className="w-32.5">
            <SelectValue placeholder="This Week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-10">
          <div>
            <p className="text-sm text-slate-500">Total Earnings</p>
            <p className="text-xl font-bold text-slate-800">₦245,600</p>
            <p className="text-xs text-green-600 font-medium mt-1">
              &uarr; 15% vs last week
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Commission</p>
            <p className="text-xl font-bold text-slate-800">₦24,560</p>
            <p className="text-xs text-slate-400 mt-1">10% of earnings</p>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="h-16 w-32">
          <AreaChart data={earningsData}>
            <defs>
              <linearGradient id="earningsFill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-amount)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-amount)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="amount"
              type="monotone"
              stroke="var(--color-amount)"
              strokeWidth={2}
              fill="url(#earningsFill)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default EarningsOverview;

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const filterConfig = [
  {
    label: "Status",
    paramKey: "status",
    placeholder: "Status",
    options: [
      { value: "pending", label: "Pending" },
      { value: "assigned", label: "Assigned" },
      { value: "picked_up", label: "Picked Up" },
      { value: "in_transit", label: "In Transit" },
      { value: "delivered", label: "Delivered" },
      { value: "cancelled", label: "Cancelled" },
    ],
  },
  {
    label: "Priority",
    paramKey: "priority",
    placeholder: "Priority",
    options: [
      { value: "normal", label: "Normal" },
      { value: "express", label: "Express" },
    ],
  },
  {
    label: "Assigned Rider",
    paramKey: "riderId",
    placeholder: "Assigned Rider",
    options: [], // will come from riders table later
  },
  {
    label: "Pickup Area",
    paramKey: "zoneId",
    placeholder: "Pickup Area",
    options: [], // will come from zones table later
  },
  {
    label: "Date",
    paramKey: "date",
    placeholder: "Date",
    options: [
      { value: "today", label: "Today" },
      { value: "week", label: "This Week" },
      { value: "month", label: "This Month" },
    ],
  },
];

function OrderFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateFilterParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.set("page", "1");
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3">
      {filterConfig.map((filter) => (
        <Select
          key={filter.label}
          value={searchParams.get(filter.paramKey) ?? ""}
          onValueChange={(value) => updateFilterParam(filter.paramKey, value)}
        >
          <SelectTrigger className="w-37.5">
            <SelectValue placeholder={filter.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {filter.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}

      <div className="ml-auto flex items-center gap-2 text-sm">
        <span className="text-slate-500">Sort By:</span>
        <Select
          value={searchParams.get("sortBy") ?? "recent"}
          onValueChange={(value) => updateFilterParam("sortBy", value)}
        >
          <SelectTrigger className="w-37.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Recent First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default OrderFilters;

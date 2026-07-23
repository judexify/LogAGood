import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filterConfig = [
  {
    label: "Status",
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
    placeholder: "Priority",
    options: [
      { value: "normal", label: "Normal" },
      { value: "express", label: "Express" },
    ],
  },
  {
    label: "Assigned Rider",
    placeholder: "Assigned Rider",
    options: [], // will come from riders table later
  },
  {
    label: "Pickup Area",
    placeholder: "Pickup Area",
    options: [], // will come from zones table later
  },
  {
    label: "Date",
    placeholder: "Date",
    options: [
      { value: "today", label: "Today" },
      { value: "week", label: "This Week" },
      { value: "month", label: "This Month" },
    ],
  },
];

function OrderFilters() {
  return (
    <div className="flex items-center gap-3">
      {filterConfig.map((filter) => (
        <Select key={filter.label}>
          <SelectTrigger className="w-[150px]">
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
        <Select defaultValue="recent">
          <SelectTrigger className="w-[150px]">
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

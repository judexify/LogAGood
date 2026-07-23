import InputBox from "@/components/shared/InputBox";
import { Button } from "@/components/ui/button";
import { Download, Filter, Plus } from "lucide-react";

function OrderCTA() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-160">
        <InputBox
          placeholderText="Search Orders, Orders and Tracking ID"
          className="rounded-3xl"
        />
      </div>
      <div className="flex items-center gap-6">
        <Button variant="outline" className="gap-2 cursor-pointer">
          <Filter className="h-4 w-4" /> Filter
        </Button>
        <Button variant="outline" className="gap-2 cursor-pointer">
          <Download className="h-4 w-4" /> Export
        </Button>
        <Button className="gap-2 px-6 bg-brand-primary hover:bg-brand-secondary cursor-pointer">
          <Plus className="h-4 w-4" /> Create New Order
        </Button>
      </div>
    </div>
  );
}

export default OrderCTA;

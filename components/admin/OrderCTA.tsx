"use client";

import InputBox from "@/components/shared/InputBox";
import { Button } from "@/components/ui/button";
import { Download, Filter, Plus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

function OrderCTA() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [value, setValue] = useState<string>(searchParams?.get("query") ?? "");

  const updateUrlParams = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    params.set("page", "1");
    router.replace(`?${params.toString()}`);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateUrlParams(event.target.value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="w-160">
        <InputBox
          value={value}
          onChange={handleChange}
          placeholderText="Search Customer's Name"
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

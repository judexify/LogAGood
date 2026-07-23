"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Pencil, Printer, Phone, MapPin, Navigation } from "lucide-react";

import { formatStatus } from "@/lib/utils";
import { notFound, useRouter } from "next/navigation";
import { statusColors } from "@/components/types";
import { OrderWithRelations } from "@/lib/type";
import { buildOrderTimeline } from "./utils";

export default function OrderDetailSheet({
  order,
}: {
  order: NonNullable<OrderWithRelations>;
}) {
  const router = useRouter();

  function handleOpenChange() {
    router.push("/admin/orders");
  }

  if (!order) return notFound();

  return (
    <Sheet open={true} onOpenChange={handleOpenChange}>
      <SheetContent className="w-[calc(100%-260px)]! max-w-none! overflow-y-auto p-8">
        <SheetHeader className="p-0 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle className="text-2xl">Order {order.id}</SheetTitle>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[order.status].bg} ${statusColors[order.status].text}`}
                >
                  {formatStatus(order.status)}
                </span>
                <span className="text-sm text-slate-400">
                  Created {order.created_at}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Printer className="h-4 w-4" />
              </Button>
              <Button>Complete Order</Button>
            </div>
          </div>
        </SheetHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Status Timeline */}
          <div className="bg-white border border-slate-100 rounded-xl p-5 md:row-span-2">
            <h3 className="font-semibold mb-4">Status Timeline</h3>

            <div className="relative">
              {buildOrderTimeline(order.order_status_history, order.status).map(
                (step, index, steps) => (
                  <div key={step.label} className="relative flex gap-4 pb-6">
                    <div className="relative flex flex-col items-center w-4 shrink-0">
                      <span
                        className={`h-4 w-4 rounded-full flex items-center justify-center ${
                          step.state === "done"
                            ? "bg-green-500"
                            : step.state === "current"
                              ? "bg-white border-2 border-green-500"
                              : "bg-slate-200"
                        }`}
                      />
                      {index !== steps.length - 1 && (
                        <span className="absolute top-4 bottom-0 w-px bg-slate-200" />
                      )}
                    </div>

                    <div>
                      <p
                        className={`font-medium ${
                          step.state === "upcoming"
                            ? "text-slate-400"
                            : "text-slate-800"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-slate-400">
                        {step.time
                          ? new Date(step.time).toLocaleString()
                          : "Pending"}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Customer Details */}
          <div className="bg-white border border-slate-100 rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase text-slate-500 mb-4">
              Customer Details
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800">
                  {order.customer.full_name}
                </p>
                <p className="text-sm text-slate-400">{order.customer.email}</p>
                <p className="text-sm text-slate-400">{order.customer.phone}</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" /> Call Customer
              </Button>
            </div>
          </div>

          {/* Pickup / Destination */}
          <div className="bg-white border border-slate-100 rounded-xl p-5 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-semibold uppercase text-slate-500 mb-2">
                Pickup Address
              </h3>
              <div className="flex gap-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-sm">{order.pickup_address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-slate-500 mb-2">
                Destination Address
              </h3>
              <div className="flex gap-2">
                <Navigation className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-sm">{order.dropoff_address}</p>
              </div>
            </div>
          </div>

          {/* Delivery Notes */}
          <div className="bg-white border border-slate-100 rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase text-slate-500 mb-2">
              Delivery Notes
            </h3>
            <p className="text-sm italic text-slate-600">
              &ldquo;{order.delivery_notes}&rdquo;
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

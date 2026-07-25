"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { completeOrder } from "@/lib/action";
import { toast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";

function CompleteOrderBtn({
  status,
  orderId,
}: {
  status: string;
  orderId: string;
}) {
  const [open, setOpen] = useState(false);
  const isDisabled = status === "delivered" || status === "cancelled";

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Button
        variant="outline"
        disabled={isDisabled}
        onClick={() => setOpen(true)}
      >
        Complete Order
      </Button>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to complete order {orderId}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Once completed, you can&apos;t reverse it any longer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <CompleteOrder
            status={status}
            orderId={orderId}
            onSuccess={() => setOpen(false)}
            isDisabled={isDisabled}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function CompleteOrder({
  status,
  orderId,
  onSuccess,
  isDisabled,
}: {
  status: string;
  orderId: string;
  onSuccess: () => void;
  isDisabled: boolean;
}) {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    () => completeOrder(orderId),
    {
      success: null,
      message: "",
    },
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.add({ type: "success", description: state.message });
      onSuccess();
      router.refresh();
    } else {
      toast.add({
        type: "error",
        description: state.message,
        priority: "high",
      });
    }
  }, [state.success, state.message, router, onSuccess]);

  return (
    <form action={formAction}>
      <Button
        type="submit"
        disabled={isDisabled}
        className={`${status === "delivered" ? "disabled:bg-gray-600 cursor-not-allowed" : ""} bg-brand-primary hover:bg-brand-secondary`}
      >
        {isPending ? (
          <>
            Completing <Spinner />
          </>
        ) : (
          "Complete Order"
        )}
      </Button>
    </form>
  );
}

export default CompleteOrderBtn;

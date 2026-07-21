import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import { logOut as logOutAction } from "@/lib/action";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Spinner } from "../ui/spinner";

function LogOut() {
  return (
    <div className="flex gap-3 items-center justify-center p-4 border-t-[0.5] border-brand-lighter-primary">
      <div className="flex items-center justify-center gap-4">
        <Image
          src="/logo.png"
          alt="user"
          width={32}
          height={32}
          className="rounded-full w-8 h-8 object-cover"
        />
        <div className="flex flex-col">
          <span className="text-brand-neutral ">Oluwadunsi</span>
          <span className="text-brand-lighter-primary">Admin</span>
        </div>
      </div>
      <LogOutButton />
    </div>
  );
}

function LogOutButton() {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          <LogOutIcon color="gray" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Log out of LogAGood?</AlertDialogTitle>
            <AlertDialogDescription>
              You'll need to sign in again to access your dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form action={logOutAction}>
              <LogoutSubmitButton />
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function LogoutSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        buttonVariants({ variant: "default" }),
        "bg-brand-secondary hover:bg-brand-lighter-primary hover:text-black",
      )}
    >
      {pending ? <Spinner /> : "Continue"}
    </button>
  );
}

export default LogOut;

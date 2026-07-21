import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { adminPageText } from "./page-text.ts/admin";
import { riderPageText } from "./page-text.ts/rider";
import { customerPageText } from "./page-text.ts/customerPageText";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStatus(status: string) {
  return status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getPageTextMap(role: "admin" | "rider" | "customer") {
  if (role === "admin") return adminPageText;
  if (role === "rider") return riderPageText;
  return customerPageText;
}

export function getTimeOfDayGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return "Good morning";
  } else if (currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

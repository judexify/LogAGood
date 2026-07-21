"use client";
import { Bell, MapPin } from "lucide-react";
import Image from "next/image";
import { useUser } from "./UserContext";
import { usePathname } from "next/navigation";
import { adminPageText } from "@/lib/page-text.ts/admin";
import { riderPageText } from "@/lib/page-text.ts/rider";
import { customerPageText } from "@/lib/page-text.ts/customerPageText";
import { getPageTextMap, getTimeOfDayGreeting } from "@/lib/utils";

function Header({
  userName,
  role,
}: {
  userName: string;
  role: "admin" | "rider" | "customer";
}) {
  const pathname = usePathname();

  const timeofDay = getTimeOfDayGreeting();
  const pageTextMap = getPageTextMap(role);

  const roleHome = `/${role}`;
  const isHome = pathname === roleHome;

  const content = isHome
    ? {
        title: `${timeofDay}, ${userName} 👋`,
        subtitle: "Here's what's happening in Ilorin today",
      }
    : (pageTextMap[pathname] ?? { title: "", subtitle: "" });

  return (
    <header className="flex items-center justify-between sticky top-0 h-20 px-6">
      <div>
        <span className="font-semibold">{content.title}</span>
        <p>{content.subtitle}</p>
      </div>

      <div className="flex items-center gap-5 ">
        <div className="mr-3 bg-brand-neutral p-2.5 rounded-2xl font-medium flex items-center gap-2">
          <span>
            <MapPin />
          </span>
          ilorin, Kwara State
        </div>
        <button className="relative">
          <Bell className="hover:text-brand-primary" />
          <span className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 rounded-full">
            5
          </span>
        </button>
        <Image
          src="/logo.png"
          width={48}
          height={48}
          alt="LogAGood's Brand Logo"
          className="rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;

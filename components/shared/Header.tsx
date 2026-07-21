import { Bell, MapPin } from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between sticky top-0 h-20 px-6">
      <div>
        <span className="font-semibold">Good Morning, Jude Oluwadunsi.👋</span>
        <p>Here's what's happening in ilorin today</p>
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

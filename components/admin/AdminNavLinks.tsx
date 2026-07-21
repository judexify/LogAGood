"use client";

import {
  Banknote,
  Bell,
  LayoutGrid,
  Milestone,
  Package,
  Settings,
  Truck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navLinks = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <LayoutGrid className="h-5 w-5" />,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: <Package className="h-5 w-5" />,
  },
  {
    name: "Riders",
    href: "/admin/riders",
    icon: <Truck className="h-5 w-5" />,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: <Milestone className="h-5 w-5" />,
  },
  {
    name: "Earnings",
    href: "/admin/earnings",
    icon: <Banknote className="h-5 w-5" />,
  },
  {
    name: "Notifications",
    href: "/admin/notifications",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

function AdminNavLinks() {
  const pathname = usePathname();
  return (
    <>
      <motion.ul
        className="flex flex-col gap-2 h-full text-lg"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {/* it will hold the active classes of each nav */}
        {navLinks.map((link) => (
          <motion.li key={link.name} variants={itemVariants}>
            <Link
              className={`py-3 px-5 rounded-sm text-brand-lighter-primary hover:bg-brand-primary hover:text-brand-lighter-primary transition-colors flex items-center gap-2 font-medium text-sm ${pathname === link.href ? "bg-brand-primary text-brand-neutral" : ""}`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}

export default AdminNavLinks;

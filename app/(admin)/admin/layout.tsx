import AdminNavLinks from "@/components/admin/AdminNavLinks";
import Header from "@/components/shared/Header";
import SideNavigation from "@/components/shared/SideNavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogAGood | Admin Dashboard",
  description:
    "LogAGood is a modern logistics and delivery platform that connects businesses, riders, and customers. Manage deliveries, track orders in real time, assign riders, and streamline logistics operations across Nigeria.",
};

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="row-span-2">
        <SideNavigation>
          <AdminNavLinks />
        </SideNavigation>
      </div>

      <Header />

      <div className="overflow-y-auto p-6 bg-brand-neutral">{children}</div>
    </div>
  );
}
export default AdminLayout;

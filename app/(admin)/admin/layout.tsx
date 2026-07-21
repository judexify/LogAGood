import AdminNavLinks from "@/components/admin/AdminNavLinks";
import { UserProvider } from "@/components/shared/UserContext";
import Header from "@/components/shared/Header";
import SideNavigation from "@/components/shared/SideNavigation";
import { getCurrentUser } from "@/lib/data-service";
import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogAGood | Admin Dashboard",
  description:
    "LogAGood is a modern logistics and delivery platform that connects businesses, riders, and customers. Manage deliveries, track orders in real time, assign riders, and streamline logistics operations across Nigeria.",
};

async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;

  const currentUser = await getCurrentUser(supabase, userId || "");

  if (!currentUser) {
    return null;
  }

  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-screen">
      <UserProvider user={{ ...currentUser, id: userId! }}>
        <div className="row-span-2">
          <SideNavigation>
            <AdminNavLinks />
          </SideNavigation>
        </div>

        <Header userName={currentUser.full_name} role={currentUser.role} />

        <div className="overflow-y-auto p-6 bg-brand-neutral">{children}</div>
      </UserProvider>
    </div>
  );
}
export default AdminLayout;

import CustomerNavLinks from "@/components/customer/CustomerNavLinks";
import Header from "@/components/shared/Header";
import SideNavigation from "@/components/shared/SideNavigation";
import { UserProvider } from "@/components/shared/UserContext";
import { getCurrentUser } from "@/lib/data-service";
import { createClient } from "@/lib/supabase/server";

export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <CustomerNavLinks />
          </SideNavigation>
        </div>

        <Header userName={currentUser.full_name} role={currentUser.role} />

        <div className="overflow-y-auto p-6">{children}</div>
      </UserProvider>
    </div>
  );
}

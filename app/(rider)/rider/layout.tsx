import CustomerNavLinks from "@/components/customer/CustomerNavLinks";
import Header from "@/components/shared/Header";
import SideNavigation from "@/components/shared/SideNavigation";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="row-span-2">
        <SideNavigation>
          <CustomerNavLinks />
        </SideNavigation>
      </div>

      <Header />

      <div className="overflow-y-auto p-6">{children}</div>
    </div>
  );
}

import DashboardOrderTable from "@/components/admin/DashboardOrderTable";
import DashboardOverview from "@/components/admin/DashboardOverview";
import DashboardStats from "@/components/admin/DashboardStats";
import TodaySchedule from "@/components/admin/TodayScheduleCard";

function page() {
  return (
    <div className="grid gap-6">
      <DashboardStats />

      <DashboardOrderTable />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <TodaySchedule />
        </div>
        <div className="lg:col-span-1">
          {/* item that goes beside TodaySchedule — Quick Overview / Earnings later */}
          <DashboardOverview />
        </div>
      </div>
    </div>
  );
}

export default page;

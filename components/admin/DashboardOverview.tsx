import EarningOverview from "./EarningOverview";
import QuickOverview from "./QuickOverview";

function DashboardOverview() {
  return (
    <div className="flex flex-col gap-6">
      <QuickOverview />
      <EarningOverview />
    </div>
  );
}

export default DashboardOverview;

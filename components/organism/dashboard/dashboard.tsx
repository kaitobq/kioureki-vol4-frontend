import { DashboardBody } from "@/components/molecules/dashboard/top/dashboard-body";
import { DashboardHeader } from "./dashboard-header";
import { DashboardTabs } from "./dashboard-tabs";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <DashboardHeader />
      <DashboardBody />
      <DashboardTabs />
    </div>
  );
}

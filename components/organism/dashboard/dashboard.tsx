import { DashboardBody } from "@/components/molecules/dashboard/dashboard-body";
import { DashboardHeader } from "../../molecules/dashboard/dashboard-header";
import { DashboardTabs } from "@/components/molecules/dashboard/dashboard-tabs";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <DashboardHeader />
      <DashboardBody />
      <DashboardTabs />
    </div>
  );
}

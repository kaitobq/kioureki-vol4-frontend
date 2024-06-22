import { DashboardBody } from "@/components/molecules/dashboard/dashboard-body";
import { DashboardHeader } from "../../molecules/dashboard/dashboard-header";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <DashboardHeader />
      <DashboardBody />
    </div>
  );
}

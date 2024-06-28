"use client";

import { Card } from "../../../atoms/common/card";
import { useInjuredThisWeek } from "@/lib/hooks/dashboard/use-injured-thisweek";
import { DashboardTHead } from "@/components/atoms/dashboard/top/dashboard-thead";
import { DashboardTBody } from "@/components/atoms/dashboard/top/dashboard-tbody";
import { SkeletonTable } from "@/components/atoms/dashboard/top/skeleton-table";

export function InjuredPlayerCard() {
  const { injuredThisWeek, loading } = useInjuredThisWeek();
  return (
    <Card>
      <h3 className="font-semibold mb-3 text-center">
        直近１週間で受傷した選手
      </h3>
      <table className="*:border-b">
        <DashboardTHead />
        <tbody className="*:border-b">
          {loading || !injuredThisWeek ? (
            <SkeletonTable />
          ) : (
            <DashboardTBody records={injuredThisWeek} />
          )}
        </tbody>
      </table>
    </Card>
  );
}

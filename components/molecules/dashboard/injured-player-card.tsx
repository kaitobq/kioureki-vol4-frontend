"use client";

import { SkeletonTable } from "@/components/atoms/dashboard/skeleton-table";
import { Card } from "../../atoms/common/card";
import { useInjuredThisWeek } from "@/lib/hooks/dashboard/use-injured-thisweek";
import { DashboardThead } from "@/components/atoms/dashboard/dashboard-thead";
import { DashboardTBody } from "@/components/atoms/dashboard/dashboard-tbody";

export function InjuredPlayerCard() {
  const { injuredThisWeek, loading } = useInjuredThisWeek();
  return (
    <Card>
      <h3 className="font-semibold mb-3 text-center">
        直近１週間で受傷した選手
      </h3>
      <table className="*:border-b">
        <DashboardThead />
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

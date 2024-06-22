"use client";

import { Card } from "@/components/atoms/common/card";
import { DashboardTBody } from "@/components/atoms/dashboard/dashboard-tbody";
import { DashboardThead } from "@/components/atoms/dashboard/dashboard-thead";
import { SkeletonTable } from "@/components/atoms/dashboard/skeleton-table";
import useRecoveryThisWeek from "@/lib/hooks/dashboard/use-recovery-thisweek";

export function RecoveryPlayerCard() {
  const { recoveryThisWeek, loading } = useRecoveryThisWeek();
  return (
    <Card>
      <h3 className="font-semibold mb-3 text-center">今週復帰予定の選手</h3>
      <table className="*:border-b">
        <DashboardThead />
        <tbody className="*:border-b">
          {loading || !recoveryThisWeek ? (
            <SkeletonTable />
          ) : (
            <DashboardTBody records={recoveryThisWeek} />
          )}
        </tbody>
      </table>
    </Card>
  );
}

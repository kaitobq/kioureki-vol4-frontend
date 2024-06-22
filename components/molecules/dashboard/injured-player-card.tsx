"use client";

import { SkeletonTable } from "@/components/atoms/dashboard/skeleton-table";
import { Card } from "../../atoms/common/card";
import { useInjuredThisWeek } from "@/lib/hooks/dashboard/use-injured-thisweek";
import { InjuredPlayerTable } from "@/components/atoms/dashboard/injured-player-table";
import { InjuredPlayerThead } from "@/components/atoms/dashboard/injured-player-thead";

export function InjuredPlayerCard() {
  const { injuredThisWeek, loading } = useInjuredThisWeek();
  return (
    <Card>
      <h3 className="font-semibold mb-3 text-center">
        直近１週間で受傷した選手
      </h3>
      <table className="*:border-b">
        <InjuredPlayerThead />
        <tbody className="*:border-b">
          {loading || !injuredThisWeek ? (
            <SkeletonTable />
          ) : (
            <InjuredPlayerTable injuredThisWeek={injuredThisWeek} />
          )}
        </tbody>
      </table>
    </Card>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { InjuredPlayerCard } from "./injured-player-card";
import { RecoveryPlayerCard } from "./recovery-player-card";

export function DashboardBody() {
  const params = useSearchParams();
  return (
    <>
      {!params.has("tab") && (
        <div className="flex my-32 justify-evenly w-full">
          <InjuredPlayerCard />
          <RecoveryPlayerCard />
        </div>
      )}
    </>
  );
}

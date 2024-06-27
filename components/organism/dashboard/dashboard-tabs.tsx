"use client";

import { useSearchParams } from "next/navigation";
import { MedicalRecordTab } from "../../molecules/dashboard/medical-record-tab";
import { RehabilitationTab } from "../../molecules/dashboard/rehabilitation-tab";
import { PlayerTab } from "../../molecules/dashboard/player-tab";

export function DashboardTabs() {
  const params = useSearchParams();
  return (
    <div className="w-full flex justify-center">
      {params.get("tab") === "medicalrecord" && <MedicalRecordTab />}
      {params.get("tab") === "rehabilitation" && <RehabilitationTab />}
      {params.get("tab") === "player" && <PlayerTab />}
    </div>
  );
}

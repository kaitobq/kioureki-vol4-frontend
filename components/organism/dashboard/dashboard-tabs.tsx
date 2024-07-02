"use client";

import { useSearchParams } from "next/navigation";
import { MedicalRecordTab } from "../../molecules/dashboard/medical-record/medical-record-tab";
import { RehabilitationTab } from "../../molecules/dashboard/rehabilitation/rehabilitation-tab";
import { PlayerTab } from "../../molecules/dashboard/player/player-tab";
import { MedicalRecordDetail } from "@/components/atoms/dashboard/medical-record/medical-record-detail";

export function DashboardTabs() {
  const params = useSearchParams();
  return (
    <div className="w-full flex justify-center">
      {params.get("tab") === "medicalrecord" && !params.has("id") && (
        <MedicalRecordTab />
      )}
      {params.get("tab") === "medicalrecord" && params.has("id") && (
        <MedicalRecordDetail />
      )}
      {params.get("tab") === "rehabilitation" && <RehabilitationTab />}
      {params.get("tab") === "player" && <PlayerTab />}
    </div>
  );
}

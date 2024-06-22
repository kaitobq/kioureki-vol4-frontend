"use client";

import useMedicalRecord from "@/lib/hooks/dashboard/use-medical-records";
import { useSearchParams } from "next/navigation";
import { MedicalRecordTab } from "./medical-record_tab";
import { RehabilitationTab } from "./rehabilitation-tab";
import { PlayerTab } from "./player-tab";

export function DashboardTabs() {
  const { medicalRecords, loading } = useMedicalRecord();
  const params = useSearchParams();
  return (
    <div>
      {params.get("tab") === "medicalrecord" && <MedicalRecordTab />}
      {params.get("tab") === "rehabilitation" && <RehabilitationTab />}
      {params.get("tab") === "player" && <PlayerTab />}
    </div>
  );
}

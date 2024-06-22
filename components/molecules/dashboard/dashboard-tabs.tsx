"use client";

import useMedicalRecord from "@/lib/hooks/dashboard/use-medical-records";

export function DashboardTabs() {
  const { medicalRecords, loading } = useMedicalRecord();
  return <div>DashboardTabs</div>;
}

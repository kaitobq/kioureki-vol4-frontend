"use client";

import Dashboard from "@/components/organism/dashboard/dashboard";
import { useCurrentOrganization } from "@/lib/hooks/dashboard/use-current-organization";
import { useMedicalRecord } from "@/lib/hooks/dashboard/use-medical-records";
import { useOrganization } from "@/lib/hooks/dashboard/use-organizations";
import { usePlayer } from "@/lib/hooks/dashboard/use-player";
import { useRehabilitation } from "@/lib/hooks/dashboard/use-rehabilitation";
import { AuthProvider } from "@/lib/utils/auth/auth-provider";
import { useEffect } from "react";

export default function DashboardPage() {
  const { organizations } = useOrganization();
  const { currentOrganization } = useCurrentOrganization();
  const { players } = usePlayer();
  const { medicalRecords } = useMedicalRecord();
  const { records } = useRehabilitation();

  useEffect(() => {
    console.log("[dashboard page] : fetching ...");
    if (
      !organizations ||
      !currentOrganization ||
      !players ||
      !medicalRecords ||
      !records
    ) {
      return;
    } else {
      console.log("[dashboard page] : Organizations:", organizations);
      console.log(
        "[dashboard page] : Current Organization:",
        currentOrganization
      );
      console.log("[dashboard page] : Players:", players);
      console.log("[dashboard page] : MedicalRecords:", medicalRecords);
      console.log("[dashboard page] : Rehabilitation:", records);
      console.log("[dashboard page] : DONE!!!!!");
    }
  }, [organizations, currentOrganization, players, medicalRecords, records]);

  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

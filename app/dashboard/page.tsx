"use client";

import Dashboard from "@/components/organism/dashboard/dashboard";
import { useCurrentOrganization } from "@/lib/hooks/dashboard/use-current-organization";
import { useOrganization } from "@/lib/hooks/dashboard/use-organizations";
import { usePlayer } from "@/lib/hooks/dashboard/use-player";
import { AuthProvider } from "@/lib/utils/auth/auth-provider";
import { useEffect } from "react";

export default function DashboardPage() {
  const { organizations } = useOrganization();
  const { currentOrganization } = useCurrentOrganization();
  const { players } = usePlayer();

  useEffect(() => {
    console.log("[dashboard page] : fetching ...");
    if (!organizations || !currentOrganization || !players) {
      return;
    } else {
      console.log("[dashboard page] : Organizations:", organizations);
      console.log(
        "[dashboard page] : Current Organization:",
        currentOrganization
      );
      console.log("[dashboard page] : Players:", players);
      console.log("[dashboard page] : DONE!!!!!");
    }
  }, [organizations, currentOrganization, players]);

  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

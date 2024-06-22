"use client";

import { DashboardHeaderLinks } from "@/components/atoms/dashboard/dashboard-header-links";
import { useCurrentOrganization } from "@/lib/hooks/dashboard/use-current-organization";
import { useOrganization } from "@/lib/hooks/dashboard/use-organizations";
import Link from "next/link";
import { useEffect } from "react";

export function DashboardHeader() {
  const { organizations } = useOrganization();
  const { currentOrganization, loading } = useCurrentOrganization();

  useEffect(() => {
    if (!loading) {
      console.log("Organizations:", organizations);
      console.log("Current Organization:", currentOrganization);
    }
  }, [organizations, currentOrganization, loading]);

  return (
    <>
      <div className="border-b py-2 px-5 flex items-center justify-between w-full *:py-2">
        <Link href="/">
          <h1>Kioureki</h1>
        </Link>
        {!loading && currentOrganization && (
          <span>{currentOrganization.name}</span>
        )}
      </div>
      <DashboardHeaderLinks />
    </>
  );
}

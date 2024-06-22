"use client";

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
      <div className="border-b py-2 px-5 flex items-center justify-between w-full">
        <Link href="/">
          <h1>Kioureki</h1>
        </Link>
        {!loading && currentOrganization && (
          <span>{currentOrganization.name}</span>
        )}
      </div>
      <div className="border-b py-1 px-5 flex items-center font-semibold text-sm gap-3 w-full">
        <Link href="/dashboard?tab=medicalrecord">データベース</Link>
        <Link href="/dashboard?tab=rehabilitation">リハビリメンバー</Link>
        <Link href="/dashboard?tab=player">選手一覧</Link>
      </div>
    </>
  );
}

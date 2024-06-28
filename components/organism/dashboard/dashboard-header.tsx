"use client";

import { DashboardHeaderLinks } from "@/components/atoms/dashboard/dashboard-header-links";
import { currentOrganizationAtom } from "@/lib/atom/dashboard";
import { useAtom } from "jotai";
import Link from "next/link";

export function DashboardHeader() {
  const [currentOrganization] = useAtom(currentOrganizationAtom);

  return (
    <>
      <div className="border-b py-2 px-5 flex items-center justify-between w-full *:py-2 *:font-semibold">
        <Link href="/dashboard">
          <h1 className=" text-xl">Kioureki</h1>
        </Link>
        {currentOrganization && <span>{currentOrganization.name}</span>}
      </div>
      <DashboardHeaderLinks />
    </>
  );
}

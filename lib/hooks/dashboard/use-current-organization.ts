"use client";

import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../cookie/use-cookie";
import {
  currentOrganizationAtom,
  organizationAtom,
} from "@/lib/atom/dashboard";

export function useCurrentOrganization() {
  const [organizations] = useAtom(organizationAtom);
  const [currentOrganization, setCurrentOrganization] = useAtom(
    currentOrganizationAtom
  );
  const [loading, setLoading] = useState(true);

  const fetchCurrentOrganization = async () => {
    const currentOrgId = await getCookie("currentOrgId");
    if (organizations && organizations.length > 0) {
      if (!currentOrgId) {
        await setCookie("currentOrgId", organizations[0].ID.toString());
        setCurrentOrganization(organizations[0]);
      } else {
        const org = organizations.find(
          (org) => org.ID === Number(currentOrgId)
        );
        setCurrentOrganization(org || organizations[0]);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    // console.log("[useCurrentOrganization] : fetching current organization");
    if (!organizations) {
      console.log("[useCurrentOrganization] : organizations is null");
      setLoading(false);
      return;
    } else if (organizations.length === 0) {
      console.log("[useCurrentOrganization] : organizations is empty");
      setLoading(false);
      return;
    } else {
      fetchCurrentOrganization();
      console.log("[useCurrentOrganization] : success!!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organizations, setCurrentOrganization]);

  return { currentOrganization, loading };
}

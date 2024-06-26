import { useAtom } from "jotai";
import apiClient from "@/lib/utils/api/apiclient";
import { getCookie } from "../cookie/use-cookie";
import { useEffect, useState } from "react";
import { Organization } from "@/types/dashboard/organization";
import { organizationAtom } from "@/lib/atom/dashboard";

export function useOrganization() {
  const [organizations, setOrganizations] = useAtom(organizationAtom);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchOrganization = async () => {
    try {
      setLoading(true);
      const token = await getCookie("token");
      const response = await apiClient.get("/protected/organization", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrganizations(response.data.organizations as Organization[]);
      console.log("[useOrganization] : success!!");
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log("[useOrganization] : failed!!");
    }
  };
  useEffect(() => {
    // console.log("[useOrganization] : fetching organizations");
    fetchOrganization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { organizations };
}

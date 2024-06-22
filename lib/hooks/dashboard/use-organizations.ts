import { useAtom } from "jotai";
import apiClient from "@/lib/utils/api/apiclient";
import { getCookie } from "../cookie/use-cookie";
import { useEffect } from "react";
import { organizationAtom } from "@/lib/atom/organizations";
import { Organization } from "@/types/dashboard/organization";

export function useOrganization() {
  const [organizations, setOrganizations] = useAtom(organizationAtom);

  const fetchOrganization = async () => {
    try {
      const token = await getCookie("token");
      const response = await apiClient.get("/protected/organization", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data.organizations);
      setOrganizations(response.data.organizations as Organization[]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("fetching organizations");
    fetchOrganization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { organizations };
}

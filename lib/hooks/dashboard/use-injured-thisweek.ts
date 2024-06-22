import { currentOrganizationAtom } from "@/lib/atom/current-organization";
import apiClient from "@/lib/utils/api/apiclient";
import { useAtom } from "jotai";
import { getCookie } from "../cookie/use-cookie";
import { useEffect, useState } from "react";
import { MedicalRecord } from "@/types/dashboard/medical-record";

export function useInjuredThisWeek() {
  const [currentOrganization] = useAtom(currentOrganizationAtom);
  const [injuredThisWeek, setInjuredThisWeek] = useState<
    MedicalRecord[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const token = await getCookie("token");
      const response = await apiClient.get(
        `/protected/organization/${currentOrganization?.ID}/medicalrecord/week`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("k", response.data);
      setInjuredThisWeek(response.data.medicalRecords);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentOrganization) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrganization]);

  return { injuredThisWeek, loading };
}

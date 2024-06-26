import { MedicalRecord } from "@/types/dashboard/medical-record";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getCookie } from "../cookie/use-cookie";
import apiClient from "@/lib/utils/api/apiclient";
import { currentOrganizationAtom } from "@/lib/atom/dashboard";

export default function useRecoveryThisWeek() {
  const [currentOrganization] = useAtom(currentOrganizationAtom);
  const [recoveryThisWeek, setRecoveryThisWeek] = useState<
    MedicalRecord[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const token = await getCookie("token");
      const response = await apiClient.get(
        `/protected/organization/${currentOrganization?.ID}/medicalrecord/recover/week`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("k", response.data);
      setRecoveryThisWeek(response.data.medicalRecords);
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

  return { recoveryThisWeek, loading };
}

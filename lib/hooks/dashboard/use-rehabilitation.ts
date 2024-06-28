import apiClient from "@/lib/utils/api/apiclient";
import { getCookie } from "../cookie/use-cookie";
import { useAtom } from "jotai";
import {
  currentOrganizationAtom,
  rehabilitationAtom,
} from "@/lib/atom/dashboard";
import { useEffect, useState } from "react";

export function useRehabilitation() {
  const [currentOrganization] = useAtom(currentOrganizationAtom);
  const [records, setRecords] = useAtom(rehabilitationAtom);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const token = await getCookie("token");
      const response = await apiClient.get(
        `/protected/organization/${currentOrganization?.ID}/medicalrecord/status/rehabilitation`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRecords(response.data.medicalRecords);
      setLoading(false);
    } catch (error) {
      console.error("[useRehabilitation] : ", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!currentOrganization) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrganization]);

  return { records, loading };
}

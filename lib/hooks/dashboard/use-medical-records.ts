import { currentOrganizationAtom } from "@/lib/atom/current-organization";
import { medicalRecordAtom } from "@/lib/atom/medical-record";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getCookie } from "../cookie/use-cookie";
import apiClient from "@/lib/utils/api/apiclient";

export default function useMedicalRecord() {
  const [currentOrganization] = useAtom(currentOrganizationAtom);
  const [medicalRecords, setMedicalRecords] = useAtom(medicalRecordAtom);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const token = await getCookie("token");
      const response = await apiClient.get(
        `/protected/organization/${currentOrganization?.ID}/medicalrecord`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMedicalRecords(response.data.medicalRecords);
      setLoading(false);
      console.log("medicalRecords", response.data.medicalRecords);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrganization]);
  return { medicalRecords, loading };
}

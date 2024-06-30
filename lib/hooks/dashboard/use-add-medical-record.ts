import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { getCookie } from "../cookie/use-cookie";
import apiClient from "@/lib/utils/api/apiclient";
import { useAtom } from "jotai";
import {
  currentOrganizationAtom,
  medicalRecordAtom,
} from "@/lib/atom/dashboard";
import { zodResolver } from "@hookform/resolvers/zod";

const recordSchema = z.object({
  player_id: z.number().min(1, { message: "Player ID is required" }),
  part: z.string().min(1, { message: "Part is required" }),
  diagnosis: z.string().optional(),
  status: z.string().min(1, { message: "Status is required" }),
  injury_date: z.string().min(1, { message: "Injury date is required" }),
  recovery_date: z.string().optional(),
  memo: z.string().optional(),
});

type addRecordInputs = z.infer<typeof recordSchema>;

export function useAddMedicalRecord(toggleDialog: () => void) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addRecordInputs>({
    resolver: zodResolver(recordSchema),
  });
  const [medicalRecords, setMedicalRecords] = useAtom(medicalRecordAtom);
  const [currentOrganization] = useAtom(currentOrganizationAtom);

  const onSubmit: SubmitHandler<addRecordInputs> = async (
    data: addRecordInputs
  ) => {
    setLoading(true);
    try {
      const token = await getCookie("token");
      const response = await apiClient.post(
        `/protected/organization/${currentOrganization?.ID}/medicalrecord`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLoading(false);
      console.log("[useAddMedicalRecord] : ", response.data);
      if (medicalRecords?.length === 0 || !medicalRecords) {
        setMedicalRecords([response.data.added_record]);
      } else {
        setMedicalRecords([...medicalRecords, response.data.added_record]);
      }
      reset();
      toggleDialog();
      // toast表示
    } catch (error) {
      console.error("[useAddMedicalRecord] : ", error);
      console.log("[useAddMedicalRecord] : failed!");
      setLoading(false);
    }
  };

  return {
    register,
    setValue,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
}

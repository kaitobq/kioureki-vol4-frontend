import { MedicalRecordTHead } from "@/components/atoms/dashboard/medical-record-thead";
import { MedicalRecordTBody } from "./medical-record-tbody";

export function MedicalRecordTable() {
  return (
    <>
      <MedicalRecordTHead />
      <MedicalRecordTBody />
    </>
  );
}

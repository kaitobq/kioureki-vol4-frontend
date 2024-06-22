import { medicalRecordAtom } from "@/lib/atom/medical-record";
import { useAtom } from "jotai";
import { MedicalRecordTable } from "./medical-record-table";

export function MedicalRecordTab() {
  const [medicalrecord] = useAtom(medicalRecordAtom);
  return (
    <div>
      <MedicalRecordTable />
    </div>
  );
}

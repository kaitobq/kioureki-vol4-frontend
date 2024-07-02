import { AddMedicalRecord } from "./add-medical-record";
import { MedicalRecordTable } from "./medical-record-table";

export function MedicalRecordTab() {
  return (
    <div className="w-[320px] sm:w-11/12 mb-28">
      <AddMedicalRecord />
      <MedicalRecordTable />
    </div>
  );
}

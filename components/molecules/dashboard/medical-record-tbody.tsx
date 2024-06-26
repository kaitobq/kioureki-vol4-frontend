import { useMedicalRecord } from "@/lib/hooks/dashboard/use-medical-records";
import { MedicalRecordSkeleton } from "../../atoms/dashboard/medical-record-skeleton";
import { MedicalRecordTRow } from "../../atoms/dashboard/medical-record-trow";

export function MedicalRecordTBody() {
  const { medicalRecords, loading } = useMedicalRecord();

  return (
    <div>
      {loading || !medicalRecords ? (
        <MedicalRecordSkeleton />
      ) : (
        medicalRecords.map((record) => (
          <MedicalRecordTRow key={record.ID} record={record} />
        ))
      )}
    </div>
  );
}

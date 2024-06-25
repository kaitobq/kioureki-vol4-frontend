import useMedicalRecord from "@/lib/hooks/dashboard/use-medical-records";
import { useEffect } from "react";
import { MedicalRecordSkeleton } from "../../atoms/dashboard/medical-record-skeleton";
import { MedicalRecordTRow } from "../../atoms/dashboard/medical-record-trow";

export function MedicalRecordTBody() {
  const { medicalRecords, loading } = useMedicalRecord();
  useEffect(() => {
    console.log("medicalRecords", medicalRecords);
  }, [medicalRecords]);
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

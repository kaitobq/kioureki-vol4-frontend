import { MedicalRecordSkeleton } from "../../../atoms/dashboard/medical-record/medical-record-skeleton";
import { MedicalRecordTRow } from "../../../atoms/dashboard/medical-record/medical-record-trow";
import { useAtom } from "jotai";
import { medicalRecordAtom } from "@/lib/atom/dashboard";
import { useMemo } from "react";
import { SortColumn } from "@/components/atoms/dashboard/medical-record/medical-record-thead";

interface MedicalRecordTBodyProps {
  sortColumn: SortColumn | null;
  sortDirection: "asc" | "desc" | null;
}

export function MedicalRecordTBody({
  sortColumn,
  sortDirection,
}: MedicalRecordTBodyProps) {
  const [medicalRecords] = useAtom(medicalRecordAtom);

  const sortedRecords = useMemo(() => {
    if (!medicalRecords || !sortColumn || !sortDirection) return medicalRecords;

    return [...medicalRecords].sort((a, b) => {
      let valueA, valueB;

      if (sortColumn === "name") {
        valueA = a.player?.name;
        valueB = b.player?.name;
      } else {
        valueA = a[sortColumn as keyof typeof a];
        valueB = b[sortColumn as keyof typeof b];
      }

      if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [medicalRecords, sortColumn, sortDirection]);

  return (
    <div>
      {!sortedRecords ? (
        <MedicalRecordSkeleton />
      ) : (
        sortedRecords.map((record) => (
          <MedicalRecordTRow key={record.ID} record={record} />
        ))
      )}
    </div>
  );
}

import { useState } from "react";
import { MedicalRecordTBody } from "./medical-record-tbody";
import {
  MedicalRecordTHead,
  SortColumn,
} from "@/components/atoms/dashboard/medical-record/medical-record-thead";

type SortDirection = "asc" | "desc" | null;

export function MedicalRecordTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <>
      <MedicalRecordTHead
        onSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
      <MedicalRecordTBody
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
    </>
  );
}

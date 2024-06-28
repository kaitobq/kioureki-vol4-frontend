import { useState } from "react";
import {
  MedicalRecordTHead,
  SortColumn,
} from "@/components/atoms/dashboard/medical-record-thead";
import { MedicalRecordTBody } from "./medical-record-tbody";

type SortDirection = "asc" | "desc" | null;

export function MedicalRecordTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      // 同じカラムがクリックされた場合
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      // 新しいカラムがクリックされた場合
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

import { useState } from "react";

export type SortColumn =
  | "name"
  | "part"
  | "diagnosis"
  | "injury_date"
  | "recovery_date";

interface MedicalRecordTHeadProps {
  onSort: (column: SortColumn) => void;
  sortColumn: SortColumn | null;
  sortDirection: "asc" | "desc" | null;
}

export function MedicalRecordTHead({
  onSort,
  sortColumn,
  sortDirection,
}: MedicalRecordTHeadProps) {
  const renderSortIndicator = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") return " ▲";
      if (sortDirection === "desc") return " ▼";
    }
    return "";
  };
  return (
    <div className="flex flex-row my-2 p-2 bg-gray-200 rounded-t-md *:text-sm *:text-gray-500 *:font-sans *:font-semibold sm:*:w-1/6 border-b border-gray-300">
      <h5
        className="w-1/3 flex items-center cursor-pointer"
        onClick={() => onSort("name")}
      >
        名前{renderSortIndicator("name")}
      </h5>
      <h5
        className="w-1/3 flex items-center cursor-pointer"
        onClick={() => onSort("part")}
      >
        受傷箇所{renderSortIndicator("part")}
      </h5>
      <h5
        className="w-1/2 flex items-center cursor-pointer"
        onClick={() => onSort("diagnosis")}
      >
        診断{renderSortIndicator("diagnosis")}
      </h5>
      <h5
        className="w-1/2 flex items-center sm:ml-20 cursor-pointer"
        onClick={() => onSort("injury_date")}
      >
        受傷日{renderSortIndicator("injury_date")}
      </h5>
      <h5
        className="hidden sm:flex items-center cursor-pointer"
        onClick={() => onSort("recovery_date")}
      >
        復帰日{renderSortIndicator("recovery_date")}
      </h5>
    </div>
  );
}

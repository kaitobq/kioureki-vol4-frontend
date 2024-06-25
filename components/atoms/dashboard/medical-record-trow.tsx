import { MedicalRecord } from "@/types/dashboard/medical-record";
import Link from "next/link";

interface MedicalRecordTRowProps {
  record: MedicalRecord;
}

export function MedicalRecordTRow({ record }: MedicalRecordTRowProps) {
  return (
    <Link
      className="flex flex-row w-full sm:p-2 my-2 border-b border-gray-300 cursor-pointer hover:bg-gray-100 *:font-sans *:text-sm *:font-medium *:text-gray-600"
      href={{
        pathname: `/dashboard`,
        query: {
          tab: "medicalrecord",
          id: record.ID,
        },
      }}
      // onClick={() => setRecord(record)}
    >
      <h3 className="text-xl w-1/3 sm:w-1/6">{record.player.name}</h3>
      <h3 className="text-xl w-1/3 sm:w-1/6">{record.part}</h3>
      <h3 className="text-xl w-1/2 sm:w-1/6">{record.diagnosis}</h3>
      <h3 className="text-xl w-1/2 sm:w-1/6 sm:ml-20">
        {record.injury_date.split("T")[0]}
      </h3>
      <h3 className="text-xl w-1/6 hidden sm:inline">
        {record.recovery_date && record.recovery_date.split("T")[0]}
      </h3>
    </Link>
  );
}

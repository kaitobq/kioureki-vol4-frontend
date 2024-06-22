import { MedicalRecord } from "@/types/dashboard/medical-record";

interface InjuredPlayerTableProps {
  injuredThisWeek: MedicalRecord[];
}

export function InjuredPlayerTable({
  injuredThisWeek,
}: InjuredPlayerTableProps) {
  return (
    <>
      {injuredThisWeek.map((record) => (
        <tr
          key={record.ID}
          className="*:py-2 *:px-5 cursor-pointer hover:bg-gray-200 transition-all duration-75 *:text-center"
          //   onClick={() =>
          //     router.push(`/dashboard?tab=medicalrecord&id=${record.ID}`)
          //   }
        >
          <td>
            <div>{record.player.name}</div>
          </td>
          <td>{record.diagnosis}</td>
          <td>{record.injury_date?.split("T")[0]}</td>
        </tr>
      ))}
    </>
  );
}

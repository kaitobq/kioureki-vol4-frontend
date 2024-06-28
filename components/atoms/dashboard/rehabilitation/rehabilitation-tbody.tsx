import { rehabilitationAtom } from "@/lib/atom/dashboard";
import { useAtom } from "jotai";

export function RehabilitationTBody() {
  const [records] = useAtom(rehabilitationAtom);

  if (!records) return null;

  return (
    <tbody>
      {records.map((record) => (
        <tr
          key={record.ID}
          className="flex hover:bg-gray-100 transition-colors duration-150 border-b text-sm *:p-3 *:text-center cursor-pointer"
        >
          <td className="w-[150px]">{record.player.name}</td>
          <td className="w-[100px]">{record.diagnosis}</td>
          <td className="w-[180px]">{record.injury_date?.split("T")[0]}</td>
          <td className="w-[180px]">{record.recovery_date?.split("T")[0]}</td>
        </tr>
      ))}
    </tbody>
  );
}

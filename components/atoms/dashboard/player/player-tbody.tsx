import { playerDetailAtom } from "@/lib/atom/dashboard";
import { useAtom } from "jotai";

export function PlayerTBody() {
  const [playerDetails] = useAtom(playerDetailAtom);
  return (
    <tbody>
      {playerDetails &&
        playerDetails.map((playerDetail, index) => (
          <tr key={index} className="border-b *:text-left">
            <td className="w-[180px] px-5 border-e">
              {playerDetail.player_name}
            </td>
            <td className="w-[200px] pl-5 border-e">
              <div className="">
                {playerDetail.categories &&
                  playerDetail.categories.map((category, index) => (
                    <h5 key={index} className="py-2">
                      {category.category_name} :{" "}
                      <span>{category.category_option_value}</span>
                    </h5>
                  ))}
              </div>
            </td>
            <td className="w-[250px] pl-5">
              <div>
                {playerDetail.medical_records &&
                  playerDetail.medical_records.map((medicalRecord) => (
                    <h5
                      key={medicalRecord.ID}
                      className="hover:bg-gray-200 py-1"
                    >
                      {medicalRecord.diagnosis
                        ? medicalRecord.diagnosis
                        : "診断名なし"}{" "}
                      :{" "}
                      <span>
                        {medicalRecord.injury_date &&
                          medicalRecord.injury_date.split("T")[0]}
                      </span>
                    </h5>
                  ))}
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
}

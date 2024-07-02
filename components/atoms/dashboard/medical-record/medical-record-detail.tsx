import { medicalRecordAtom, playerDetailAtom } from "@/lib/atom/dashboard";
import { useAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Card } from "../../common/card";

export function MedicalRecordDetail() {
  const [medicalRecords] = useAtom(medicalRecordAtom);
  const [playersDetails] = useAtom(playerDetailAtom);
  const params = useSearchParams();
  const currentMedicalRecord = medicalRecords?.find(
    (record) => record.ID === Number(params.get("id"))
  );
  const currentPlayer = playersDetails?.find(
    (player) => player.player_id === currentMedicalRecord?.player_id
  );
  const otherMedicalRecordsCount =
    currentPlayer?.medical_records?.filter(
      (record) => record.ID !== currentMedicalRecord?.ID
    ).length || 0;

  useEffect(() => {
    console.log("[medical record detail] : current : ", currentPlayer);
  });

  return (
    <Card className="w-[800px] my-10">
      <h2 className="text-xl font-semibold">データの詳細</h2>
      <div className="my-2 py-2 px-5 flex gap-3 items-center justify-between border">
        <div className="flex items-center gap-5">
          <label htmlFor="player" className="h-fit">
            受傷者 :
          </label>
          <p className="font-semibold text-lg h-fit">
            {currentMedicalRecord?.player.name}
          </p>
        </div>
        <div className="flex flex-col items-end">
          {currentPlayer?.categories?.map((category, index) => (
            <p key={index} className="w-fit">
              {category.category_name} :
              <span> {category.category_option_value}</span>
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h3>他に{otherMedicalRecordsCount}件の既往歴</h3>
          {currentPlayer?.medical_records
            ?.filter((record) => record.ID !== currentMedicalRecord?.ID)
            .map((record, index) => (
              <div key={index} className="flex gap-3">
                <p className="w-[50px]">{record.part} :</p>
                <p>{record.diagnosis ? record.diagnosis : "診断名なし"}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="my-4 border">
        <label htmlFor="part" className="bg-gray-200 py-1 px-2">
          受傷箇所
        </label>
        <p className="border-t text-center py-2">
          {currentMedicalRecord?.part}
        </p>
      </div>
      <div className="my-4 border">
        <label htmlFor="diagnosis" className="bg-gray-200 py-1 px-2">
          診断
        </label>
        <p className="border-t text-center py-2">
          {currentMedicalRecord?.diagnosis
            ? currentMedicalRecord?.diagnosis
            : "登録なし"}
        </p>
      </div>
      <div className="my-4 border">
        <label htmlFor="status" className="bg-gray-200 py-1 px-2">
          治癒状況
        </label>
        <p className="border-t text-center py-2">
          {currentMedicalRecord?.status}
        </p>
      </div>
      <div className="my-4 border">
        <label htmlFor="injury_date" className="bg-gray-200 py-1 px-2">
          受傷日
        </label>
        <p className="border-t text-center py-2">
          {currentMedicalRecord?.injury_date.split("T")[0]}
        </p>
      </div>
      <div className="my-4 border">
        <label htmlFor="recovery_date" className="bg-gray-200 py-1 px-2">
          復帰予定日
        </label>
        <p className="border-t text-center py-2">
          {currentMedicalRecord?.recovery_date
            ? currentMedicalRecord?.recovery_date.split("T")[0]
            : "未定"}
        </p>
      </div>
      <div className="my-4 border">
        <label htmlFor="memo" className="bg-gray-200 py-1 px-2">
          メモ
        </label>
        <p className="border-t p-3 whitespace-pre-wrap break-words">
          {currentMedicalRecord?.memo ? currentMedicalRecord?.memo : "特になし"}
        </p>
      </div>
    </Card>
  );
}

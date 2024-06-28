import { useAtom } from "jotai";
import { Button } from "../../common/button";
import { Dialog } from "../../common/dialog";
import { playerAtom } from "@/lib/atom/dashboard";
import { Selector } from "../../common/selector";
import { useEffect, useState } from "react";
import { Input } from "../../common/input";
import { TextArea } from "../../common/textarea";
import { useAddMedicalRecord } from "@/lib/hooks/dashboard/use-add-medical-record";

interface AddMedicalRecordDialogProps {
  open: boolean;
  toggleDialog: () => void;
}

const statusValues = ["リハビリ", "復帰済", "部分復帰", "確認中", "その他"];

const partValues = [
  "頭部",
  "顔面",
  "首",
  "胸",
  "肩",
  "腕",
  "肘",
  "手首",
  "指",
  "背中",
  "腹部",
  "腰",
  "臀部",
  "大腿",
  "膝",
  "下腿",
  "足首",
  "その他",
];

export function AddMedicalRecordDialog({
  open,
  toggleDialog,
}: AddMedicalRecordDialogProps) {
  const [players] = useAtom(playerAtom);
  const { register, setValue, handleSubmit, errors, onSubmit, loading } =
    useAddMedicalRecord();

  if (!players) return null;
  const playerOptions = players.map((player) => ({
    value: player.ID.toString(),
    label: player.name,
  }));

  return (
    <Dialog open={open} toggleDialog={toggleDialog} className="w-[600px]">
      <form id="addRecord" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold">データの追加</h2>
        <div className="my-2">
          <label htmlFor="player">
            選手<span className="text-red-600 mx-1">*</span>
          </label>
          <Selector
            id="player"
            options={playerOptions}
            onChange={(e) => setValue("player_id", Number(e.target.value))}
          />
          {errors.player_id && (
            <p className="text-red-600">{errors.player_id.message}</p>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="status">
            治療状況<span className="text-red-600 mx-1">*</span>
          </label>
          <Selector
            id="status"
            options={statusValues.map((status) => ({
              value: status,
              label: status,
            }))}
            onChange={(e) => setValue("status", e.target.value)}
          />
          {errors.status && (
            <p className="text-red-600">{errors.status.message}</p>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="part">
            受傷箇所<span className="text-red-600 mx-1">*</span>
          </label>
          <Selector
            id="part"
            options={partValues.map((part) => ({ value: part, label: part }))}
            onChange={(e) => setValue("part", e.target.value)}
          />
          {errors.part && <p className="text-red-600">{errors.part.message}</p>}
        </div>
        <div className="my-2">
          <label htmlFor="diagnosis">診断</label>
          <Input id="diagnosis" {...register("diagnosis")} />
          {errors.diagnosis && (
            <p className="text-red-600">{errors.diagnosis.message}</p>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="injury_date">受傷日</label>
          <Input id="injury_date" type="date" {...register("injury_date")} />
          {errors.injury_date && (
            <p className="text-red-600">{errors.injury_date.message}</p>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="recovery_date">復帰予定日</label>
          <Input
            id="recovery_date"
            type="date"
            {...register("recovery_date")}
          />
          {errors.recovery_date && (
            <p className="text-red-600">{errors.recovery_date.message}</p>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="memo">備考</label>
          <TextArea id="memo" rows={4} {...register("memo")} />
          {errors.memo && <p className="text-red-600">{errors.memo.message}</p>}
        </div>
      </form>
      <div className="flex justify-end mt-3">
        {loading ? (
          <Button loading />
        ) : (
          <Button type="submit" form="addRecord">
            追加
          </Button>
        )}
      </div>
    </Dialog>
  );
}

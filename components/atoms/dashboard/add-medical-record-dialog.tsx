import { useAtom } from "jotai";
import { Button } from "../common/button";
import { Dialog } from "./dialog";
import { playerAtom } from "@/lib/atom/dashboard";
import { Selector } from "../common/selector";
import { useEffect, useState } from "react";
import { Input } from "../common/input";
import { TextArea } from "../common/textarea";
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
  const { register, setValue, handleSubmit, errors, onSubmit } =
    useAddMedicalRecord();

  if (!players) return null;
  const playerOptions = players.map((player) => ({
    value: player.ID.toString(),
    label: player.name,
  }));

  return (
    <Dialog open={open} toggleDialog={toggleDialog} className="w-[600px]">
      <form id="addRecord" onSubmit={handleSubmit(onSubmit)}>
        <h2>データの追加</h2>
        <label htmlFor="player">
          選手<span className="text-red-600 mx-1">*</span>
        </label>
        <Selector
          id="player"
          options={playerOptions}
          onChange={(e) => setValue("player_id", Number(e.target.value))}
        />
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
        <label htmlFor="part">
          受傷箇所<span className="text-red-600 mx-1">*</span>
        </label>
        <Selector
          id="part"
          options={partValues.map((part) => ({ value: part, label: part }))}
          onChange={(e) => setValue("part", e.target.value)}
        />
        <label htmlFor="diagnosis">診断</label>
        <Input id="diagnosis" {...register("diagnosis")} />
        <label htmlFor="injury_date">受傷日</label>
        <Input id="injury_date" type="date" {...register("injury_date")} />
        <label htmlFor="recovery_date">復帰予定日</label>
        <Input id="recovery_date" type="date" {...register("recovery_date")} />
        <label htmlFor="memo">備考</label>
        <TextArea id="memo" rows={4} {...register("memo")} />
      </form>
      <Button type="submit" form="addRecord">
        追加
      </Button>
    </Dialog>
  );
}

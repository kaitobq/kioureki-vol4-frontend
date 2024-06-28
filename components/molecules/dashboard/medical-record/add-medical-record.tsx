import { DialogTrigger } from "@/components/atoms/common/dialog-trigger";
import { AddMedicalRecordDialog } from "@/components/atoms/dashboard/medical-record/add-medical-record-dialog";
import { useState } from "react";

export function AddMedicalRecord() {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-end my-3">
      <DialogTrigger toggleDialog={toggleDialog}>追加</DialogTrigger>
      <AddMedicalRecordDialog open={open} toggleDialog={toggleDialog} />
    </div>
  );
}

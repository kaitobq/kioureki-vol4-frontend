import { AddMedicalRecordDialog } from "@/components/atoms/dashboard/add-medical-record-dialog";
import { DialogTrigger } from "@/components/atoms/dashboard/dialog-trigger";
import { useState } from "react";

export function AddMedicalRecord() {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <DialogTrigger toggleDialog={toggleDialog} />
      <AddMedicalRecordDialog open={open} toggleDialog={toggleDialog} />
    </div>
  );
}

import { Button } from "../common/button";
import { Dialog } from "./dialog";

interface AddMedicalRecordDialogProps {
  open: boolean;
  toggleDialog: () => void;
}

export function AddMedicalRecordDialog({
  open,
  toggleDialog,
}: AddMedicalRecordDialogProps) {
  return (
    <Dialog open={open} toggleDialog={toggleDialog}>
      <form action="">aaafklanandfknlaflkafnlakkkk</form>
      <Button>追加</Button>
    </Dialog>
  );
}

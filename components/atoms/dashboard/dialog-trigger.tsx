import { Button } from "../common/button";

interface DialogTriggerProps {
  toggleDialog: () => void;
}

export function DialogTrigger({ toggleDialog }: DialogTriggerProps) {
  return <Button onClick={toggleDialog}>DialogTrigger</Button>;
}

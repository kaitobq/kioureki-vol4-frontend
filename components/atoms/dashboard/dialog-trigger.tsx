import { ComponentProps } from "react";
import { Button } from "../common/button";

interface DialogTriggerProps extends ComponentProps<"button"> {
  toggleDialog: () => void;
  children?: React.ReactNode;
}

export function DialogTrigger({
  toggleDialog,
  children,
  ...rest
}: DialogTriggerProps) {
  return (
    <Button onClick={toggleDialog} {...rest}>
      {children}
    </Button>
  );
}

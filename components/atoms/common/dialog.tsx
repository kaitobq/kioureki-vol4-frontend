import clsx from "clsx";
import { ComponentProps, useEffect, useRef } from "react";

interface DialogProps extends ComponentProps<"dialog"> {
  open: boolean;
  toggleDialog: () => void;
  className?: string;
  children: React.ReactNode;
}

export function Dialog({
  open,
  toggleDialog,
  className,
  children,
  ...rest
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [open]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backRef.current) {
      toggleDialog();
    }
  };
  return (
    <dialog
      ref={dialogRef}
      className="bg-transparent p-0 m-0 max-w-full max-h-full"
      {...rest}
    >
      <div
        ref={backRef}
        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
        onClick={handleBackdropClick}
      >
        <div className={clsx("bg-white rounded-lg p-6 relative", className)}>
          <button
            className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={toggleDialog}
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </dialog>
  );
}

Dialog.displayName = "Dialog";

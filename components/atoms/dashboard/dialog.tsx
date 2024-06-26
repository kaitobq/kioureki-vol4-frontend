import { ComponentProps, useEffect, useRef } from "react";

interface DialogProps extends ComponentProps<"dialog"> {
  open: boolean;
  toggleDialog: () => void;
  children: React.ReactNode;
}

export function Dialog({ open, toggleDialog, children, ...rest }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      toggleDialog();
    }
  };
  return (
    <dialog
      ref={dialogRef}
      className="bg-transparent p-0 m-0 max-w-full max-h-full"
      onClick={handleBackdropClick}
      {...rest}
    >
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 relative">
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

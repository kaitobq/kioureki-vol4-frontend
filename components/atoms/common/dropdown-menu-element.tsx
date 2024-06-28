import { ComponentProps } from "react";

interface DropdownMenuElementProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  value: string;
  setStateRef: React.MutableRefObject<any>;
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
}

export function DropdownMenuElement({
  children,
  value,
  setStateRef,
  setCurrentValue,
  ...rest
}: DropdownMenuElementProps) {
  return (
    <button
      className="block px-4 py-2 w-full hover:bg-gray-600 text-white"
      {...rest}
      onClick={() => {
        console.log(value);
        setStateRef.current(false);
        setCurrentValue(value);
      }}
    >
      {children}
    </button>
  );
}

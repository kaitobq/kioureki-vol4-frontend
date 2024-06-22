import { ComponentProps, useEffect } from "react";

interface DropdownTriggerProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  stateRef: React.MutableRefObject<any>;
  setStateRef: React.MutableRefObject<any>;
}

export function DropdownTrigger({
  children,
  stateRef,
  setStateRef,
  ...rest
}: DropdownTriggerProps) {
  const handleClick = () => {
    setStateRef.current(!stateRef.current);
    console.log("stateRef.current!", stateRef.current);
  };
  useEffect(() => {
    console.log("stateRef.current", stateRef.current);
  });
  return (
    <button
      className="text-white mb-1 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[150px] inline-flex justify-center items-center"
      {...rest}
      onClick={handleClick}
    >
      {children}
      <svg
        className="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
  );
}

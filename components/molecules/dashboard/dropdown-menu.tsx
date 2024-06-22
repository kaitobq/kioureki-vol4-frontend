import { DropdownMenuElement } from "@/components/atoms/dashboard/dropdown-menu-element";
import { useEffect, useState } from "react";

interface DropdownMenuProps {
  stateRef: React.MutableRefObject<any>;
  setStateRef: React.MutableRefObject<any>;
  dropdownList: DropdownList[];
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
}

export function DropdownMenu({
  stateRef,
  setStateRef,
  dropdownList,
  setCurrentValue,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  stateRef.current = open;
  setStateRef.current = setOpen;
  useEffect(() => {
    console.log("change open!");
  });
  return (
    <>
      {open && (
        <div className="absolute w-[150px] py-2 divide-y divide-gray-100 rounded-lg shadow bg-gray-700">
          {dropdownList.map((element, index) => (
            <DropdownMenuElement
              key={index}
              value={element.value}
              setStateRef={setStateRef}
              setCurrentValue={setCurrentValue}
            >
              {element.label}
            </DropdownMenuElement>
          ))}
        </div>
      )}
    </>
  );
}

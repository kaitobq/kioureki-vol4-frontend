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
        <div className="bg-white py-2 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          {/* <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul> */}
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

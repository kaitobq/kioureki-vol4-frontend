"use client";

import { DropdownTrigger } from "@/components/atoms/common/dropdown-triger";
import { DropdownMenu } from "@/components/molecules/common/dropdown-menu";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  list: DropdownList[];
  defaultValue: DropdownList;
}

export function Dropdown({ list, defaultValue }: DropdownProps) {
  const stateRef = useRef(false);
  const setStateRef = useRef<(state: boolean) => void>(() => {});
  const [currentValue, setCurrentValue] = useState<string>(defaultValue.label);
  useEffect(() => {
    console.log("change default value!");
  });
  return (
    <div className="relative">
      <DropdownTrigger stateRef={stateRef} setStateRef={setStateRef}>
        {currentValue}
      </DropdownTrigger>
      <DropdownMenu
        stateRef={stateRef}
        setStateRef={setStateRef}
        dropdownList={list}
        setCurrentValue={setCurrentValue}
      />
    </div>
  );
}

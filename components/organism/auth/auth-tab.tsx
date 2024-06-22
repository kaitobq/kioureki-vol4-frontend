"use client";

import { AuthTabCard } from "@/components/molecules/auth/auth-tab-card";
import { AuthTabChanger } from "@/components/molecules/auth/auth-tab-changer";
import { useRef } from "react";

export function AuthTab() {
  const setStateRef = useRef<(state: boolean) => void>(() => void 0);
  const stateRef = useRef<boolean>(true);

  return (
    <div className="flex flex-col items-center my-10">
      <AuthTabChanger setStateRef={setStateRef} stateRef={stateRef} />
      <AuthTabCard setStateRef={setStateRef} stateRef={stateRef} />
    </div>
  );
}

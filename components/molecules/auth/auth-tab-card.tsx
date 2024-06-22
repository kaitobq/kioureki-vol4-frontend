import { useState } from "react";
import { SignupTab } from "./signup-tab";
import { LoginTab } from "./login-tab";

interface AuthTabCardProps {
  setStateRef: React.MutableRefObject<(state: boolean) => void>;
  stateRef: React.MutableRefObject<boolean>;
}

export function AuthTabCard({ setStateRef, stateRef }: AuthTabCardProps) {
  const [isLoginTab, setIsLoginTab] = useState(true);
  setStateRef.current = setIsLoginTab;
  stateRef.current = isLoginTab;

  return <div>{isLoginTab ? <LoginTab /> : <SignupTab />}</div>;
}

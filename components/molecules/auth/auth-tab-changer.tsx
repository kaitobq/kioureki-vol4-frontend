import clsx from "clsx";
import { useState } from "react";

interface AuthTabChangerProps {
  setStateRef: React.MutableRefObject<(state: boolean) => void>;
  stateRef: React.MutableRefObject<boolean>;
}

export function AuthTabChanger({ setStateRef, stateRef }: AuthTabChangerProps) {
  const [isLoginTab, setIsLoginTab] = useState(stateRef.current);
  return (
    <div className="inline-flex rounded-lg shadow-sm bg-gray-300 border-gray-300 border-2 mb-2">
      <button
        type="button"
        className={clsx(
          "px-4 py-2 text-sm font-medium  rounded-s-lg focus:ring-1 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700",
          {
            "text-gray-900 bg-white z-10": isLoginTab === true,
            "text-gray-900 bg-gray-300 z-0": isLoginTab === false,
          }
        )}
        onClick={() => {
          setStateRef.current(true);
          setIsLoginTab(true);
        }}
      >
        ログイン
      </button>

      <button
        type="button"
        className={clsx(
          "px-4 py-2 text-sm font-medium  rounded-e-lg focus:ring-1 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700",
          {
            "text-gray-900 bg-white z-10": isLoginTab === false,
            "text-gray-900 bg-gray-300 z-0": isLoginTab === true,
          }
        )}
        onClick={() => {
          setStateRef.current(false);
          setIsLoginTab(false);
        }}
      >
        新規登録
      </button>
    </div>
  );
}

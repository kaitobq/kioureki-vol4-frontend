import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function DashboardHeaderLinks() {
  const params = useSearchParams();

  return (
    <div className="border-b py-1 px-5 flex font-semibold text-sm gap-3 w-full">
      <Link
        href="/dashboard?tab=medicalrecord"
        className={clsx({
          "border-b-4 border-blue-700": params.get("tab") === "medicalrecord",
        })}
      >
        データベース
      </Link>
      <Link
        href="/dashboard?tab=rehabilitation"
        className={clsx({
          "border-b-4 border-blue-700": params.get("tab") === "rehabilitation",
        })}
      >
        リハビリメンバー
      </Link>
      <Link
        href="/dashboard?tab=player"
        className={clsx({
          "border-b-4 border-blue-700": params.get("tab") === "player",
        })}
      >
        選手一覧
      </Link>
    </div>
  );
}

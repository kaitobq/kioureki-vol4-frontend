import Link from "next/link";

export function DashboardHeader() {
  return (
    <>
      <div className="border-b py-2 px-5 flex items-center justify-between w-full">
        <Link href="/">
          <h1>Kioureki</h1>
        </Link>
      </div>
      <div className="border-b py-1 px-5 flex items-center font-semibold text-sm gap-3 w-full">
        <Link href="/dashboard?tab=medicalrecord">データベース</Link>
        <Link href="/dashboard?tab=rehabilitation">リハビリメンバー</Link>
        <Link href="/dashboard?tab=player">選手一覧</Link>
      </div>
    </>
  );
}

import Link from "next/link";

export function AuthHeader() {
  return (
    <div className="border-b-2 p-4 flex items-center justify-between shadow-md">
      <Link href="/">
        <h1 className="font-semibold text-xl">Kioureki</h1>
      </Link>
    </div>
  );
}

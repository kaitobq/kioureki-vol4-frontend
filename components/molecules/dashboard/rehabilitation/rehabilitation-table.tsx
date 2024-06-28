import { RehabilitationTBody } from "@/components/atoms/dashboard/rehabilitation/rehabilitation-tbody";
import { RehabilitationTHead } from "@/components/atoms/dashboard/rehabilitation/rehabilitation-thead";

export function RehabilitationTable() {
  return (
    <table className="w-full my-5">
      <RehabilitationTHead />
      <RehabilitationTBody />
    </table>
  );
}

import { SkeletonTable } from "@/components/atoms/dashboard/skeleton-table";
import { Card } from "../../atoms/common/card";

export function InjuredPlayerCard() {
  return (
    <Card>
      <h3 className="font-semibold mb-3 text-center">
        直近１週間で受傷した選手
      </h3>
      <table className="*:border-b">
        <thead>
          <tr className="text-gray-500 text-xs *:text-center">
            <td>名前</td>
            <td>診断</td>
            <td>受傷日</td>
          </tr>
        </thead>
        <tbody className="*:border-b">
          <SkeletonTable />
        </tbody>
      </table>
    </Card>
  );
}

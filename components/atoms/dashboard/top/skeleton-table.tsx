import { Skeleton } from "../../common/skeleton";

export function SkeletonTable() {
  return (
    <>
      <tr className="*:py-2 *:px-5">
        <td>
          <Skeleton className="h-7 w-20 rounded-md" />
        </td>
        <td>
          <Skeleton className="h-7 w-20 rounded-md" />
        </td>
        <td>
          <Skeleton className="h-7 w-20 rounded-md" />
        </td>
      </tr>
      <tr className="*:py-2 *:px-5">
        <td>
          <Skeleton className="h-7 w-20 rounded-md" />
        </td>
        <td>
          <Skeleton className="h-7 w-20 rounded-md" />
        </td>
        <td>
          <Skeleton className="h-7 w-20 rounded-md" />
        </td>
      </tr>
    </>
  );
}

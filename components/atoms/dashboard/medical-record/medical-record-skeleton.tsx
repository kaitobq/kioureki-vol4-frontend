import { Skeleton } from "../../common/skeleton";

export function MedicalRecordSkeleton() {
  return (
    <>
      <div className="flex gap-8 py-1 border-b">
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
      </div>
      <div className="flex gap-8 py-1 border-b">
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
      </div>
      <div className="flex gap-8 py-1 border-b">
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
        <Skeleton className="h-4 w-12 rounded-md" />
      </div>
    </>
  );
}

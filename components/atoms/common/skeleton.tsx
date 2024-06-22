import clsx from "clsx";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className="max-w-sm animate-pulse">
      <div className={clsx("bg-gray-200", className)} />
    </div>
  );
}

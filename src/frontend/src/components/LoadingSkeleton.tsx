import { Skeleton } from "@/components/ui/skeleton";

export function DocumentSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="rounded-lg border border-border/70 overflow-hidden bg-card"
        >
          <div className="h-1.5 bg-muted" />
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Skeleton className="w-9 h-9 rounded-lg" />
              <Skeleton className="h-4 flex-1" />
            </div>
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-3/5" />
            <Skeleton className="h-8 w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}

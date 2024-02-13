import { Skeleton } from '@/components/ui';

export default function Loading() {
  return (
    <div className="flex justify-center px-4 md:container">
      <div className="flex w-full max-w-80 space-x-3">
        <Skeleton className="size-26 shrink-0 rounded-xl" />
        <div className="flex w-full flex-col justify-between">
          <div className="mt-1 w-full space-y-2">
            <Skeleton className="h-2 w-6/12" />
            <Skeleton className="h-4 w-9/12" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

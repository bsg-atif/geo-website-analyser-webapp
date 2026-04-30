import Skeleton from "@shared/components/Skeleton";

export default function DashboardLoadingState({ isLoading }) {
  return (
    <div className="mt-10 space-y-8">
      {/* Summary Skeleton */}
      <section className="flex flex-col gap-8 rounded-2xl bg-secondary-300/5 p-4 tablet:p-6 laptop:flex-row laptop:items-center laptop:justify-around">
        <div className="flex flex-col items-center gap-5">
          <Skeleton className="size-52 rounded-full tablet:size-64 laptop:size-80" />
          <Skeleton className="h-12 w-full max-w-60 rounded-lg" />
        </div>

        <div className="flex w-full max-w-full flex-col gap-5 laptop:max-w-xl">
          <div className="flex flex-col items-center gap-3 laptop:items-start">
            <h1 className="text-accent-400">{isLoading && "Analysing..."}</h1>
            <Skeleton className="h-5 w-full max-w-72" />
          </div>

          <div className="rounded-lg bg-primary-700 p-5">
            <Skeleton className="mb-4 h-7 w-32" />

            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-8/12" />
            </div>
          </div>
        </div>
      </section>

      {/* Score Cards Skeleton */}
      <section className="grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <article
            key={index}
            className="min-w-0 rounded-2xl border border-secondary-600/60 p-5"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1 space-y-3">
                <Skeleton className="h-6 w-28 max-w-full" />
                <Skeleton className="h-9 w-24 max-w-full" />
              </div>

              <Skeleton className="size-12 shrink-0 rounded-xl" />
            </div>

            <Skeleton className="mb-8 h-4 w-full rounded-full" />
            <Skeleton className="h-5 w-4/5 max-w-full" />
          </article>
        ))}
      </section>
    </div>
  );
}

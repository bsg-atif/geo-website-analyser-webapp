import Skeleton from "@shared/components/skeleton";

function FindingsCardSkeleton() {
  return (
    <li className="rounded-2xl border border-secondary-600 bg-secondary-300/5 p-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Skeleton className="hidden size-10 shrink-0 rounded tablet:block" />

          <div className="min-w-0 flex-1 space-y-2">
            <Skeleton className="h-5 w-40 max-w-full" />
            <Skeleton className="h-4 w-56 max-w-full" />
          </div>
        </div>

        <Skeleton className="h-7 w-20 shrink-0 rounded-full" />
      </div>

      <Skeleton className="mt-4 h-6 w-32 rounded-full" />
    </li>
  );
}

function FindingsSectionSkeleton() {
  return (
    <article className="rounded p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Skeleton className="size-6 shrink-0" />
          <Skeleton className="h-6 w-40 max-w-full" />
        </div>

        <Skeleton className="h-7 w-20 shrink-0 rounded-full" />
      </div>

      <ul className="flex flex-col gap-y-3 py-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <FindingsCardSkeleton key={index} />
        ))}
      </ul>
    </article>
  );
}

function RecommendationSkeleton() {
  return (
    <section className="mt-10 mb-10 flex flex-col gap-5 rounded-2xl bg-secondary-300/5 p-5 ">
      <div className="flex flex-col gap-4 laptop:flex-row">
        <Skeleton className="size-14 shrink-0 rounded-2xl" />
        <div className="grow space-y-5">
          <div className="space-y-3">
            <Skeleton className="h-7 w-52 max-w-full" />
            <Skeleton className="h-4 w-full max-w-xl" />
          </div>
        </div>
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center gap-3 rounded-xl bg-primary-700 p-3"
        >
          <div className="flex items-center gap-2">
            <Skeleton className="size-3 hidden tablet:block shrink-0 rounded-full" />
            <Skeleton className="h-5 w-44" />
          </div>

          <Skeleton className="h-4 w-10 shrink-0 rounded-full" />
        </div>
      ))}
    </section>
  );
}

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

      <section className="mt-10 grid grid-cols-1 gap-5 laptop:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <FindingsSectionSkeleton key={index} />
        ))}
      </section>

      {/* Recommendations */}
      <RecommendationSkeleton />
    </div>
  );
}

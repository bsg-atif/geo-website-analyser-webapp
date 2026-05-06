import DashboardContent from "@pages/dashboard/components/dashboard-content";
import DashboardEmptyState from "@pages/dashboard/states/dashboard-empty-state";
import URLInput from "@shared/components/url-input";

export const metadata = {
  title: "Dashboard | WaledAnalysis",
};

export default async function DashboardPage({ searchParams }) {
  const { url } = await searchParams;

  return (
    <main className="px-2 tablet:px-3">
      <div className="flex justify-center py-3">
        <URLInput initialURL={url} />
      </div>
      {url ? <DashboardContent url={url} /> : <DashboardEmptyState />}
    </main>
  );
}

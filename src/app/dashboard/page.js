import DashboardContent from "@pages/dashboard/components/dashboard-content/DashboardContent";
import DashboardEmptyState from "@pages/dashboard/states/DashboardEmptyState";
import URLInput from "@shared/components/url-input/URLInput";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage({ searchParams }) {
  const { url } = await searchParams;
  console.log(url);

  return (
    <main className="px-2 tablet:px-3">
      <div className="flex justify-center py-3">
        <URLInput initialURL={url} />
      </div>
      {url ? <DashboardContent url={url} /> : <DashboardEmptyState />}
    </main>
  );
}

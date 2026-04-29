import ScoreCards from "@pages/dashboard/sections/score-cards";
import Summary from "@pages/dashboard/sections/summary";
import URLInput from "@shared/components/url-input/URLInput";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage({ searchParams }) {
  const { url } = await searchParams;

  return (
    <main className="px-2 tablet:px-3">
      <div className="flex justify-center py-3">
        <URLInput initialURL={url} />
      </div>
      <Summary />
      <ScoreCards />
    </main>
  );
}

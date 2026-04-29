import OverallScoreCard from "@pages/dashboard/components/over-all-score-card";

export default function Summary() {
  return (
    <section className="flex flex-wrap justify-around gap-3 rounded-2xl mt-10 bg-secondary-300/5 p-5">
      <div className="">
        <OverallScoreCard />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col items-center laptop:items-stretch">
          <h1 className="text-accent-400">Analysed:</h1>
          <p className="">http://conneqtedagents.com</p>
        </div>
        <div className="bg-primary-700 p-5 rounded-lg">
          <h3 className="text-secondary-600">AI Insight</h3>
          <p className="">
            Your website shows strong performance metrics and good accessibility
            standards. However, there are opportunities to enhance the user
            experience through improved navigation patterns and optimized
            conversion funnels.
          </p>
        </div>
      </div>
    </section>
  );
}

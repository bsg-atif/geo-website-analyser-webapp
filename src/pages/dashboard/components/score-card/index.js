export default function ScoreCard({ card }) {
  return (
    <article className="border border-secondary-600 rounded-4xl py-5 px-4 space-y-10 bg-secondary-300/5">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-2">
            <h3 className="opacity-40">{card.title}</h3>
            <div>
              <span className="text-4xl">82</span>/ 100
            </div>
          </div>
          <card.Icon size={35} />
        </div>
      </div>
      <div className="rounded-full bg-secondary-600/20">
        <div
          style={{ width: "70%" }}
          className="rounded-full h-5 bg-accent-300"
        />
      </div>
      <p className="text-sm opacity-40">{card.description}</p>
    </article>
  );
}

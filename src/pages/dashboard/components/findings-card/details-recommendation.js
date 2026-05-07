export default function DetailsAndRecommendation({ detail, recommendation }) {
  return (
    <div
      className={`flex flex-col gap-y-3 text-sm bg-primary-700 rounded-2xl p-3 my-3`}
    >
      <div>
        <h4 className="font-medium">Details:</h4>
        <p>{detail}</p>
      </div>
      <div>
        <h4 className="text-secondary-400 font-medium">Recommendation:</h4>
        <p>{recommendation}</p>
      </div>
    </div>
  );
}

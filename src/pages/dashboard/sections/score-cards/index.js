import scoreCards from "@constants/dashboard/scoreCards";
import ScoreCard from "../../components/score-card";
import styles from "./score-cards.module.css";

export default function ScoreCards({ data }) {
  return (
    <section className={`${styles.grid} mt-10`}>
      {data.map((card) => (
        <ScoreCard
          key={card.id}
          title={card.title}
          score={card.score}
          description={card.description}
        />
      ))}
    </section>
  );
}

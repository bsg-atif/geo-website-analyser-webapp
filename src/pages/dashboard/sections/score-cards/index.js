import scoreCards from "@constants/dashboard/scoreCards";
import ScoreCard from "../../components/score-card";
import styles from "./score-cards.module.css";

export default function ScoreCards() {
  return (
    <section className={`${styles.grid} mt-10`}>
      {scoreCards.map((card) => (
        <ScoreCard key={card.id} card={card} />
      ))}
    </section>
  );
}

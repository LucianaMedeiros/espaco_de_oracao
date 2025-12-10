import styles from "./DailyPrayer.module.css";
import bgOracao from "../../assets/images/patrick-fore-b_SHPU5M3nk-unsplash.jpg";

export function DailyPrayer() {
  return (
    <section
      id="daily-prayer"
      className={styles.oracaoDiaSection}
      style={{ backgroundImage: `url(${bgOracao})` }}
    >
      <div className={styles.oracaoDiaOverlay}>
        <h2>Oração do dia</h2>

        <blockquote className={styles.oracaoDiaTexto}>
          <p>
            Hoje eu agradeço pela vida, pelo fôlego, pelas oportunidades de
            recomeçar. Que eu consiga enxergar sentido mesmo nos dias difíceis
            e lembrar que não estou só no caminho que percorro.
          </p>
        </blockquote>

        <cite className={styles.oracaoDiaAutor}>Oração de Gratidão</cite>
      </div>
    </section>
  );
}

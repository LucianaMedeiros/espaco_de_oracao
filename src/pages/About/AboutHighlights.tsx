import styles from "./AboutHighlights.module.css";

import imgNewHere from "../../assets/images/ben-white-vtCBruWoNqo-unsplash.jpg";
import imgMissions from "../../assets/images/colin-rowley-h8J5dTEVuXA-unsplash.jpg";
import imgConnect from "../../assets/images/priscilla-du-preez-ra8JrePvtLs-unsplash.jpg";

export function AboutHighlights() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* CARD 1 */}
        <article className={styles.card}>
          <div
            className={styles.imageBox}
            style={{ backgroundImage: `url(${imgNewHere})` }}
          />
          <h3 className={styles.title}>Sou novo por aqui</h3>
          <p className={styles.text}>
            Se esta é a sua primeira vez, receba nossa acolhida. Este é um
            espaço de paz, onde você pode chegar com calma e no seu próprio tempo.
          </p>
          <button className={styles.linkButton}>SABER MAIS</button>
        </article>

        {/* CARD 2 */}
        <article className={styles.card}>
          <div
            className={styles.imageBox}
            style={{ backgroundImage: `url(${imgMissions})` }}
          />
          <h3 className={styles.title}>Nossas missões</h3>
          <p className={styles.text}>
            Nosso propósito é apoiar quem busca silêncio, oração e sentido.
            Missões simples, mas cheias de significado espiritual.
          </p>
          <button className={styles.linkButton}>LEIA MAIS</button>
        </article>

        {/* CARD 3 */}
        <article className={styles.card}>
          <div
            className={styles.imageBox}
            style={{ backgroundImage: `url(${imgConnect})` }}
          />
          <h3 className={styles.title}>Conectar</h3>
          <p className={styles.text}>
            Aqui você pode enviar intenções, participar dos momentos de oração
            e caminhar junto com outras pessoas na mesma busca interior.
          </p>
          <button className={styles.linkButton}>SABER MAIS</button>
        </article>
      </div>
    </section>
  );
}

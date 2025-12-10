import styles from "./About.module.css";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { AboutHighlights } from "./AboutHighlights";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import { BeliefsSection } from "./BeliefsSection";

export function About() {
  return (
    <div className="app-container">
      <Header />

      {/* HERO CINZA ESCURO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Sobre nós</h1>
        <p className={styles.breadcrumb}>
          <a href="/">Home</a> / Sobre nós
        </p>
      </section>

      {/* TEXTO PRINCIPAL */}
      <section className={styles.aboutContent}>
        <h3 className={styles.sectionLabel}>SOBRE NÓS</h3>
        <h2 className={styles.subtitle}>Quem somos</h2>

        <p className={styles.text}>
          Nosso Espaço de Oração é dedicado a oferecer um ambiente de paz, reflexão e espiritualidade.
          Acreditamos no poder da oração, no silêncio que acalma a mente e na luz que se revela
          quando dedicamos um momento para o sagrado.
        </p>

        <p className={styles.text}>
          Aqui acolhemos intenções, preces e necessidades espirituais de todas as pessoas.
          Nosso propósito é ser um canal de serenidade, união e esperança para quem busca um
          refúgio interior em meio ao ritmo acelerado da vida.
        </p>
      </section>

      <AboutHighlights />
      <BeliefsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

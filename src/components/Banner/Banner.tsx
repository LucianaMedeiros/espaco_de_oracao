import styles from "./Banner.module.css";
import bgFloresta from "../../assets/images/colin-rowley-h8J5dTEVuXA-unsplash.jpg";

export function Banner() {
  return (
    <section
      id="inicio"
      className={styles.hero}
      style={{ backgroundImage: `url(${bgFloresta})` }}
    >
      <div className={styles.overlay}>
        <h1>Encontre um momento de silêncio para orar</h1>
        <p>
          Um espaço simples para você se desconectar do caos e se conectar com o sagrado.
        </p>
        <a href="#orar" className={styles.ctaButton}>
          Quero orar agora
        </a>
      </div>
    </section>
  );
}

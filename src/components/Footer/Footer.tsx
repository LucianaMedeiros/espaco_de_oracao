import logo from "../../assets/images/logo.png";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LOGO GRANDE FIXO À ESQUERDA */}
        <div className={styles.leftArea}>
          <img src={logo} alt="Logo Espaço de Oração" className={styles.logoImg} />
        </div>

        {/* CONTEÚDO CENTRALIZADO AO LADO DA LOGO */}
        <div className={styles.centerContent}>
          <div className={styles.footerLogo}>Espaço de Oração</div>

          <div className={styles.footerInfo}>
            <p>Avenida Casas das Pedras, número XXX</p>
            <p>Penedo, Itatiaia, RJ — CEP 27580-000</p>
            <p>Horário: terça e quinta, 20:00h às 21:00h</p>
          </div>

          <div className={styles.footerSocial}>
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://youtube.com" target="_blank">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

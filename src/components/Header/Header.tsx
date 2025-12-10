import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <img src={logo} alt="Logo Espaço de Oração" className={styles.logoImg} />
                <span className={styles.logoText}>Espaço de Oração</span>
            </div>

            <nav className={styles.navLinks}>
                <Link to="/">Início</Link>
                <a href="#pray">Quero Orar</a>
                <a href="#daily-prayer">Oração do dia</a>
                <a href="#more-content">Mais conteúdos</a>
                <Link to="/gallery">Galeria</Link>
                <Link to="/about">Sobre</Link>
            </nav>
        </header>
    );
}

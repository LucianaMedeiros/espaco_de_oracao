import { useEffect, useState } from "react";
import styles from "./CommingSoon.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";

type TimeLeft = {
  hours: string;
  minutes: string;
  seconds: string;
};

export function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

useEffect(() => {
  // 01/01/2026 às 00:00 no horário local
  const target = new Date(2026, 0, 1, 0, 0, 0); 
  // lembre: mês 11 = dezembro (0-based)

  const updateTime = () => {
    const now = Date.now();
    const diff = target.getTime() - now;

    if (diff <= 0) {
      setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      clearInterval(intervalId);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setTimeLeft({
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    });
  };

  updateTime();
  const intervalId = window.setInterval(updateTime, 1000);

  return () => clearInterval(intervalId);
}, []);


  return (
    <div className="app-container">
      <Header />

      <section className={styles.container}>
        <h1 className={styles.title}>Estaremos chegando em breve.</h1>

        <p className={styles.subtitle}>
          Nossa galeria ainda está em construção. Em breve estaremos de volta com novidades!
        </p>

        <div className={styles.timer}>
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.hours}</span>
            <span className={styles.label}>HORAS</span>
          </div>

          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.minutes}</span>
            <span className={styles.label}>MINUTOS</span>
          </div>

          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.seconds}</span>
            <span className={styles.label}>SEGUNDOS</span>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

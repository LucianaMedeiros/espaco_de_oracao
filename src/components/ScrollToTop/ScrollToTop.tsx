import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`${styles.scrollButton} ${visible ? styles.show : ""}`}
      onClick={scrollTop}
      aria-label="Voltar ao topo"
    >
   <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}

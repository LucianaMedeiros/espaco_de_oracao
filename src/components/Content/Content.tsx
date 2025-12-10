import styles from "./Content.module.css";
import imgIntencoes from "../../assets/images/pedro-lima-HtwsbbClBOs-unsplash.jpg";
import imgReflexao from "../../assets/images/ben-white-vtCBruWoNqo-unsplash.jpg";
import imgVolte from "../../assets/images/patrick-fore-b_SHPU5M3nk-unsplash.jpg";

export function Content() {
  return (
    <section id="more-content" className={styles.sectionConteudos}>
      <div className={styles.tilesRow}>
        
        <article className={`${styles.tileCard} ${styles.tileIntencoes}`}  
        style={{ backgroundImage: `url(${imgIntencoes})` }}>
          <div className={`${styles.tileLayer} ${styles.tileLayerFront}`}>
            <h3>Intenções de oração</h3>
            <p>
              Separe mentalmente ou anote em um caderno as pessoas e situações
              pelas quais você quer orar hoje.
            </p>
          </div>

          <div className={`${styles.tileLayer} ${styles.tileLayerBack}`}>
            <h3>Como funciona</h3>
            <p>
              Suas intenções são incluídas em nossas orações diárias, com respeito
              e total confidencialidade.
            </p>
          </div>
        </article>

        <article className={`${styles.tileCard} ${styles.tileReflexao}`}   style={{ backgroundImage: `url(${imgReflexao})` }}>
          <div className={`${styles.tileLayer} ${styles.tileLayerFront}`}>
            <h3>Reflexão da semana</h3>
            <p>
              Às vezes, o silêncio também é resposta. Nem tudo precisa ser
              decidido imediatamente.
            </p>
          </div>

          <div className={`${styles.tileLayer} ${styles.tileLayerBack}`}>
            <h3>Respire e reflita</h3>
            <p>
              Separe alguns minutos do seu dia para respirar e relaxar. 
              A clareza vem no silêncio.
            </p>
          </div>
        </article>

        <article className={`${styles.tileCard} ${styles.tileVolte}`}   style={{ backgroundImage: `url(${imgVolte})` }}>
          <div className={`${styles.tileLayer} ${styles.tileLayerFront}`}>
            <h3>Volte sempre que precisar</h3>
            <p>
              Este espaço foi pensado para ser simples e acessível. Use-o como
              um ponto de pausa no seu dia.
            </p>
          </div>

          <div className={`${styles.tileLayer} ${styles.tileLayerBack}`}>
            <h3>Guarde este lugar</h3>
            <p>
              Adicione esta página aos favoritos e volte sempre que buscar 
              paz interior.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}

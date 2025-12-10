import styles from "./BeliefsSection.module.css";

export function BeliefsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>No que acreditamos</h2>

      <div className={styles.items}>
        <div className={styles.item}>
          <span className={styles.number}>1.</span>
          <h3 className={styles.itemTitle}>Deus é bom</h3>
          <p className={styles.text}>
          A bondade divina se manifesta nos detalhes simples da vida e nos convida a confiar mesmo quando não entendemos tudo.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.number}>2.</span>
          <h3 className={styles.itemTitle}>Nada é impossível</h3>
          <p className={styles.text}>
          Quando abrimos espaço para a fé, caminhos antes invisíveis começam a surgir e o impossível se torna só o próximo passo.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.number}>3.</span>
          <h3 className={styles.itemTitle}>Somos importantes</h3>
          <p className={styles.text}>
           Cada pessoa carrega uma luz única. Quando reconhecemos nosso valor, tocamos o mundo ao nosso redor com mais amor.
          </p>
        </div>
      </div>
    </section>
  );
}

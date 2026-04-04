import styles from "./QuoteTransition.module.scss";

export default function QuoteTransition() {
  return (
    <section className={styles.quoteSection} aria-label="Motivacny citat">
      <div className="container">
        <blockquote className={styles.quote}>
          “Vysledky neprichadzaju z chaosu, ale z konzistentnych krokov, ktore davaju zmysel.”
        </blockquote>
      </div>
    </section>
  );
}

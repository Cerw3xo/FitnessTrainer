import styles from "./HeroTestimonials.module.scss";

const testimonials = [
  "Za kratky cas som videl vysledky, ktore by som sam len tazko dosiahol. Plan bol jasny a fungoval.",
  "Kazdy tyzden som citil progres. Trening ma bavil, motivoval a konecne mal realny smer.",
  "Cela spolupraca bola neuveritelne prinosna. Velmi si vazim vedenie, podporu a celkovy pristup.",
];

export default function HeroTestimonials() {
  return (
    <section className={styles.section} aria-label="Referencie klientov">
      <div className={styles.inner}>
        {testimonials.map((quote) => (
          <article key={quote} className={styles.card}>
            <div className={styles.stars} aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
            <p className={styles.quote}>{quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

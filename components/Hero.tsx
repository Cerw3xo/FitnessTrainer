import Image from "next/image";
import styles from "./Hero.module.scss";

const highlights = [
  "Viac ako 200 klientov",
  "10 rokov skúseností",
  "5+ rokov súťaží",
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.top}>
            <p className={styles.eyebrow}>
              MATEJ CERVENKA | OSOBNY TRENER
            </p>
            <h1 className={styles.title}>
              doveryhodny osobny trener
            </h1>
            <p className={styles.subtitle}>
              Osobny trening a online coaching, ktory sa prisposobi
              vasmu cielu, vykonnosti aj realnemu zivotnemu tempu.
            </p>
          </div>

          <a href="#contact" className={styles.cta}>
            <span>Rezervovať si sedenie</span>
            <span className={styles.ctaIcon} aria-hidden="true">
              →
            </span>
          </a>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <Image
            src="/heroSection.webp"
            alt="Osobný tréner Matey"
            fill
            priority
            sizes="(min-width: 1200px) max((min(100vw, 1200px) - 32px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw, 1200px) - 32px) / 2, 1px), (max-width: 809.98px) calc(min(100vw, 1200px) - 40px)"
            className={styles.image}
          />
          <div
            className={`${styles.gradient} ${styles.gradientBottom}`}
            aria-hidden="true"
          />
          <div
            className={`${styles.gradient} ${styles.gradientLeft}`}
            aria-hidden="true"
          />
          <div
            className={`${styles.gradient} ${styles.gradientRight}`}
            aria-hidden="true"
          />
          <div
            className={`${styles.gradient} ${styles.gradientTop}`}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

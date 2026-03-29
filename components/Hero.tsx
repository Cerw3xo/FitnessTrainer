import Image from "next/image";
import styles from "./Hero.module.scss";

const highlights = ["Viac ako 200 klientov", "10 rokov skúseností", "5+ rokov súťaží"];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>MATEY TRAINER - OSOBNÝ TRÉNER</p>
          <h1 className={styles.title}>VÁŠ DÔVERYHODNÝ OSOBNÝ TRÉNER</h1>
          <p className={styles.subtitle}>Profesionálny osobný tréning a online koučing.</p>

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
            src="/heroSection.avif"
            alt="Osobný tréner Matey"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

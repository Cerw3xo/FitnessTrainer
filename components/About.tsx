import Image from "next/image";
import Button from "./Button";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.media}>
            <Image
              src="/heroSection.webp"
              alt="Matej Cervenka"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>About me</p>
            <h2 className={styles.title}>Trener, ktory stavia na systeme.</h2>
            <p className={styles.text}>
              Pomaham ludom budovat silu, kondiciu a sebadoveru cez rozumne nastavene
              treningy, individualny pristup a dlhodobo udrzatelne navyky. Kazdy plan
              prisposobujem tvojej vykonnosti, cielu aj casovym moznostiam.
            </p>
            <Button href="#contact" variant="pillArrow" className={styles.cta}>
              Rezervovat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

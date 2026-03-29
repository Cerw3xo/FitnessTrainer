import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <h2 className="section-title">About</h2>
          <p className={styles.text}>
            I help busy professionals transform their physique with focused strength training, personalized nutrition,
            and accountability. Every program is tailored to your schedule, goals, and current fitness level.
          </p>
        </div>
      </div>
    </section>
  );
}

import styles from "./Services.module.scss";

const services = [
  {
    title: "Private Coaching",
    description: "Custom strength and conditioning plans with weekly progress check-ins.",
  },
  {
    title: "Nutrition Strategy",
    description: "Simple, sustainable nutrition guidance built around your lifestyle and goals.",
  },
  {
    title: "Lifestyle Accountability",
    description: "Daily habits, recovery, and mindset support to keep momentum high.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className={styles.cards}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from "./Services.module.scss";

const services = [
  {
    icon: "training",
    label: "1:1 vedenie",
    title: "Osobne treningy",
    description: "Individualne vedenie v gyme so zameranim na techniku, progres a bezpecne napredovanie.",
  },
  {
    icon: "online",
    label: "Plan na dialku",
    title: "Online coaching",
    description: "Treningovy plan, pravidelny feedback a vedenie na dialku, aby si mal jasny smer aj mimo fitka.",
  },
  {
    icon: "nutrition",
    label: "Lepsia regeneracia",
    title: "Vyživa a regeneracia",
    description: "Prakticke odporucania k jedlu, regeneracii a navykom, ktore podporia vykon aj vysledky.",
  },
];

function ServiceIcon({ icon }: { icon: (typeof services)[number]["icon"] }) {
  if (icon === "online") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 6.5h16M7.5 3h9M8 20.5h8M6.5 6.5v9a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-9"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === "nutrition") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 20c4.4-1.4 7-5 7-9.3 0-1.7-.4-3.3-1.2-4.7-3 .4-5.4 1.6-7.3 3.5C8.6 11.4 7.4 13.8 7 16.8 8.4 18.7 10 19.7 12 20Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M8 16c1.7-.2 3.2-.9 4.5-2.2s2-2.8 2.2-4.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9.5h12M8 9.5V8a4 4 0 0 1 8 0v1.5M4.5 9.5v5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5M9 14.5h6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.panel}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Sluzby</p>
            <h2 className={styles.title}>Vedenie, ktore sa prisposobi tvojmu cielu aj tempu.</h2>
            <p className={styles.copy}>
              Ci chces osobne treningy, plan na dialku alebo lepsie nastavenie
              regeneracie, kazda spolupraca je postavena na jasnom postupe a realnom
              progrese.
            </p>
          </div>

          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.icon}>
                <ServiceIcon icon={service.icon} />
              </div>
              <p className={styles.label}>{service.label}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

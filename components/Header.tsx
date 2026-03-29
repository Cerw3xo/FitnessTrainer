import styles from "./Header.module.scss";

const navItems = [
  { label: "Domov", href: "#hero" },
  { label: "O mne", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Referencie", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#hero" className={styles.brand}>
            <span className={styles.icon} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                role="presentation"
              >
                <path
                  d="M4 8.5C4 7.4 4.9 6.5 6 6.5H8.2L9.3 5.2C9.7 4.7 10.3 4.5 10.9 4.5H13.1C13.7 4.5 14.3 4.7 14.7 5.2L15.8 6.5H18C19.1 6.5 20 7.4 20 8.5V17.5C20 18.6 19.1 19.5 18 19.5H6C4.9 19.5 4 18.6 4 17.5V8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="13"
                  r="3.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <span className={styles.name}>MATEJ ČERVENKA</span>
          </a>

          <nav className={styles.nav} aria-label="Hlavná navigácia">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.link}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

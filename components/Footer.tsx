import styles from "./Footer.module.scss";
import { siteConfig } from "@/utils/site";

const navItems = [
  { label: "Sluzby", href: "#services" },
  { label: "Referencie", href: "#testimonials" },
  { label: "O mne", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <p className={styles.brand}>{siteConfig.siteName}</p>
          <nav className={styles.nav} aria-label="Footer navigacia">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {siteConfig.siteName}. Vsetky prava vyhradene.</p>
          <p>Osobny trening a online coaching.</p>
        </div>
      </div>
    </footer>
  );
}

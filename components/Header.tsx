"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

const navItems = [
  { label: "Domov", href: "#hero" },
  { label: "O mne", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Referencie", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isMenuOpen ? styles.headerMenuOpen : ""}`}
    >
      <div className="container">
        <div className={styles.inner}>
          <a
            href="#hero"
            className={styles.brand}
            onClick={closeMenu}
          >
            <span className={styles.icon} aria-hidden="true">
              <img
                src="/icon.avif"
                alt=""
                className={styles.iconImage}
              />
            </span>
            <h1 className={styles.name}>MATEJ ČERVENKA</h1>
          </a>

          <nav className={styles.desktopNav} aria-label="Hlavná navigácia">
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

          <button
            type="button"
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
            aria-label={isMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobilná navigácia"
      >
        <div className={`container ${styles.mobileNavInner}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

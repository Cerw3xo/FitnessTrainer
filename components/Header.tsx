"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { siteConfig } from "@/utils/site";

const navItems = [
  { label: "Domov", href: "#hero" },
  { label: "O mne", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Referencie", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
            aria-label="Prejst na zaciatok stranky"
          >
            <span className={styles.icon} aria-hidden="true">
              <Image
                src="/icon.webp"
                alt=""
                width={32}
                height={32}
                className={styles.iconImage}
              />
            </span>
            <span className={styles.name}>{siteConfig.personName.toUpperCase()}</span>
          </a>

          <nav
            className={styles.desktopNav}
            aria-label="Hlavná navigácia"
          >
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
        aria-hidden={!isMenuOpen}
      >
        <div className={`container ${styles.mobileNavInner}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

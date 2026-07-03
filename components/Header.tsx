"use client";

import Image from "next/image";
import { type MouseEvent, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { siteConfig } from "@/utils/site";

const SCROLL_DURATION = 900;

const navItems = [
  { label: "Domov", href: "#hero" },
  { label: "O mne", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Referencie", href: "#testimonials" },
  { label: "Kontakt", href: "#contact" },
];

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

function getHeaderOffset() {
  const rawValue = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--header-offset");

  return Number.parseFloat(rawValue) || 0;
}

function scrollToSection(href: string) {
  const target = document.querySelector<HTMLElement>(href);

  if (!target) {
    return;
  }

  const startY = window.scrollY;
  const targetY = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
  );
  const distance = targetY - startY;
  const startedAt = performance.now();
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const updateHash = () => {
    window.history.pushState(null, "", href);
  };

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    updateHash();
    return;
  }

  const step = (now: number) => {
    const elapsed = now - startedAt;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      updateHash();
    }
  };

  requestAnimationFrame(step);
}

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

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    closeMenu();
    document.body.style.overflow = "";
    scrollToSection(href);
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
            onClick={(event) => handleSectionClick(event, "#hero")}
            aria-label="Prejst na zaciatok stranky"
          >
            <span className={styles.icon} aria-hidden="true">
              <Image
                src="/logo.png"
                alt=""
                width={59}
                height={40}
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
                onClick={(event) => handleSectionClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.navCta}
              onClick={(event) => handleSectionClick(event, "#contact")}
            >
              Rezervovať
            </a>
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
              onClick={(event) => handleSectionClick(event, item.href)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.mobileNavCta}
            onClick={(event) => handleSectionClick(event, "#contact")}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Rezervovať
          </a>
        </div>
      </nav>
    </header>
  );
}

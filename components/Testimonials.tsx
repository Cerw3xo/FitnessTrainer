"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    title: "Premena, ktora ostala dlhodobo",
    quote: "Martin chcel schudnut, spevnit postavu a nastavit si rutinu, ktoru udrzi aj popri praci.",
    name: "Martin K.",
    image: "/service.webp",
    rating: 5,
  },
  {
    title: "Jasny plan bez zbytocneho chaosu",
    quote: "Petra potrebovala vedenie na dialku, pravidelny feedback a system, ktory jej sadne do bezneho tyzdna.",
    name: "Petra S.",
    image: "/contact.webp",
    rating: 5,
  },
  {
    title: "Viac sily, discipliny aj energie",
    quote: "David prisiel kvoli forme, ale spolupraca mu pomohla aj s disciplínou, vykonom a dennym nastavenim.",
    name: "David R.",
    image: "/heroSection.webp",
    rating: 5,
  },
];

function getSlot(index: number, active: number, total: number): "center" | "right" | "left" {
  const diff = ((index - active) % total + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  return "left";
}

function getCrossingCards(from: number, to: number, total: number): Set<number> {
  const crossing = new Set<number>();
  for (let i = 0; i < total; i++) {
    const fromSlot = getSlot(i, from, total);
    const toSlot = getSlot(i, to, total);
    if (
      (fromSlot === "left" && toSlot === "right") ||
      (fromSlot === "right" && toSlot === "left")
    ) {
      crossing.add(i);
    }
  }
  return crossing;
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [teleporting, setTeleporting] = useState<Set<number>>(new Set());
  const total = testimonials.length;

  // Teleport crossing card: instant jump (no transition) then fade-in
  const teleportAndGo = (crossing: Set<number>, next: number) => {
    if (crossing.size > 0) {
      setTeleporting(crossing);
      // Two RAFs: first ensures the no-transition render paints,
      // second re-enables transitions so the card fades in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTeleporting(new Set()));
      });
    }
    setActive(next);
  };

  // Auto-rotate — uses functional setActive to avoid stale closure
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % total;
        const crossing = getCrossingCards(prev, next, total);
        if (crossing.size > 0) {
          setTeleporting(crossing);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setTeleporting(new Set()));
          });
        }
        return next;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [paused, total]);

  const slotClass = {
    center: styles.cardCenter,
    left: styles.cardLeft,
    right: styles.cardRight,
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.copyBlock}>
            <p className={styles.eyebrow}>Client stories</p>
            <h2 className={styles.title}>Vysledky hovoria za vsetko.</h2>
          </div>
          <Button href="#contact">Rezervovat si konzultaciu</Button>
        </div>
      </div>

      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.track}>
          {testimonials.map((item, i) => {
            const slot = getSlot(i, active, total);
            const isTeleporting = teleporting.has(i);
            return (
              <article
                key={item.name}
                className={[
                  styles.card,
                  slotClass[slot],
                  isTeleporting ? styles.cardNoTransition : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.media}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.stars} aria-label={`${item.rating} hviezdičiek`}>
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <span key={j} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.quote}</p>
                  <p className={styles.cardEyebrow}>{item.name}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.dots} role="tablist" aria-label="Carousel navigácia">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={[styles.dot, i === active ? styles.dotActive : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={() => teleportAndGo(getCrossingCards(active, i, total), i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";

const EASE = 0.18;
const STOP_THRESHOLD = 0.35;
const DELTA_MULTIPLIER = 0.82;
const MAX_DELTA = 160;

function getScrollHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
}

function getMaxScroll() {
  return getScrollHeight() - window.innerHeight;
}

function normalizeDelta(event: WheelEvent) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    return event.deltaY * 16;
  }

  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    return event.deltaY * window.innerHeight;
  }

  return event.deltaY;
}

function canScrollInside(element: Element | null, deltaY: number) {
  let current = element;

  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    const canScrollY =
      /(auto|scroll)/.test(style.overflowY) &&
      current.scrollHeight > current.clientHeight;

    if (canScrollY) {
      const atTop = current.scrollTop <= 0;
      const atBottom =
        Math.ceil(current.scrollTop + current.clientHeight) >=
        current.scrollHeight;

      if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
        return true;
      }
    }

    current = current.parentElement;
  }

  return false;
}

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const isTouchFirst = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion.matches || isTouchFirst) {
      return;
    }

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let frame = 0;
    let lastDirection = 0;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";

    const stop = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    const animate = () => {
      currentY += (targetY - currentY) * EASE;

      if (Math.abs(targetY - currentY) < STOP_THRESHOLD) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        frame = 0;
        return;
      }

      window.scrollTo(0, currentY);
      frame = requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        document.body.style.overflow === "hidden" ||
        canScrollInside(event.target as Element | null, event.deltaY)
      ) {
        return;
      }

      event.preventDefault();

      const rawDelta = normalizeDelta(event) * DELTA_MULTIPLIER;
      const direction = Math.sign(rawDelta);

      if (direction && lastDirection && direction !== lastDirection) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }

      lastDirection = direction || lastDirection;

      const delta = Math.max(
        -MAX_DELTA,
        Math.min(MAX_DELTA, rawDelta)
      );

      targetY = Math.max(0, Math.min(getMaxScroll(), targetY + delta));

      if (!frame) {
        currentY = window.scrollY;
        frame = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      if (!frame) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      stop();
      root.style.scrollBehavior = previousScrollBehavior;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}

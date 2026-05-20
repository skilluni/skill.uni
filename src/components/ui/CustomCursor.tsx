"use client";

import { useEffect, useRef } from "react";

const DOT_SIZE = 8;
const RING_SIZE = DOT_SIZE * 5;
const RING_FOLLOW_SPEED = 0.18;

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-none");
    document.body.classList.add("cursor-none");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;
    let visible = false;

    const showCursor = () => {
      if (visible) return;
      visible = true;
      dot.classList.remove("opacity-0");
      ring.classList.remove("opacity-0");
      dot.classList.add("opacity-100");
      ring.classList.add("opacity-100");
    };

    const hideCursor = () => {
      visible = false;
      dot.classList.remove("opacity-100");
      ring.classList.remove("opacity-100");
      dot.classList.add("opacity-0");
      ring.classList.add("opacity-0");
    };

    const moveDot = (x: number, y: number) => {
      dot.style.transform = `translate3d(${x - DOT_SIZE / 2}px, ${
        y - DOT_SIZE / 2
      }px, 0)`;
    };

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      moveDot(mouseX, mouseY);
      showCursor();
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * RING_FOLLOW_SPEED;
      ringY += (mouseY - ringY) * RING_FOLLOW_SPEED;

      ring.style.transform = `translate3d(${ringX - RING_SIZE / 2}px, ${
        ringY - RING_SIZE / 2
      }px, 0)`;

      rafId = window.requestAnimationFrame(animateRing);
    };

    const onWindowBlur = () => hideCursor();
    const onPointerLeave = () => hideCursor();
    const onPointerEnter = () => showCursor();

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    document.addEventListener("mouseenter", onPointerEnter);
    window.addEventListener("blur", onWindowBlur);

    moveDot(mouseX, mouseY);
    rafId = window.requestAnimationFrame(animateRing);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      document.removeEventListener("mouseenter", onPointerEnter);
      window.removeEventListener("blur", onWindowBlur);

      document.documentElement.classList.remove("cursor-none");
      document.body.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[40px] w-[40px] rounded-full border border-[#ffffff]/45 bg-transparent opacity-0 transition-opacity duration-200 will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-[8px] w-[8px] rounded-full rounded-full bg-[#ffffff] opacity-0 transition-opacity duration-150 will-change-transform"
      />
    </>
  );
}
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = 0, y = 0;
    let animFrame: number;

    const moveCursor = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const updatePos = () => {
      if (cursor) {
        cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
      }
      animFrame = requestAnimationFrame(updatePos);
    };

    const addHover = () => cursor?.classList.add("hovering");
    const removeHover = () => cursor?.classList.remove("hovering");

    window.addEventListener("mousemove", moveCursor);
    animFrame = requestAnimationFrame(updatePos);

    const interactables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animFrame);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(startOnMount);
  const frameRef = useRef<number>(0);

  const start = () => setHasStarted(true);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [hasStarted, target, duration]);

  return { count, start };
}
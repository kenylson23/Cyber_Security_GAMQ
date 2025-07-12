import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.1) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Disconnect after first intersection for better performance
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Trigger slightly before element enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

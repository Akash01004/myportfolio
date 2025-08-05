import { useState, useEffect, useRef } from 'react';

export default function useScrollAnimation() {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const node = ref.current;
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return { ref, inView };
}

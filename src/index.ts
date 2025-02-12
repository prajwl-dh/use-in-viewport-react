import { RefObject, useEffect, useState } from 'react';

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useInViewportReact<T extends HTMLElement>(
  ref: RefObject<T>,
  options: Options = { root: null, threshold: 0.1 }
): boolean {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return isInViewport;
}

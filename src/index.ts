import { RefObject, useEffect, useState } from 'react';

/**
 * Options for configuring the IntersectionObserver.
 *
 * @typedef {Object} Options
 * @property {Element | null} [root=null] - The element to use as the viewport for checking visibility. Defaults to `null`, which means the browser viewport is used.
 * @property {string} [rootMargin='0'] - Margin around the root element, can be specified in CSS units (e.g., '10px 20px 30px 40px').
 * @property {number | number[]} [threshold=0.1] - A number or an array of numbers indicating the percentage of the target element's visibility that triggers the observer callback. A value of `0.1` means the element is considered "in view" when at least 10% is visible.
 */
interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * A custom hook to detect if an element is in the viewport using IntersectionObserver.
 *
 * @template T - Type of the ref element (HTML element type).
 * @param {React.RefObject<T>} ref - The ref object pointing to the target element to be observed.
 * @param {Options} [options={ root: null, threshold: 0.1 }] - The configuration options for the IntersectionObserver. Default options are `root: null` and `threshold: 0.1`.
 * @returns {boolean} - A boolean indicating whether the element is currently in the viewport (i.e., if the element is visible based on the specified options).
 */
export function useInViewportReact<T extends HTMLElement | null>(
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

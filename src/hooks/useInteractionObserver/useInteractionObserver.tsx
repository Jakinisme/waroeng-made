import { useState, useEffect, useRef, useCallback } from "react";

interface UseIntersectionOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseIntersectionReturn {
  ref: (node: Element | null) => void;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useIntersectionObserver(
  {
    threshold = 0,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
  }: UseIntersectionOptions = {}
): UseIntersectionReturn {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const nodeRef = useRef<Element | null>(null);

  const ref = useCallback(
    (node: Element | null) => {
      if (observerRef.current && nodeRef.current) {
        observerRef.current.unobserve(nodeRef.current);
      }

      nodeRef.current = node;

      if (node) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            const first = entries[0];
            setEntry(first);

            if (first.isIntersecting) {
              setIsIntersecting(true);

              if (triggerOnce && observerRef.current) {
                observerRef.current.disconnect();
              }
            } else {
              if (!triggerOnce) {
                setIsIntersecting(false);
              }
            }
          },
          { threshold, root, rootMargin }
        );

        observerRef.current.observe(node);
      }
    },
    [threshold, root, rootMargin, triggerOnce]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { ref, isIntersecting, entry };
}

export default useIntersectionObserver;

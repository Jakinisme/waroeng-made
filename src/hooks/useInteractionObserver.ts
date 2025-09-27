import { useRef, useEffect, useState, useCallback } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';

interface UseInteractionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

interface UseInteractionObserverReturn {
  ref: (instance: Element | null) => void;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

/**
 * Custom hook that combines intersection observer with interaction tracking
 * Uses @uidotdev/usehooks useIntersectionObserver as a base
 */
export function useInteractionObserver(
  options: UseInteractionObserverOptions = {}
): UseInteractionObserverReturn {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
  } = options;

  const [isInteracting, setIsInteracting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // Use the base intersection observer from @uidotdev/usehooks
  const [ref, entry] = useIntersectionObserver({
    threshold,
    root,
    rootMargin,
  });

  // Handle mouse enter interaction
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsInteracting(true);
  }, []);

  // Handle mouse leave interaction
  const handleMouseLeave = useCallback(() => {
    // Add a small delay to prevent flickering
    timeoutRef.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 100);
  }, []);

  // Handle focus interaction
  const handleFocus = useCallback(() => {
    setIsInteracting(true);
  }, []);

  // Handle blur interaction
  const handleBlur = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 100);
  }, []);

  // Create a ref callback that combines intersection observer with interaction tracking
  const combinedRef = useCallback((instance: Element | null) => {
    // Call the original ref from useIntersectionObserver
    ref(instance);
    
    if (instance) {
      // Add event listeners for interaction tracking
      instance.addEventListener('mouseenter', handleMouseEnter);
      instance.addEventListener('mouseleave', handleMouseLeave);
      instance.addEventListener('focus', handleFocus);
      instance.addEventListener('blur', handleBlur);
    }
  }, [ref, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    ref: combinedRef,
    isIntersecting: (entry?.isIntersecting ?? false) || isInteracting,
    entry,
  };
}

export default useInteractionObserver;

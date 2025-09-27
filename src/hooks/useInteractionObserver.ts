import { useRef, useEffect, useState, useCallback } from 'react';

interface UseInteractionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean; // New option to control one-time triggering
}

interface UseInteractionObserverReturn {
  ref: (instance: Element | null) => void;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

/**
 * Custom hook that combines intersection observer with interaction tracking
 * Modified to support one-time triggering
 */
export function useInteractionObserver(
  options: UseInteractionObserverOptions = {}
): UseInteractionObserverReturn {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    triggerOnce = true, // Default to true for one-time triggering
  } = options;

  const [isInteracting, setIsInteracting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<Element | null>(null);

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

  // Create intersection observer
  useEffect(() => {
    if (typeof window === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          if (!hasTriggered) {
            setHasTriggered(true);
            // Disconnect observer after first trigger if triggerOnce is true
            if (triggerOnce && observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, root, rootMargin, hasTriggered, triggerOnce]);

  // Create a ref callback that combines intersection observer with interaction tracking
  const combinedRef = useCallback((instance: Element | null) => {
    // Clean up previous element
    if (elementRef.current && observerRef.current) {
      observerRef.current.unobserve(elementRef.current);
      elementRef.current.removeEventListener('mouseenter', handleMouseEnter);
      elementRef.current.removeEventListener('mouseleave', handleMouseLeave);
      elementRef.current.removeEventListener('focus', handleFocus);
      elementRef.current.removeEventListener('blur', handleBlur);
    }
    
    elementRef.current = instance;
    
    if (instance && observerRef.current) {
      // Add to intersection observer
      observerRef.current.observe(instance);
      
      // Add event listeners for interaction tracking
      instance.addEventListener('mouseenter', handleMouseEnter);
      instance.addEventListener('mouseleave', handleMouseLeave);
      instance.addEventListener('focus', handleFocus);
      instance.addEventListener('blur', handleBlur);
    }
  }, [handleMouseEnter, handleMouseLeave, handleFocus, handleBlur]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Determine if intersecting based on triggerOnce setting
  const isIntersecting = triggerOnce 
    ? hasTriggered || isInteracting
    : isInteracting;

  return {
    ref: combinedRef,
    isIntersecting,
    entry: null, // We're not using the entry from the original hook anymore
  };
}

export default useInteractionObserver;

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  infinite?: boolean;
  delay?: number;
  onComplete?: () => void;
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isComplete: boolean;
  startTyping: () => void;
  stopTyping: () => void;
  resetTyping: () => void;
}

/**
 * Custom hook for typewriter effect
 * @param text - The text to type
 * @param speed - Typing speed in milliseconds (default: 50)
 * @param infinite - Whether to loop infinitely (default: false)
 * @param delay - Delay before starting to type in milliseconds (default: 0)
 * @param onComplete - Callback when typing is complete
 */
export function useTypewriter({
  text,
  speed = 50,
  infinite = false,
  delay = 0,
  onComplete,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const timeoutRef = useRef<number | null>(null);
  const delayTimeoutRef = useRef<number | null>(null);

  const startTyping = useCallback(() => {
    if (isTyping) return;
    
    setIsTyping(true);
    setIsComplete(false);
    setCurrentIndex(0);
    setIsDeleting(false);
    setDisplayText('');
  }, [isTyping]);

  const stopTyping = useCallback(() => {
    setIsTyping(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = null;
    }
  }, []);

  const resetTyping = useCallback(() => {
    stopTyping();
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
    setIsComplete(false);
  }, [stopTyping]);

  useEffect(() => {
    if (!isTyping) return;

    const typeText = () => {
      if (isDeleting) {
        // Deleting text
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
          setDisplayText(text.slice(0, currentIndex - 1));
        } else {
          // Finished deleting, start typing again (for infinite mode)
          if (infinite) {
            setIsDeleting(false);
            setCurrentIndex(0);
          } else {
            // Not infinite mode, stop here
            setIsTyping(false);
            setIsComplete(true);
            onComplete?.();
          }
        }
      } else {
        // Typing text
        if (currentIndex < text.length) {
          setCurrentIndex(prev => prev + 1);
          setDisplayText(text.slice(0, currentIndex + 1));
        } else {
          // Finished typing
          if (infinite) {
            // Wait a bit before starting to delete
            timeoutRef.current = window.setTimeout(() => {
              setIsDeleting(true);
            }, 2000); // Wait 2 seconds before deleting
          } else {
            // Not infinite mode, complete
            setIsTyping(false);
            setIsComplete(true);
            onComplete?.();
          }
        }
      }
    };

    // Apply delay if specified
    if (delay > 0 && currentIndex === 0 && !isDeleting) {
      delayTimeoutRef.current = window.setTimeout(typeText, delay);
    } else {
      timeoutRef.current = window.setTimeout(typeText, speed);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = null;
      }
    };
  }, [isTyping, currentIndex, isDeleting, text, speed, infinite, delay, onComplete]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
      }
    };
  }, []);

  return {
    displayText,
    isTyping,
    isComplete,
    startTyping,
    stopTyping,
    resetTyping,
  };
}

export default useTypewriter;



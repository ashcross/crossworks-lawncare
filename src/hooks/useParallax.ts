import { useState, useEffect, useCallback } from 'react';

interface ParallaxValues {
  backgroundY: number;
  contentY: number;
}

export const useParallax = (speed: number = 0.5): ParallaxValues => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!window.requestAnimationFrame) {
      setOffset(window.pageYOffset);
      return;
    }

    window.requestAnimationFrame(() => {
      setOffset(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    backgroundY: offset * speed,
    contentY: offset * (speed * 0.5),
  };
};
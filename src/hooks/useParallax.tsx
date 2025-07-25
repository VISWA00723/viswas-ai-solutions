import { useEffect, useState, useCallback } from 'react';
import { useTransform, useScroll, MotionValue } from 'framer-motion';

interface ParallaxElement {
  id: string;
  element: HTMLElement;
  speed: number;
  axis: 'x' | 'y' | 'both';
  depth: number;
}

export function useParallax() {
  const { scrollY, scrollYProgress } = useScroll();
  const [elements, setElements] = useState<ParallaxElement[]>([]);

  // Transform functions for different parallax speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y5 = useTransform(scrollY, [0, 1000], [0, -500]);

  // 3D rotation transforms
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 90]);

  // Scale and opacity transforms
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.3]);

  // 3D perspective transforms
  const perspective = useTransform(scrollY, [0, 2000], [1000, 2000]);
  const translateZ = useTransform(scrollY, [0, 1000], [0, -500]);

  const registerElement = useCallback((
    element: HTMLElement,
    speed: number = 1,
    axis: 'x' | 'y' | 'both' = 'y',
    depth: number = 0
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    setElements(prev => [...prev, { id, element, speed, axis, depth }]);
    return id;
  }, []);

  const unregisterElement = useCallback((id: string) => {
    setElements(prev => prev.filter(el => el.id !== id));
  }, []);

  useEffect(() => {
    const updateParallax = () => {
      const scrollTop = window.pageYOffset;
      
      elements.forEach(({ element, speed, axis, depth }) => {
        if (!element) return;

        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        const elementBottom = elementTop + elementHeight;
        const isInViewport = elementTop < scrollTop + windowHeight && elementBottom > scrollTop;
        
        if (isInViewport) {
          const yPos = (scrollTop - elementTop) * speed;
          const xPos = (scrollTop - elementTop) * speed * 0.5;
          const zPos = depth * (scrollTop * 0.001);
          
          let transform = '';
          
          if (axis === 'y') {
            transform = `translate3d(0, ${yPos}px, ${zPos}px)`;
          } else if (axis === 'x') {
            transform = `translate3d(${xPos}px, 0, ${zPos}px)`;
          } else {
            transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px)`;
          }
          
          element.style.transform = transform;
          element.style.willChange = 'transform';
        }
      });
    };

    const handleScroll = () => {
      requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elements]);

  return {
    scrollY,
    scrollYProgress,
    registerElement,
    unregisterElement,
    transforms: {
      y1, y2, y3, y4, y5,
      rotateX, rotateY, rotateZ,
      scale, opacity,
      perspective, translateZ
    }
  };
}

export function useParallaxRef(speed: number = 1, axis: 'x' | 'y' | 'both' = 'y', depth: number = 0) {
  const { registerElement, unregisterElement } = useParallax();
  const [elementId, setElementId] = useState<string | null>(null);

  const ref = useCallback((element: HTMLElement | null) => {
    if (elementId) {
      unregisterElement(elementId);
      setElementId(null);
    }

    if (element) {
      const id = registerElement(element, speed, axis, depth);
      setElementId(id);
    }
  }, [registerElement, unregisterElement, speed, axis, depth, elementId]);

  return ref;
}
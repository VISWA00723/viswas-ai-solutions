import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';
import { ReactNode } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  depth?: number;
  axis?: 'x' | 'y' | 'both';
  className?: string;
  rotateOnScroll?: boolean;
  scaleOnScroll?: boolean;
}

export function ParallaxContainer({
  children,
  speed = 1,
  depth = 0,
  axis = 'y',
  className = '',
  rotateOnScroll = false,
  scaleOnScroll = false
}: ParallaxContainerProps) {
  const { transforms } = useParallax();

  const getTransform = () => {
    switch (speed) {
      case 1: return transforms.y1;
      case 2: return transforms.y2;
      case 3: return transforms.y3;
      case 4: return transforms.y4;
      case 5: return transforms.y5;
      default: return transforms.y1;
    }
  };

  const motionProps: any = {
    style: {
      y: axis === 'y' || axis === 'both' ? getTransform() : undefined,
      x: axis === 'x' || axis === 'both' ? getTransform() : undefined,
    }
  };

  if (rotateOnScroll) {
    motionProps.style.rotateX = transforms.rotateX;
    motionProps.style.rotateY = transforms.rotateY;
  }

  if (scaleOnScroll) {
    motionProps.style.scale = transforms.scale;
  }

  if (depth > 0) {
    motionProps.style.translateZ = transforms.translateZ;
    motionProps.style.perspective = transforms.perspective;
  }

  return (
    <motion.div
      className={`parallax-layer ${className}`}
      {...motionProps}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
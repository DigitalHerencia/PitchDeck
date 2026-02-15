'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '@/app/lib/motion';

interface GradientBackgroundProps {
  gradient: string;
}

export function GradientBackground({ gradient }: GradientBackgroundProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      animate={{ background: gradient }}
      transition={
        reducedMotion ? { duration: 0 } : { duration: motionTokens.slow, ease: motionTokens.easing }
      }
    />
  );
}

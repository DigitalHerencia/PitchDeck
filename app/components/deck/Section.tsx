'use client';

import type { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '@/app/lib/motion';
import { cn } from '@/app/lib/utils';

interface SectionProps extends PropsWithChildren {
  id: string;
  className?: string;
}

export function Section({ id, className, children }: SectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        'deck-section relative flex min-h-dvh snap-start snap-always items-center px-4 pb-14 pt-[max(2.5rem,env(safe-area-inset-top))] sm:px-8',
        className,
      )}
    >
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: motionTokens.base, ease: motionTokens.easing }
        }
        className="mx-auto w-full max-w-5xl"
      >
        {children}
      </motion.div>
    </section>
  );
}

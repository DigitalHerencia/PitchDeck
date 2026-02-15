'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { motionTokens } from '@/app/lib/motion';

interface AnimatedHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  level?: 'h1' | 'h2';
}

export function AnimatedHeading({
  eyebrow,
  title,
  subtitle,
  className,
  level = 'h2',
}: AnimatedHeadingProps) {
  const reducedMotion = useReducedMotion();
  const HeadingTag = motion[level];

  return (
    <header className={className}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">{eyebrow}</p>
      ) : null}
      <HeadingTag
        initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.75 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: motionTokens.base, ease: motionTokens.easing }
        }
        className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl"
      >
        {title}
      </HeadingTag>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-base text-zinc-300 sm:text-lg">{subtitle}</p>
      ) : null}
    </header>
  );
}

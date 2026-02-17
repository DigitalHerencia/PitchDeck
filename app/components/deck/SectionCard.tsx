'use client';

import type { PropsWithChildren } from 'react';
import { cn } from '@/app/lib/utils';

interface SectionCardProps extends PropsWithChildren {
  className?: string;
  contentClassName?: string;
}

export function SectionCard({ className, contentClassName, children }: SectionCardProps) {
  return (
    <article
      className={cn(
        'relative overflow-hidden rounded-3xl border border-zinc-700/80 bg-zinc-950/75 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] sm:p-8',
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl"
      />
      <div className={cn('relative', contentClassName)}>{children}</div>
    </article>
  );
}

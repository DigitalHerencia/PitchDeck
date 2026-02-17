'use client';

import type { KeyboardEvent, UIEvent } from 'react';
import { Fragment } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GradientBackground } from '@/app/components/deck/GradientBackground';
import { motionTokens } from '@/app/lib/motion';
import { cn } from '@/app/lib/utils';

interface DeckShellProps {
  sections: {
    id: string;
    label: string;
    render: (args: { ndaAccepted: boolean; acceptNda: () => void }) => React.ReactNode;
  }[];
}

const sectionBackgrounds: Record<string, string> = {
  hero: 'var(--bg-hero)',
  'proof-first': 'var(--bg-brand)',
  'brand-positioning': 'var(--bg-brand)',
  'brand-assets': 'var(--bg-brand)',
  'revenue-engine': 'var(--bg-revenue)',
  'funnel-model': 'var(--bg-funnel)',
  'market-penetration': 'var(--bg-market)',
  role: 'var(--bg-role)',
  nda: 'var(--bg-tech)',
  offer: 'var(--bg-tech)',
  close: 'var(--bg-hero)',
};

export function DeckShell({ sections }: DeckShellProps) {
  const ndaSectionIndex = useMemo(
    () => sections.findIndex((section) => section.id === 'nda'),
    [sections],
  );
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  const maxUnlockedIndex =
    ndaAccepted || ndaSectionIndex === -1 ? sections.length - 1 : ndaSectionIndex;

  const acceptNda = useCallback(() => {
    setNdaAccepted(true);
  }, []);

  useEffect(() => {
    if (activeIndex > maxUnlockedIndex) {
      setActiveIndex(maxUnlockedIndex);
    }
  }, [activeIndex, maxUnlockedIndex]);

  const activeBackground = useMemo(
    () => sectionBackgrounds[sections[activeIndex]?.id] ?? 'var(--bg-hero)',
    [activeIndex, sections],
  );

  const progressWidth = `${((Math.min(activeIndex, maxUnlockedIndex) + 1) / sections.length) * 100}%`;

  const handleScroll = useCallback(
    (event: UIEvent<HTMLElement>) => {
      if (rafRef.current) {
        return;
      }

      const target = event.currentTarget;
      rafRef.current = window.requestAnimationFrame(() => {
        const sectionNodes = Array.from(target.querySelectorAll<HTMLElement>('.deck-section'));
        if (sectionNodes.length === 0) {
          rafRef.current = null;
          return;
        }

        const viewportAnchor = target.scrollTop + target.clientHeight * 0.5;
        let nextIndex = 0;

        for (let index = 0; index < sectionNodes.length; index += 1) {
          if (sectionNodes[index].offsetTop <= viewportAnchor) {
            nextIndex = index;
            continue;
          }
          break;
        }

        const clamped = Math.max(0, Math.min(nextIndex, maxUnlockedIndex));

        if (nextIndex > maxUnlockedIndex && sectionNodes[maxUnlockedIndex]) {
          target.scrollTo({ top: sectionNodes[maxUnlockedIndex].offsetTop, behavior: 'auto' });
        }

        setActiveIndex((previous) => (previous === clamped ? previous : clamped));
        rafRef.current = null;
      });
    },
    [maxUnlockedIndex],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (ndaAccepted || ndaSectionIndex === -1) {
        return;
      }

      if (
        event.key === 'PageDown' ||
        event.key === 'ArrowDown' ||
        event.key === ' ' ||
        event.key === 'End'
      ) {
        event.preventDefault();
      }
    },
    [ndaAccepted, ndaSectionIndex],
  );

  return (
    <div className="relative h-dvh overflow-hidden">
      <GradientBackground gradient={activeBackground} />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 -z-10" />

      <main
        className="deck-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-pb-6 scroll-pt-[max(2.5rem,env(safe-area-inset-top))]"
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        aria-label="Portfolio deck sections"
        aria-describedby="deck-lock-status"
        tabIndex={0}
      >
        {sections.map((section) => (
          <Fragment key={section.id}>{section.render({ ndaAccepted, acceptNda })}</Fragment>
        ))}
      </main>

      <div className="pointer-events-none absolute inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30">
        <p id="deck-lock-status" className="mb-2 text-xs text-zinc-300" aria-live="polite">
          {ndaAccepted || ndaSectionIndex === -1
            ? 'NDA accepted. All sections are available.'
            : 'Deck is locked. Complete the NDA section and check the agreement box to unlock the remaining sections.'}
        </p>
        <div className="h-2 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900/90 backdrop-blur">
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-fuchsia-400 via-violet-400 to-cyan-300"
            animate={{ width: progressWidth }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: motionTokens.fast, ease: motionTokens.easing }
            }
          />
        </div>
        <div className="mt-2 flex gap-1.5" role="presentation">
          {sections.map((section, index) => (
            <span
              key={section.id}
              className={cn(
                'h-1 flex-1 rounded-full',
                index <= activeIndex ? 'bg-cyan-300/80' : 'bg-zinc-700/70',
              )}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}

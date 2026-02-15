'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { RevenueEngineContent } from '@/app/data/deck';
import { motionTokens } from '@/app/lib/motion';

const logoByCompany: Record<string, { src: string; alt: string }> = {
  SMS: { src: '/Grey.avif', alt: 'SMS logo' },
  'The Bosque Ltd': { src: '/Artboard 3.png', alt: 'The Bosque Ltd logo' },
  'Next Gen Management': { src: '/main-logo.png', alt: 'Next Gen logo' },
  'Digital Herencia': {
    src: '/branding/digitalherencia.svg',
    alt: 'Digital Herencia logo',
  },
};

export function RevenueEngine({ content }: { content: RevenueEngineContent }) {
  const [selectedView, setSelectedView] = useState(content.views[0].label);
  const reducedMotion = useReducedMotion();
  const activeView = content.views.find((view) => view.label === selectedView) ?? content.views[0];
  const activeIndex = content.views.findIndex((view) => view.label === activeView.label);

  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">{content.title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-zinc-300">{content.subtitle}</p>

      <div
        className="mt-5 flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Company slides"
      >
        {content.views.map((view) => {
          const isActive = selectedView === view.label;
          return (
            <button
              key={view.label}
              id={`view-${view.label}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="vertical-infographic"
              onClick={() => setSelectedView(view.label)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                isActive
                  ? 'border-cyan-300/80 bg-cyan-300/20 text-cyan-100'
                  : 'border-zinc-700 bg-zinc-950/40 text-zinc-200 hover:border-cyan-300/50'
              }`}
            >
              {view.label}
            </button>
          );
        })}
        <span className="ml-auto text-xs uppercase tracking-wide text-zinc-400">
          Slide {activeIndex + 1} of {content.views.length}
        </span>
      </div>

      <motion.div
        key={activeView.label}
        id="vertical-infographic"
        role="tabpanel"
        aria-live="polite"
        initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: motionTokens.fast, ease: motionTokens.easing }
        }
        className="mt-5 overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900/80"
      >
        <div className="flex flex-col gap-4 border-b border-zinc-800 bg-zinc-900/50 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-cyan-200">{activeView.companyName}</h3>
            <p className="mt-1 text-xs text-zinc-400">
              Customers → economics → money flow mapped across four operating stages.
            </p>
          </div>
          {logoByCompany[activeView.companyName] ? (
            <div className="relative h-14 w-36 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 p-1">
              <Image
                src={logoByCompany[activeView.companyName].src}
                alt={logoByCompany[activeView.companyName].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ) : null}
        </div>

        <div className="grid gap-4 p-5 lg:grid-cols-4">
          {activeView.table.map((row, index) => (
            <article
              key={row.step}
              className="relative rounded-2xl border border-zinc-700 bg-zinc-950/70 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100">
                  Stage {index + 1}
                </span>
                {index < activeView.table.length - 1 ? (
                  <span className="hidden text-cyan-200 lg:inline" aria-hidden="true">
                    ➜
                  </span>
                ) : null}
              </div>
              <h4 className="text-base font-semibold text-zinc-100">{row.step}</h4>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-fuchsia-200">Customer</dt>
                  <dd className="mt-1 text-zinc-300">{row.customer}</dd>
                </div>
                <div>
                  <dt className="font-medium text-amber-200">Economics</dt>
                  <dd className="mt-1 text-zinc-300">{row.economics}</dd>
                </div>
                <div>
                  <dt className="font-medium text-emerald-200">Money flow</dt>
                  <dd className="mt-1 text-zinc-300">{row.moneyFlow}</dd>
                </div>
                <div>
                  <dt className="font-medium text-cyan-200">Your contribution</dt>
                  <dd className="mt-1 text-zinc-100">{row.userContribution}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

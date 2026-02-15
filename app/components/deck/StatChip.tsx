'use client';

import { animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatChipProps {
  label: string;
  value: number;
  suffix?: string;
}

export function StatChip({ label, value, suffix = '' }: StatChipProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 0.8,
      ease: 'easeOut',
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });

    return () => controls.stop();
  }, [value]);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 backdrop-blur">
      <div className="text-2xl font-semibold text-[var(--accent)]">
        {current}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-zinc-300">{label}</div>
    </div>
  );
}

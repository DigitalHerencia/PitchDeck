'use client';

import { motion } from 'framer-motion';
import { AnimatedHeading } from '@/app/components/deck/AnimatedHeading';

interface ProofContent {
  title: string;
  projects: { name: string; outcome: string; source: string }[];
}

export function ProofWall({ content }: { content: ProofContent }) {
  return (
    <div>
      <AnimatedHeading eyebrow="Proof" title={content.title} />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {content.projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
          >
            <h3 className="text-lg font-medium text-zinc-100">{project.name}</h3>
            <p className="mt-2 text-sm text-zinc-300">{project.outcome}</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-zinc-500">{project.source}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

import { AnimatedHeading } from '@/app/components/deck/AnimatedHeading';
import type { RoleContent } from '@/app/data/deck';

export function RoleBreakdown({ role }: { role: RoleContent }) {
  return (
    <div className="grid gap-4">
      <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
        <AnimatedHeading eyebrow="Roles" title={role.title} subtitle={role.subtitle} />

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {role.verticalContributions.map((entry) => (
            <article
              key={entry.vertical}
              className="rounded-xl border border-zinc-700/80 bg-zinc-900/70 p-4"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">{entry.vertical}</p>
              <p className="mt-2 text-sm font-medium text-zinc-100">{entry.primaryRole}</p>
              <div className="mt-3 grid gap-2">
                {entry.ownership.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-zinc-700/80 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
                <div className="rounded-lg border border-fuchsia-400/40 bg-fuchsia-950/20 px-3 py-2 text-sm text-fuchsia-200">
                  {entry.handoff}
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-5 text-xs uppercase tracking-[0.2em] text-fuchsia-300">
          Core skills across all verticals
        </h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {role.closingSkills.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-zinc-700/80 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-200"
            >
              {item}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

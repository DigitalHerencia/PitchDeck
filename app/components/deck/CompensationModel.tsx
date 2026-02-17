import { AnimatedHeading } from '@/app/components/deck/AnimatedHeading';
import type { CompensationModelContent } from '@/app/data/deck';

export function CompensationModel({ content }: { content: CompensationModelContent }) {
  const hasTiers = content.tiers.length > 0;

  return (
    <div>
      <AnimatedHeading eyebrow="Compensation" title={content.title} subtitle={content.subtitle} />

      {hasTiers ? (
        <div className="mt-5 grid gap-4 xl:grid-cols-3">
          {content.tiers.map((tier) => (
            <article
              key={tier.tier}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
            >
              <h3 className="text-base font-semibold text-cyan-100">{tier.tier}</h3>
              <p className="mt-2 text-xs leading-5 text-fuchsia-200">{tier.equityBand}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-300">{tier.revenueBand}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-300">Promotion gate: {tier.promotionGate}</p>

              <div className="mt-4 space-y-3">
                {tier.roles.map((role) => (
                  <section
                    key={role.role}
                    className="rounded-xl border border-zinc-700/70 bg-zinc-900/60 p-3"
                  >
                    <h4 className="text-sm font-medium text-zinc-100">{role.role}</h4>
                    <dl className="mt-3 grid gap-2 text-xs text-zinc-200">
                      <div className="rounded-lg border border-zinc-700/70 bg-zinc-900/80 p-2">
                        <dt className="text-zinc-400">Base</dt>
                        <dd className="mt-1 text-zinc-100">{role.base}</dd>
                      </div>
                      <div className="rounded-lg border border-zinc-700/70 bg-zinc-900/80 p-2">
                        <dt className="text-zinc-400">Variable</dt>
                        <dd className="mt-1 leading-5 text-zinc-100">{role.variable}</dd>
                      </div>
                      <div className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-2">
                        <dt className="text-zinc-300">OTE range</dt>
                        <dd className="mt-1 font-medium text-cyan-100">{role.totalRange}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 text-xs leading-5 text-zinc-300">Outcome gate: {role.outcomeGate}</p>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <article className="mt-5 rounded-2xl border border-amber-300/30 bg-amber-400/10 p-4 text-sm text-amber-100">
          Compensation tiers are missing. Add entries in <code>deckContent.compensationModel.tiers</code>.
        </article>
      )}

      <aside className="mt-4 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-500/10 p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-100">
          Compensation controls
        </h3>
        <ul className="mt-3 space-y-1 text-xs text-zinc-300">
          {content.disclaimers.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

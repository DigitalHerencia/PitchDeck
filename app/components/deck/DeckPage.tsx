'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { AnimatedHeading } from '@/app/components/deck/AnimatedHeading';
import { DeckShell } from '@/app/components/deck/DeckShell';
import { FunnelSection } from '@/app/components/deck/FunnelSection';
import { RoleBreakdown } from '@/app/components/deck/RoleBreakdown';
import { RevenueEngine } from '@/app/components/deck/RevenueEngine';
import { Section } from '@/app/components/deck/Section';
import type { DeckSectionId, NdaContent, OfferExplanationContent } from '@/app/data/deck';
import { deckContent } from '@/app/data/deck';

const CompensationModel = dynamic(
  () => import('@/app/components/deck/CompensationModel').then((mod) => mod.CompensationModel),
  {
    loading: () => <div className="h-40 animate-pulse rounded-2xl bg-zinc-900/60" />,
  },
);

function NdaSection({
  content,
  id,
  ndaAccepted,
  acceptNda,
}: {
  content: NdaContent;
  id: string;
  ndaAccepted: boolean;
  acceptNda: () => void;
}) {
  return (
    <Section id={id} key={id}>
      <AnimatedHeading title={content.title} subtitle={content.subtitle} />
      <div className="mt-5 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 text-sm leading-6 text-zinc-200">
        {content.statement.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-zinc-700 bg-zinc-950/60 p-4">
        <p className="text-sm text-zinc-200" id="nda-gate-description">
          {ndaAccepted
            ? 'NDA agreement confirmed. Remaining sections are now available.'
            : 'You must accept the NDA agreement checkbox before moving to the rest of the deck.'}
        </p>
        <label className="mt-3 flex items-start gap-3 rounded-xl border border-zinc-700 bg-zinc-900/60 p-3 text-sm text-zinc-100">
          <input
            type="checkbox"
            checked={ndaAccepted}
            onChange={(event) => {
              if (event.target.checked) {
                acceptNda();
              }
            }}
            disabled={ndaAccepted}
            aria-describedby="nda-gate-description"
            className="mt-0.5 h-4 w-4 rounded border-zinc-500 bg-zinc-900 text-[var(--accent)] focus:ring-cyan-300 disabled:cursor-not-allowed"
          />
          <span>{content.acknowledgmentLabel}</span>
        </label>
      </div>
    </Section>
  );
}

function OfferExplanationSection({
  content,
  id,
}: {
  content: OfferExplanationContent;
  id: string;
}) {
  return (
    <Section id={id} key={id}>
      <AnimatedHeading title={content.title} subtitle={content.subtitle} />
      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-900/90 text-zinc-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Offer area</th>
              <th className="px-4 py-3 font-semibold">Summary terms</th>
            </tr>
          </thead>
          <tbody>
            {content.terms.map((term) => (
              <tr key={term.category} className="border-t border-zinc-800 text-zinc-300">
                <td className="px-4 py-3 align-top font-medium text-cyan-200">{term.category}</td>
                <td className="px-4 py-3">{term.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 rounded-2xl border border-fuchsia-300/40 bg-fuchsia-300/5 p-4 text-zinc-100">
        {content.ctaLabel}
      </div>
    </Section>
  );
}

export function DeckPage() {
  const sections = [
    {
      id: 'nda',
      label: 'NDA',
      render: ({ ndaAccepted, acceptNda }: { ndaAccepted: boolean; acceptNda: () => void }) => (
        <NdaSection
          id="nda"
          content={deckContent.nda}
          ndaAccepted={ndaAccepted}
          acceptNda={acceptNda}
        />
      ),
    },
    {
      id: 'hero',
      label: 'Home',
      render: () => (
        <Section id="hero" key="hero">
          <AnimatedHeading
            eyebrow={deckContent.hero.eyebrow}
            title={deckContent.hero.title}
            subtitle={deckContent.hero.subtitle}
            level="h1"
          />
          <div className="mt-6 grid gap-3">
            {deckContent.hero.valueProps.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-zinc-100"
              >
                {item}
              </article>
            ))}
          </div>
        </Section>
      ),
    },
    {
      id: 'proof-first',
      label: 'Proof',
      render: () => (
        <Section id="proof-first" key="proof-first">
          <AnimatedHeading title={deckContent.proofFirst.title} />
          <div className="mt-5">
            <div className="grid gap-3">
              {deckContent.proofFirst.statements.map((statement) => (
                <article
                  key={statement}
                  className="rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-4 text-zinc-100"
                >
                  {statement}
                </article>
              ))}
            </div>
            {deckContent.proofFirst.image && deckContent.proofFirst.imageAlt ? (
              <div className="relative mt-4 min-h-56 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950/70">
                <Image
                  src={deckContent.proofFirst.image}
                  alt={deckContent.proofFirst.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </Section>
      ),
    },
    {
      id: 'brand-positioning',
      label: 'Model',
      render: () => (
        <Section id="brand-positioning" key="brand-positioning">
          <AnimatedHeading title={deckContent.brandPositioning.title} />
          <div className="mt-5 space-y-3">
            {deckContent.brandPositioning.statements.map((statement) => (
              <article
                key={statement}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-zinc-200"
              >
                {statement}
              </article>
            ))}
          </div>
        </Section>
      ),
    },
    {
      id: 'brand-assets',
      label: 'Logos',
      render: () => (
        <Section id="brand-assets" key="brand-assets">
          <AnimatedHeading
            title={deckContent.brandAssets.title}
            subtitle={deckContent.brandAssets.subtitle}
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {deckContent.brandAssets.entities.map((entity) => (
              <article
                key={entity.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
              >
                <div className="relative h-52 w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
                  <Image
                    src={entity.screenshot}
                    alt={entity.name}
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-cyan-200">{entity.name}</h3>
                <p className="mt-2 text-sm text-zinc-300">{entity.focus}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <Link
                    className="text-zinc-300 underline underline-offset-2"
                    href={entity.liveSite}
                    target="_blank"
                  >
                    Website
                  </Link>
                  {entity.repository ? (
                    <Link
                      className="text-fuchsia-200 underline underline-offset-2"
                      href={entity.repository}
                      target="_blank"
                    >
                      Github
                    </Link>
                  ) : null}
                  {entity.socialLinks.map((link) => (
                    <Link
                      key={link.href}
                      className="text-zinc-300 underline underline-offset-2"
                      href={link.href}
                      target="_blank"
                    >
                      {link.platform}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
      ),
    },
    {
      id: 'revenue-engine',
      label: 'Customers',
      render: () => (
        <Section id="revenue-engine" key="revenue-engine">
          <RevenueEngine content={deckContent.revenueEngine} />
        </Section>
      ),
    },
    {
      id: 'funnel-model',
      label: 'Roles',
      render: () => (
        <Section id="funnel-model" key="funnel-model">
          <FunnelSection content={deckContent.funnelModel} />
        </Section>
      ),
    },
    {
      id: 'market-penetration',
      label: 'Measure',
      render: () => (
        <Section id="market-penetration" key="market-penetration">
          <AnimatedHeading title={deckContent.marketPenetration.title} />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {deckContent.marketPenetration.bullets.map((outcome, index) => (
              <article
                key={outcome}
                className="rounded-xl border border-zinc-700/80 bg-zinc-950/60 p-4"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                  Outcome scorecard
                </p>
                <p className="mt-2 text-sm text-zinc-100">{outcome}</p>
                {deckContent.marketPenetration.leadSignals[index] ? (
                  <p className="mt-3 border-t border-zinc-700 pt-3 text-xs text-cyan-200">
                    Decision rule: {deckContent.marketPenetration.leadSignals[index]}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          {deckContent.marketPenetration.diagram ? (
            <article className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <div className="relative h-52 w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
                <Image
                  src={deckContent.marketPenetration.diagram.imagePath}
                  alt={deckContent.marketPenetration.diagram.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="mt-3 text-sm text-zinc-300">
                {deckContent.marketPenetration.diagram.description}
              </p>
            </article>
          ) : null}
        </Section>
      ),
    },
    {
      id: 'role',
      label: 'Impact',
      render: () => (
        <Section id="role" key="role">
          <RoleBreakdown
            role={deckContent.role}
            responsibilitiesKpis={deckContent.responsibilitiesKpis}
          />
        </Section>
      ),
    },
    {
      id: 'responsibilities-kpis',
      label: 'KPIs',
      render: () => (
        <Section id="responsibilities-kpis" key="responsibilities-kpis">
          <AnimatedHeading title="Weekly scorecard" />
          <div className="mt-5 space-y-4">
            {deckContent.responsibilitiesKpis.scorecard.map((metric) => (
              <article
                key={metric.kpi}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-zinc-400">
                  <span>{metric.company}</span>
                  <span>•</span>
                  <span>{metric.role}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{metric.kpi}</p>
                <p className="mt-1 text-base font-semibold text-fuchsia-200">{metric.objective}</p>
                <p className="mt-2 text-xs text-zinc-400">Benchmark: {metric.benchmarkContext}</p>
                <div className="mt-4 grid gap-3 lg:grid-cols-3">
                  {metric.tiers.map((tier) => (
                    <div
                      key={tier.level}
                      className="rounded-lg border border-zinc-700/80 bg-zinc-900/70 p-3"
                    >
                      <p className="text-sm font-semibold text-zinc-100">{tier.level}</p>
                      <p className="mt-1 text-xs text-zinc-300">
                        {tier.effort} · {tier.timeCommitment}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                        Metrics
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-zinc-200">
                        {tier.metrics.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                        Checklist
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-zinc-200">
                        {tier.checklist.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
      ),
    },
    {
      id: 'compensation-model',
      label: 'Comp',
      render: () => (
        <Section id="compensation-model" key="compensation-model">
          <CompensationModel content={deckContent.compensationModel} />
        </Section>
      ),
    },
    {
      id: 'offer',
      label: 'Offer',
      render: () => <OfferExplanationSection id="offer" content={deckContent.offer} />,
    },
    {
      id: 'close',
      label: 'Thanks',
      render: () => (
        <Section id="close" key="close" className="text-center">
          <AnimatedHeading
            title="Thank you for reviewing this offer overview"
            subtitle="If this aligns with your goals, please reach out and we can schedule a discussion to review fit, timeline, and onboarding readiness."
            className="mx-auto max-w-3xl"
          />
          <div className="mx-auto mt-7 grid max-w-5xl gap-4 text-left lg:grid-cols-2">
            {deckContent.brandAssets.entities.map((entity) => (
              <article
                key={entity.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
              >
                <h3 className="text-lg font-semibold text-cyan-200">{entity.name}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  <Link
                    className="text-zinc-100 underline underline-offset-2"
                    href={entity.liveSite}
                    target="_blank"
                  >
                    Website
                  </Link>
                  {entity.repository ? (
                    <Link
                      className="text-fuchsia-200 underline underline-offset-2"
                      href={entity.repository}
                      target="_blank"
                    >
                      Github
                    </Link>
                  ) : null}
                  {entity.socialLinks.map((link) => (
                    <Link
                      key={link.href}
                      className="text-zinc-300 underline underline-offset-2"
                      href={link.href}
                      target="_blank"
                    >
                      {link.platform}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
      ),
    },
  ] satisfies {
    id: DeckSectionId | 'close';
    label: string;
    render: (args: { ndaAccepted: boolean; acceptNda: () => void }) => React.ReactNode;
  }[];

  return <DeckShell sections={sections} />;
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { AnimatedHeading } from '@/app/components/deck/AnimatedHeading';
import { DeckShell } from '@/app/components/deck/DeckShell';
import { FunnelSection } from '@/app/components/deck/FunnelSection';
import { RoleBreakdown } from '@/app/components/deck/RoleBreakdown';
import { RevenueEngine } from '@/app/components/deck/RevenueEngine';
import { SectionCard } from '@/app/components/deck/SectionCard';
import { Section } from '@/app/components/deck/Section';
import type { DeckSectionId, NdaContent, OfferExplanationContent } from '@/app/data/deck';
import { deckContent } from '@/app/data/deck';

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
      <SectionCard>
        <AnimatedHeading eyebrow="NDA" title={content.title} subtitle={content.subtitle} />
        <div className="mt-5 space-y-4 rounded-2xl border border-zinc-700/80 bg-zinc-900/70 p-5 text-sm leading-6 text-zinc-200">
          {content.statement.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-zinc-700/80 bg-zinc-900/70 p-4">
          <p className="text-sm text-zinc-200" id="nda-gate-description">
            {ndaAccepted
              ? 'NDA agreement confirmed. Remaining sections are now available.'
              : 'You must accept the NDA agreement checkbox before moving to the rest of the deck.'}
          </p>
          <label className="mt-3 flex items-start gap-3 rounded-xl bg-zinc-900/70 p-3 text-sm text-zinc-100">
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
      </SectionCard>
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
  const hasTerms = content.terms.length > 0;

  return (
    <Section id={id} key={id} className="items-start pb-32">
      <SectionCard>
        <AnimatedHeading eyebrow="Offer" title={content.title} subtitle={content.subtitle} />
        {hasTerms ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.terms.map((term, index) => (
              <article key={term.category} className="rounded-2xl bg-zinc-900/75 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                  Term {index + 1}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-cyan-200">{term.category}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{term.details}</p>
              </article>
            ))}
          </div>
        ) : (
          <article className="mt-6 rounded-2xl border border-amber-300/30 bg-amber-400/10 p-4 text-sm text-amber-100">
            Offer terms are missing. Add entries in <code>deckContent.offer.terms</code>.
          </article>
        )}
      </SectionCard>
    </Section>
  );
}

function ClosingSection({ id }: { id: string }) {
  return (
    <Section id={id} key={id} className="items-start pb-32">
      <SectionCard className="sm:p-10">
        <AnimatedHeading
          eyebrow="Closing"
          title="Thank You For Reviewing The Pitch"
          subtitle="This pitch shows one revenue system across four brands: validated execution, clear role ownership, cash-first operating models, and practical controls for scalable growth."
          className="relative max-w-3xl"
          level="h1"
        />

        <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
          <article className="rounded-2xl bg-zinc-900/75 p-4 text-sm text-zinc-200">
            Real operations, not theory.
          </article>
          <article className="rounded-2xl bg-zinc-900/75 p-4 text-sm text-zinc-200">
            Pay tied to collected outcomes.
          </article>
          <article className="rounded-2xl bg-zinc-900/75 p-4 text-sm text-zinc-200">
            Growth driven by people, routes, and deals.
          </article>
        </div>

        <div className="relative mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Call To Action</p>
          <p className="mt-2 text-sm text-zinc-100">
            Reach out for details or schedule a short meeting to confirm fit, align on scope, and
            set a concrete launch plan.
          </p>
        </div>

        <div className="relative mt-7 rounded-2xl bg-zinc-950/70 p-5">
          <p className="text-center text-xs uppercase tracking-[0.16em] text-zinc-400">Connect</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center rounded-full p-2 text-zinc-100 transition hover:text-cyan-100"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/thebosqueltd/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-full p-2 text-zinc-100 transition hover:text-fuchsia-100"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:digitalherencia@outlook.com"
              aria-label="Email"
              className="inline-flex items-center justify-center rounded-full p-2 text-zinc-100 transition hover:text-emerald-100"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionCard>
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
          <SectionCard className="sm:p-10">
            <p className="relative text-xs uppercase tracking-[0.24em] text-cyan-300/90">
              {deckContent.hero.eyebrow}
            </p>
            <h1 className="relative mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-5xl">
              {deckContent.hero.title}
            </h1>
            <p className="relative mt-4 max-w-3xl text-base text-zinc-200 sm:text-lg">
              {deckContent.hero.subtitle}
            </p>

            <div className="relative mt-7 flex flex-wrap gap-2">
              {deckContent.brandAssets.entities.map((entity) => (
                <span
                  key={entity.name}
                  className="rounded-full border border-zinc-600/80 bg-zinc-900/80 px-3 py-1 text-xs uppercase tracking-[0.12em] text-zinc-200"
                >
                  {entity.name}
                </span>
              ))}
            </div>

            {deckContent.hero.valueProps.length > 0 ? (
              <div className="relative mt-8 grid gap-3 md:grid-cols-3">
                {deckContent.hero.valueProps.map((item) => (
                  <article
                    key={item}
                    className="rounded-2xl border border-zinc-700/80 bg-zinc-900/75 p-4 text-sm text-zinc-100"
                  >
                    {item}
                  </article>
                ))}
              </div>
            ) : null}
          </SectionCard>
        </Section>
      ),
    },
    {
      id: 'proof-first',
      label: 'Proof',
      render: () => (
        <Section id="proof-first" key="proof-first">
          <SectionCard>
            <AnimatedHeading
              eyebrow="Proof"
              title={deckContent.proofFirst.title}
              subtitle={deckContent.proofFirst.subtitle}
              className="relative"
            />

            <div className="relative mt-6 space-y-4">
              <div className="grid gap-3 lg:grid-cols-2">
                {deckContent.proofFirst.statements.map((statement) => {
                  const [company, ...rest] = statement.split(':');
                  const details = rest.join(':').trim() || statement;

                  return (
                    <article
                      key={statement}
                      className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-linear-to-br from-zinc-950/90 via-zinc-900/75 to-zinc-950/90 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl"
                      />
                      <div className="relative flex items-center justify-between gap-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-fuchsia-200">
                          {company.trim()}
                        </p>
                      </div>
                      <p className="relative mt-3 text-sm leading-6 text-zinc-200">{details}</p>
                    </article>
                  );
                })}
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
          </SectionCard>
        </Section>
      ),
    },
    {
      id: 'brand-positioning',
      label: 'Model',
      render: () => (
        <Section id="brand-positioning" key="brand-positioning">
          <SectionCard>
            <AnimatedHeading
              eyebrow="Model"
              title={deckContent.brandPositioning.title}
              subtitle="Each line shows where cash is created and what gets optimized to expand."
              className="relative"
            />

            <div className="relative mt-6 grid gap-3 lg:grid-cols-2">
              {deckContent.brandPositioning.statements.map((statement) => {
                const [company, ...rest] = statement.split(':');
                const details = rest.join(':').trim() || statement;

                return (
                  <article
                    key={statement}
                    className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-linear-to-br from-zinc-950/90 via-zinc-900/75 to-zinc-950/90 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl"
                    />
                    <p className="relative text-xs uppercase tracking-[0.16em] text-fuchsia-200">
                      {company.trim()}
                    </p>
                    <p className="relative mt-3 text-sm leading-6 text-zinc-200">{details}</p>
                  </article>
                );
              })}
            </div>
          </SectionCard>
        </Section>
      ),
    },
    {
      id: 'brand-assets',
      label: 'Brands',
      render: () => (
        <Section id="brand-assets" key="brand-assets">
          <SectionCard>
            <AnimatedHeading
              eyebrow="Brands"
              title={deckContent.brandAssets.title}
              subtitle={deckContent.brandAssets.subtitle}
            />
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {deckContent.brandAssets.entities.map((entity) => (
                <article
                  key={entity.name}
                  className="rounded-2xl border border-zinc-700/80 bg-zinc-900/75 p-4"
                >
                  <div className="relative h-52 w-full overflow-hidden rounded-xl bg-zinc-900">
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
                    {entity.name !== 'Southwest Media Services' ? (
                      <Link
                        className="text-zinc-300 underline underline-offset-2"
                        href={entity.liveSite}
                        target="_blank"
                      >
                        Website
                      </Link>
                    ) : null}
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
          </SectionCard>
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
      label: 'Execution',
      render: () => (
        <Section id="funnel-model" key="funnel-model">
          <FunnelSection content={deckContent.funnelModel} />
        </Section>
      ),
    },
    {
      id: 'role',
      label: 'Roles',
      render: () => (
        <Section id="role" key="role">
          <RoleBreakdown role={deckContent.role} />
        </Section>
      ),
    },
    {
      id: 'market-penetration',
      label: 'Controls',
      render: () => (
        <Section id="market-penetration" key="market-penetration">
          <SectionCard>
            <AnimatedHeading eyebrow="Controls" title={deckContent.marketPenetration.title} />
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {deckContent.marketPenetration.bullets.map((outcome, index) => (
                <article key={outcome} className="rounded-2xl bg-zinc-900/75 p-4">
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
              <article className="mt-5 rounded-2xl bg-zinc-900/75 p-4">
                <div className="relative h-52 w-full overflow-hidden rounded-xl bg-zinc-900">
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
          </SectionCard>
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
      label: 'Close',
      render: () => <ClosingSection id="close" />,
    },
  ] satisfies {
    id: DeckSectionId | 'close';
    label: string;
    render: (args: { ndaAccepted: boolean; acceptNda: () => void }) => React.ReactNode;
  }[];

  return <DeckShell sections={sections} />;
}

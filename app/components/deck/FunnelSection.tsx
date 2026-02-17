'use client';

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedHeading } from '@/app/components/deck/AnimatedHeading';
import type { CompanyRoleModel, FunnelModelContent } from '@/app/data/deck';
import { motionTokens } from '@/app/lib/motion';

export function FunnelSection({ content }: { content: FunnelModelContent }) {
  const [activeCompany, setActiveCompany] = useState(content.companies[0].company);
  const [activeRole, setActiveRole] = useState(content.companies[0].roles[0].role);
  const reducedMotion = useReducedMotion();

  const selectedCompany = useMemo(
    () =>
      content.companies.find((company) => company.company === activeCompany) ??
      content.companies[0],
    [activeCompany, content.companies],
  );

  const selectedRole = useMemo<CompanyRoleModel>(
    () =>
      selectedCompany.roles.find((role) => role.role === activeRole) ?? selectedCompany.roles[0],
    [activeRole, selectedCompany.roles],
  );
  const activeCompanyIndex = content.companies.findIndex(
    (company) => company.company === selectedCompany.company,
  );

  return (
    <div>
      <AnimatedHeading eyebrow="Execution" title={content.title} subtitle={content.subtitle} />

      <div className="mt-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-3">
        <div className="flex justify-center" role="tablist" aria-label="Company execution views">
          <div className="flex flex-wrap justify-center gap-2">
            {content.companies.map((company) => {
              const isActive = company.company === selectedCompany.company;

              return (
                <button
                  key={company.company}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`company-panel-${company.company}`}
                  onClick={() => {
                    setActiveCompany(company.company);
                    setActiveRole(company.roles[0].role);
                  }}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                    isActive
                      ? 'border-cyan-300/80 bg-cyan-300/20 text-cyan-100'
                      : 'border-zinc-700 bg-zinc-950/40 text-zinc-200 hover:border-cyan-300/50'
                  }`}
                >
                  {company.company}
                </button>
              );
            })}
          </div>
        </div>
        <p className="mt-2 text-center text-xs uppercase tracking-wide text-zinc-400">
          View {activeCompanyIndex + 1} of {content.companies.length}
        </p>
      </div>

      <article
        id={`company-panel-${selectedCompany.company}`}
        role="tabpanel"
        className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
      >
        <p className="text-sm text-cyan-200">Operating focus</p>
        <p className="mt-1 text-sm text-zinc-200">{selectedCompany.operatingFocus}</p>

        <div className="mt-4 rounded-xl border border-zinc-700/80 bg-zinc-900/50 p-3">
          <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Role View</p>
          <div className="mt-2 flex flex-wrap gap-2" role="tablist" aria-label="Role execution views">
            {selectedCompany.roles.map((role) => {
              const isRoleActive = role.role === selectedRole.role;

              return (
                <button
                  key={role.role}
                  type="button"
                  role="tab"
                  aria-selected={isRoleActive}
                  onClick={() => setActiveRole(role.role)}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                    isRoleActive
                      ? 'border-cyan-300/80 bg-cyan-300/20 text-cyan-100'
                      : 'border-zinc-700 bg-zinc-950/40 text-zinc-200 hover:border-cyan-300/50'
                  }`}
                >
                  {role.role}
                </button>
              );
            })}
          </div>
        </div>
      </article>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr,1.05fr]">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
          <p className="text-sm text-fuchsia-200">Role objective</p>
          <p className="mt-1 text-sm text-zinc-100">{selectedRole.objective}</p>

          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-zinc-400">Execution KPIs</p>

          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {selectedRole.kpis.map((kpi) => (
              <div
                key={kpi}
                className="rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100"
              >
                {kpi}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h3 className="text-sm font-medium text-zinc-100">Daily execution sequence</h3>
          <div className="mt-3 grid gap-3">
            {selectedRole.executionPath.map((step, index) => (
              <motion.article
                key={`${step.stage}-${step.owner}`}
                initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : {
                        duration: motionTokens.fast,
                        delay: index * 0.04,
                        ease: motionTokens.easing,
                      }
                }
                className="rounded-xl border border-zinc-700 bg-zinc-900/70 p-3"
              >
                <div className="grid gap-2 sm:grid-cols-[auto,1fr] sm:items-start">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                    {step.stage}
                  </p>
                  <div className="grid gap-1">
                    <p className="text-xs text-zinc-400">{step.owner}</p>
                    <p className="text-sm text-zinc-300">{step.executionDetail}</p>
                    <p className="text-xs text-fuchsia-200">Success: {step.successSignal}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

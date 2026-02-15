import type { DeckModel } from './types';

export const bosqueDeck: DeckModel = {
  brand: {
    name: 'Bosque Ltd',
    tagline: 'Regulated logistics execution in high-friction transport markets.',
    links: [],
  },
  themeHint: {
    vibeKeywords: ['operations-first', 'compliance', 'dispatch reliability', 'deal flow'],
    accentGuidance:
      'Use grounded, industrial accents with high-contrast labels for routes, invoices, and compliance proof.',
  },
  sections: [
    {
      id: 'bosque-hero',
      type: 'hero',
      headline: 'Bosque runs real-world transport operations, not speculative software.',
      subhead: 'Positioned around regulated access, dispatch know-how, and contract execution.',
      bullets: [
        'Cannabis transportation, delivery, recruiting, sales, and account management are explicitly referenced in local context.',
        'Expansion vector is people + routes + contracts.',
      ],
      stats: [],
      diagrams: [],
      cta: 'Load Bosque source PDFs to unlock validated metrics slide.',
      roleBlocks: [
        {
          role: 'Executive Account Manager',
          responsibilities: [
            'Prospect operators',
            'Scope route requirements',
            'Close and expand contracts',
          ],
          kpis: [
            'Qualified operator opportunities/week: prospects with verified license fit, route demand, and buying authority.',
            'Contract close rate: percentage of scoped opportunities converted to signed transport agreements.',
            'First-invoice cycle time: days from signed contract to first collected invoice.',
            'Account expansion rate: percentage of active operators adding routes or service windows.',
          ],
        },
        {
          role: 'Recruiter',
          responsibilities: [
            'Source drivers/operators',
            'Validate compliance readiness',
            'Support route staffing',
          ],
          kpis: [
            'Compliance-ready candidate yield: candidates who pass licensing/document checks and route readiness screening.',
            'Time-to-fill critical routes: days required to staff open shifts on priority lanes.',
            '30-day route retention: percentage of placed operators still active after first month.',
          ],
        },
        {
          role: 'Management',
          responsibilities: [
            'Run dispatch quality controls',
            'Protect service reliability',
            'Improve delivery economics',
          ],
          kpis: [
            'On-time execution rate: completed pickups/drop-offs within contracted window.',
            'Incident-free completion rate: completed moves without compliance, safety, or chain-of-custody exceptions.',
            'Gross margin per route cycle: collected route revenue minus direct route operating cost.',
          ],
        },
      ],
      compensationBlocks: [],
      proofBlocks: [
        {
          claim: 'Bosque is a real-world operations business in cannabis transportation/delivery.',
          sourceRef: 'Agents.md#Bosque Ltd',
          confidence: 'Med',
        },
      ],
      assetRefs: ['app/assets/bosque/'],
    },
  ],
  placeholders: [
    '[INSERT LEADS]',
    '[INSERT CLIENT LIST]',
    '[INSERT CASE METRICS]',
    '[INSERT COLLECTED REVENUE MILESTONE]',
  ],
};

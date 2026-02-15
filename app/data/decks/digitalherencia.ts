import type { DeckModel } from './types';

export const digitalHerenciaDeck: DeckModel = {
  brand: {
    name: 'DigitalHerencia LLC',
    tagline: 'Revenue enablement systems for SMB operators.',
    links: [],
  },
  themeHint: {
    vibeKeywords: ['modern', 'sales-first', 'systems', 'execution'],
    accentGuidance:
      'Use clean growth-oriented accents with visual emphasis on pipeline and conversion flow.',
  },
  sections: [
    {
      id: 'dh-positioning',
      type: 'solution',
      headline: 'Sell revenue capability first, software second.',
      subhead: 'The business is framed as a repeatable production engine, not a one-off dev shop.',
      bullets: [
        'Positioning centers on lead generation and revenue enablement.',
        'Internal development and automation capabilities support delivery repeatability.',
      ],
      stats: [],
      diagrams: [
        {
          label: 'Lead-to-retainer flow',
          steps: ['Lead', 'Discovery', 'Close', 'Deliver', 'Retainer/Expansion'],
        },
      ],
      cta: 'Add source pricing docs to convert placeholders to source-defined commercial slides.',
      roleBlocks: [
        {
          role: 'Executive Account Manager',
          responsibilities: ['Lead generation', 'Discovery + close', 'Retention + expansion'],
          kpis: [
            'Qualified pipeline value/week: dollar value of ICP-fit accounts that complete discovery and meet buying criteria.',
            'Proposal-to-close rate: percentage of issued proposals that convert to signed contracts.',
            'Time-to-first-value: days from signature to first delivered milestone accepted by client.',
            '90-day gross revenue retention: retained monthly recurring revenue from accounts closed by the role.',
            'Expansion conversion: percentage of retained accounts that purchase additional scope within the quarter.',
          ],
        },
      ],
      compensationBlocks: [
        {
          role: 'Executive Account Manager',
          newLever: '20% of first contract value (collected).',
          retentionLever: '15% of monthly retainer for first 6 months, then 5% ongoing.',
          expansionLever: '10% of expansion contracts (collected).',
          equityNote: 'Eligible after [INSERT CLOSED REVENUE THRESHOLD].',
          sourceDefined: false,
        },
      ],
      proofBlocks: [
        {
          claim:
            'Digital Herencia positioning emphasizes revenue enablement and repeatable delivery.',
          sourceRef: 'Agents.md#Digital Herencia LLC',
          confidence: 'Med',
        },
      ],
      assetRefs: ['app/assets/digitalherencia/'],
    },
  ],
  placeholders: ['[INSERT LEADS]', '[INSERT CLIENT LIST]', '[INSERT CASE METRICS]'],
};

import type { DeckModel } from './types';

export const nextGenDeck: DeckModel = {
  brand: {
    name: 'Next Gen Management Co',
    tagline: 'Performance-led creator operations and management.',
    links: [],
  },
  themeHint: {
    vibeKeywords: ['creator economy', 'funnel-first', 'off-platform growth', 'operator discipline'],
    accentGuidance: 'Use bold growth accents with clear funnel visuals and operator scorecards.',
  },
  sections: [
    {
      id: 'nextgen-flow',
      type: 'process',
      headline: 'Recruit, close, manage, and lift revenue with measurable operations.',
      subhead: 'Channels explicitly referenced: Reddit, Twitter/X, Telegram.',
      bullets: [
        'Audience focus: recruiters, managers, operators.',
        'Operating design includes lead capture, qualification, workflow, retention, and monetization ops.',
      ],
      stats: [],
      diagrams: [
        {
          label: 'Creator operating loop',
          steps: ['Source', 'Qualify', 'Sign', 'Manage', 'Optimize', 'Retain/Expand'],
        },
      ],
      cta: 'Attach creator KPI exports to replace placeholders with source-backed metrics.',
      roleBlocks: [
        {
          role: 'Recruiter',
          responsibilities: ['Source candidates', 'Qualify fit', 'Drive signed onboarding'],
          kpis: [
            'Qualified creators/week: candidates that pass persona, content consistency, and onboarding readiness checks.',
            'Recruiter-to-sign conversion: percentage of qualified creators who execute agreements.',
            'Activation speed: median days from signed agreement to first managed content cycle launch.',
          ],
        },
        {
          role: 'Executive Account Manager',
          responsibilities: ['Close deals', 'Own account growth'],
          kpis: [
            'Net new managed revenue/week: collected agency-share revenue from newly closed creators or partnerships.',
            'Close efficiency: percentage of qualified opportunities converted within target cycle time.',
            'Retention revenue stability: month-over-month collected revenue from accounts closed by EAM.',
          ],
        },
        {
          role: 'Management',
          responsibilities: ['Optimize managed creators', 'Track intervention outcomes'],
          kpis: [
            'Intervention lift: percentage increase in collected creator revenue 30 and 90 days after management intervention.',
            'Net retention rate: share of managed creators maintaining or growing revenue month over month.',
            'Issue resolution SLA: percentage of creator blockers resolved within agreed operational window.',
          ],
        },
      ],
      compensationBlocks: [
        {
          role: 'Recruiter',
          newLever:
            'Option A: 7% of creator earnings for first 6 months (collected). Option B: $[INSERT X] per signed creator + milestone bonus.',
          retentionLever: '[INSERT RETENTION STRUCTURE]',
          expansionLever: '[INSERT EXPANSION STRUCTURE]',
          equityNote: 'Milestone based after [INSERT MANAGED REVENUE THRESHOLD].',
          sourceDefined: false,
        },
        {
          role: 'Executive Account Manager',
          newLever: '15% of net agency revenue from deals closed for first 6 months.',
          retentionLever: '5% ongoing.',
          expansionLever: '5% on incremental revenue tied to expanded managed scope.',
          equityNote: 'Milestone based after [INSERT MANAGED REVENUE THRESHOLD].',
          sourceDefined: false,
        },
        {
          role: 'Management',
          newLever: '5% of measured revenue lift for first 3 months after intervention.',
          retentionLever: '[INSERT RETENTION STRUCTURE]',
          expansionLever: '[INSERT EXPANSION STRUCTURE]',
          equityNote: 'Milestone based after [INSERT MANAGED REVENUE THRESHOLD].',
          sourceDefined: false,
        },
      ],
      proofBlocks: [
        {
          claim: 'Next Gen is framed as creator management with off-platform acquisition channels.',
          sourceRef: 'Agents.md#Next Gen Management Co',
          confidence: 'Med',
        },
      ],
      assetRefs: ['app/assets/nextgen/'],
    },
  ],
  placeholders: ['[INSERT LEADS]', '[INSERT CLIENT LIST]', '[INSERT CASE METRICS]'],
};

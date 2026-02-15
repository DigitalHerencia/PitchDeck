import type { DeckModel } from './types';

export const smsDeck: DeckModel = {
  brand: {
    name: 'SMS',
    tagline: 'Package-driven service bookings with add-on expansion.',
    links: [],
  },
  themeHint: {
    vibeKeywords: ['service packages', 'bookings', 'proof-first', 'referrals'],
    accentGuidance:
      'Use lifestyle/service accents with strong booking CTA contrast and proof-image framing.',
  },
  sections: [
    {
      id: 'sms-commercial',
      type: 'compensation',
      headline: 'Simple package economics with expansion from add-ons and repeat business.',
      subhead: 'Current repository does not include source package sheets or price lists.',
      bullets: [
        'Core monetization appears package-led.',
        'Growth path is add-on attachment and referral/repeat conversion.',
      ],
      stats: [],
      diagrams: [
        {
          label: 'Booking funnel',
          steps: ['Inquiry', 'Qualify', 'Book package', 'Deliver', 'Add-on/Referral'],
        },
      ],
      cta: 'Upload SMS pricing and proposal docs to convert assumptions into source-defined slides.',
      roleBlocks: [
        {
          role: 'Executive Account Manager',
          responsibilities: ['Lead qualification', 'Package close', 'Expansion follow-up'],
          kpis: [
            'Qualified inquiry-to-booking rate: percentage of qualified leads that convert to paid packages.',
            'Average booked package value: collected revenue per closed package before add-ons.',
            'Add-on attachment rate: share of package bookings that include at least one upsell service.',
            '60-day repeat/referral conversion: percentage of delivered clients that rebook or refer a paying client.',
          ],
        },
      ],
      compensationBlocks: [
        {
          role: 'Executive Account Manager',
          newLever: '15% on booked package revenue (collected).',
          retentionLever: '5% on repeat bookings (optional referral lever).',
          expansionLever: '20% on add-ons (collected).',
          equityNote: '[INSERT IF APPLICABLE].',
          sourceDefined: false,
        },
      ],
      proofBlocks: [
        {
          claim: 'No local source artifacts were found for SMS package tiers or pricing.',
          sourceRef: 'docs/CONTEXT_INDEX.md#discovery-scope',
          confidence: 'High',
        },
      ],
      assetRefs: ['app/assets/sms/'],
    },
  ],
  placeholders: ['[INSERT LEADS]', '[INSERT CLIENT LIST]', '[INSERT CASE METRICS]'],
};

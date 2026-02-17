export type DeckSectionId =
  | 'hero'
  | 'proof-first'
  | 'brand-positioning'
  | 'brand-assets'
  | 'revenue-engine'
  | 'funnel-model'
  | 'market-penetration'
  | 'role'
  | 'nda'
  | 'offer';

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  valueProps: string[];
}

export interface ProofFirstContent {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  statements: string[];
}

export interface BrandPositioningContent {
  title: string;
  statements: string[];
}

export interface RoleExecutionStep {
  stage: string;
  owner: string;
  executionDetail: string;
  successSignal: string;
}

export interface CompanyRoleModel {
  role: string;
  objective: string;
  responsibilities: string[];
  kpis: string[];
  executionPath: RoleExecutionStep[];
}

export interface CompanyExecutionModel {
  company: string;
  operatingFocus: string;
  roles: CompanyRoleModel[];
}

export interface FunnelModelContent {
  title: string;
  subtitle: string;
  companies: CompanyExecutionModel[];
  diagram?: DiagramAsset;
}

export interface BrandAsset {
  name: string;
  focus: string;
  screenshot: string;
  liveSite: string;
  repository?: string;
  socialLinks: {
    platform: string;
    href: string;
  }[];
}

export interface BrandAssetsContent {
  title: string;
  subtitle: string;
  entities: BrandAsset[];
}

export interface VisualAidsContent {
  title: string;
  diagrams: DiagramAsset[];
}

export interface CtaContent {
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
}

export interface DiagramAsset {
  title: string;
  description: string;
  imagePath: string;
}

export type RevenueView = string;

export interface RevenueEngineContent {
  title: string;
  subtitle: string;
  steps: string[];
  views: {
    label: RevenueView;
    companyName: string;
    table: {
      step: string;
      customer: string;
      economics: string;
      moneyFlow: string;
      userContribution: string;
    }[];
  }[];
}

export interface TechLeverageContent {
  title: string;
  systems: {
    heading: string;
    description: string;
  }[];
}

export interface MarketPenetrationContent {
  title: string;
  bullets: string[];
  leadSignals: string[];
  diagram?: DiagramAsset;
}

export interface RoleContent {
  title: string;
  subtitle: string;
  verticalContributions: {
    vertical: string;
    primaryRole: string;
    ownership: string[];
    handoff: string;
  }[];
  closingSkills: string[];
}

export interface ResponsibilitiesKpisContent {
  title: string;
  responsibilities: string[];
  scorecard: {
    company: string;
    role: string;
    kpi: string;
    objective: string;
    benchmarkContext: string;
    tiers: {
      level: string;
      effort: string;
      timeCommitment: string;
      metrics: string[];
      checklist: string[];
    }[];
  }[];
}

export interface CompensationModelContent {
  title: string;
  subtitle: string;
  tiers: {
    tier: string;
    equityBand: string;
    revenueBand: string;
    promotionGate: string;
    roles: {
      role: string;
      base: string;
      variable: string;
      totalRange: string;
      outcomeGate: string;
    }[];
  }[];
  disclaimers: string[];
}
export interface NdaContent {
  title: string;
  subtitle: string;
  statement: string[];
  acknowledgmentLabel: string;
}

export interface OfferExplanationContent {
  title: string;
  subtitle: string;
  terms: {
    category: string;
    details: string;
  }[];
  ctaLabel: string;
}

export interface DeckContent {
  sectionOrder: DeckSectionId[];
  hero: HeroContent;
  proofFirst: ProofFirstContent;
  brandPositioning: BrandPositioningContent;
  brandAssets: BrandAssetsContent;
  visualAids: VisualAidsContent;
  funnelModel: FunnelModelContent;
  revenueEngine: RevenueEngineContent;
  marketPenetration: MarketPenetrationContent;
  role: RoleContent;
  responsibilitiesKpis: ResponsibilitiesKpisContent;
  compensationModel: CompensationModelContent;
  cta: CtaContent;
  nda: NdaContent;
  offer: OfferExplanationContent;
}

function validateDeckContent(content: DeckContent): DeckContent {
  const uniqueIds = new Set(content.sectionOrder);

  if (uniqueIds.size !== content.sectionOrder.length) {
    throw new Error('deckContent.sectionOrder must not contain duplicate section ids.');
  }

  if (content.funnelModel.companies.length === 0) {
    throw new Error('deckContent.funnelModel.companies must contain at least one company model.');
  }

  if (content.revenueEngine.views.length === 0) {
    throw new Error('deckContent.revenueEngine.views must contain at least one view.');
  }

  if (content.offer.terms.length === 0) {
    throw new Error('deckContent.offer.terms must contain at least one offer term.');
  }

  return content;
}

const rawDeckContent = {
  sectionOrder: [
    'nda',
    'hero',
    'proof-first',
    'brand-positioning',
    'brand-assets',
    'revenue-engine',
    'funnel-model',
    'role',
    'market-penetration',
    'offer',
  ],
  hero: {
    eyebrow: 'Partnership Brief',
    title: 'High-Friction Revenue Machines',
    subtitle:
      'Four operating brands. One repeatable model: capture demand, close cleanly, deliver reliably, and collect cash.',
    valueProps: [],
  },
  proofFirst: {
    title: 'What Has Already Been Accomplished',
    subtitle:
      'Proof is tied to miles, invoices, delivered work, and retained client demand across active operations.',
    statements: [
      'The Bosque Ltd: Completed 17,000+ regulated miles and generated $750k+ in transport activity, including $75,560.80 in paid invoices, with zero incidents.',
      'Digital Herencia: Delivers high-impact growth systems, conversion-focused automation, and practical digital transformation for everyday businesses.',
      'Next Gen Management: Building a creator-friendly platform to modernize legacy talent operations through smarter recruitment, optimization, and monetization workflows.',
      'Southwest Media Services: Served hundreds of satisfied clients, delivered events nationwide, and generated $42,650 in invoices.',
    ],
  },
  brandPositioning: {
    title: 'Money Models by Brand',
    statements: [
      'The Bosque Ltd: Collected revenue = trips and route volume x contracted rate + route expansion and service stacking.',
      'Digital Herencia: Collected revenue = project contracts + monthly retainers + expansion automation scope.',
      'Next Gen Management: Collected revenue = managed creator share + closed deals + intervention-driven lift.',
      'Southwest Media Services: Collected revenue = booked packages + add-ons + repeat and referral bookings.',
    ],
  },
  brandAssets: {
    title: 'Brand Footprint and Context',
    subtitle:
      'Each profile reinforces market position, operating model, and primary revenue drivers.',
    entities: [
      {
        name: 'The Bosque Ltd',
        focus:
          'Regulated cannabis transport and delivery operation monetizing contracts, dispatch execution, and route expansion.',
        screenshot: '/Artboard 3.png',
        liveSite: 'https://thebosquegroup.bigcartel.com/',
        socialLinks: [
          {
            platform: 'Scheduling tool',
            href: 'https://thebosqueltdtransportschedulingtool.square.site',
          },
          {
            platform: 'Instagram',
            href: 'https://www.instagram.com/thebosqueltd/',
          },
          {
            platform: 'Facebook',
            href: 'https://www.facebook.com/TheBosqueLTD',
          },
        ],
      },
      {
        name: 'Southwest Media Services',
        focus:
          'Booking-based package service model monetizing core packages, add-ons, and referral-driven repeat bookings.',
        screenshot:
          'https://raw.githubusercontent.com/DigitalHerencia/PitchDeck/refs/heads/main/public/Grey.avif',
        liveSite: 'https://southwestmediaservices.vercel.app/',
        socialLinks: [
          {
            platform: 'Portfolio',
            href: 'https://southwestmediaservices.weebly.com/',
          },
          {
            platform: 'Scheduling tools',
            href: 'https://southwestmediaservices.vercel.app/',
          },
        ],
      },
      {
        name: 'Digital Herencia',
        focus:
          'Revenue-enablement studio focused on lead generation, implementation contracts, recurring retainers, and expansion work.',
        screenshot:
          'https://raw.githubusercontent.com/DigitalHerencia/SiempreNuevo/refs/heads/main/public/DigitalHerencia.jpeg',
        liveSite: 'https://digitalherencia.vercel.app/',
        repository: 'https://github.com/DigitalHerencia/DigitalHerencia',
        socialLinks: [],
      },
      {
        name: 'Next Gen Management',
        focus:
          'Creator management operation focused on recruiting, onboarding, retention, and performance-linked revenue share.',
        screenshot: '/main-logo.png',
        liveSite: 'https://nextgenmanagementagency.vercel.app/',
        repository: 'https://github.com/DigitalHerencia/NextGenManagement',
        socialLinks: [],
      },
    ],
  },
  visualAids: {
    title: 'Operational visuals: model, process, and market context',
    diagrams: [
      {
        title: 'Business process map',
        description: 'Role-to-role handoffs from lead intake to retained revenue expansion.',
        imagePath: '/diagrams/business-process.svg',
      },
      {
        title: 'Revenue stream architecture',
        description: 'How each business unit converts execution into collected cash flow.',
        imagePath: '/diagrams/revenue-streams.svg',
      },
    ],
  },
  revenueEngine: {
    title: 'Customer-to-Cash Sequence by Brand',
    subtitle:
      'Each brand follows the same loop: acquire demand, qualify fit, deliver execution, collect cash, then expand.',
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    views: [
      {
        label: 'The Bosque Ltd',
        companyName: 'The Bosque Ltd',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer:
              'Licensed operators and referrals submit transport demand for regulated routes.',
            economics:
              'Route pricing is set by distance, schedule pressure, custody requirements, and compliance load.',
            moneyFlow: 'Qualified route request enters pipeline with quote assumptions.',
            userContribution:
              'Prospect operators and surface route demand with buyer access and compliance fit.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer:
              'Account lead and dispatcher align on route windows, custody chain, and delivery constraints.',
            economics: 'Final terms lock contracted rate, margin expectations, and route capacity.',
            moneyFlow: 'Signed scope converts lead into scheduled revenue event.',
            userContribution:
              'Run discovery, confirm route feasibility, and close transport terms cleanly.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer: 'Operator receives compliant pickup, transfer, and handoff updates in real time.',
            economics: 'Incident-free, on-time execution protects margin and repeat-route potential.',
            moneyFlow: 'Completed route with signed records creates invoice-ready proof.',
            userContribution:
              'Coordinate dispatch handoffs and keep the account aligned during execution.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer:
              'Accounts contacts receive invoice, documentation package, and payment follow-up.',
            economics: 'Collection speed controls working capital and expansion capacity.',
            moneyFlow: 'Collected invoice closes loop and funds route stacking or added lanes.',
            userContribution:
              'Remove payment blockers fast and open expansion conversations on active accounts.',
          },
        ],
      },
      {
        label: 'Digital Herencia',
        companyName: 'Digital Herencia',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer: 'SMB operators with growth bottlenecks enter through outbound, referrals, or inbound.',
            economics:
              'Lead quality determines conversion speed, scope fit, and service delivery load.',
            moneyFlow: 'Qualified demand enters discovery with revenue bottlenecks documented.',
            userContribution:
              'Source ICP accounts and frame discovery around money leaks, not feature requests.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer: 'Owner aligns on business goal, urgency, scope boundaries, and buying readiness.',
            economics: 'Scope maps to implementation contract, retainer tier, and expansion runway.',
            moneyFlow: 'Signed SOW converts discovery into collected-revenue plan.',
            userContribution:
              'Translate bottlenecks into an offer with explicit milestones and close terms.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer: 'Team ships acquisition workflows, automations, and operating tooling.',
            economics: 'Delivery quality and adoption rate drive retention and expansion demand.',
            moneyFlow: 'Milestone acceptance unlocks invoicing and recurring retainer continuity.',
            userContribution:
              'Own cadence, protect delivery quality, and keep outcomes visible every week.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer: 'Client clears implementation invoices and stays on recurring retainer billing.',
            economics: 'Reliable collections stabilize margin and increase production capacity.',
            moneyFlow: 'Collected revenue funds staffing, automation upgrades, and account expansion.',
            userContribution:
              'Protect renewals, enforce payment reliability, and convert wins into follow-on scope.',
          },
        ],
      },
      {
        label: 'Next Gen Management',
        companyName: 'Next Gen Management',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer:
              'Creators enter pipeline through Reddit, X, Telegram, and referral acquisition.',
            economics: 'Channel quality determines activation cost, fit, and early retention odds.',
            moneyFlow: 'Qualified creators move into onboarding queue with readiness scores.',
            userContribution:
              'Drive recruiter output and filter aggressively for fit, readiness, and upside.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer: 'Recruiter and manager align goals, terms, and execution standards with creator.',
            economics:
              'Agreement terms define revenue-share potential and required management intensity.',
            moneyFlow: 'Signed onboarding terms activate managed creator revenue plan.',
            userContribution:
              'Close onboarding terms and set expectations on cadence, responsibilities, and payout logic.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer:
              'Management pod executes acquisition, retention, and monetization workflows weekly.',
            economics: 'Execution consistency drives retention stability and account value growth.',
            moneyFlow: 'Performance windows generate measurable earnings for settlement cycles.',
            userContribution:
              'Coach intervention quality and enforce operator-level weekly scorecard discipline.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer:
              'Agency share is reconciled on verified performance and payout windows.',
            economics: 'Accurate and timely settlements protect trust and long-term retention.',
            moneyFlow:
              'Collected net share recycles into recruiter capacity, manager pods, and growth channels.',
            userContribution:
              'Validate settlement data and convert stable accounts into higher-value management terms.',
          },
        ],
      },
      {
        label: 'Southwest Media Services',
        companyName: 'Southwest Media Services',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer: 'Prospects submit inquiries for event and media deliverables.',
            economics: 'Inquiry quality and package fit set booking value and margin profile.',
            moneyFlow: 'Lead intake captures scope, timeline, budget, and package fit.',
            userContribution:
              'Qualify demand quickly and route each client to the right package path.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer:
              'Client confirms deliverables, schedule, payment terms, and add-on options.',
            economics: 'Final scope controls production load, add-on margin, and cash timing.',
            moneyFlow: 'Deposit and signed terms lock booking and reserve production capacity.',
            userContribution:
              'Close package terms and attach relevant add-ons at point of sale.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer: 'Team produces and delivers contracted media assets to the client.',
            economics: 'Delivery quality drives testimonials, referrals, and repeat-booking probability.',
            moneyFlow: 'Accepted delivery triggers final invoice and post-project follow-up sequence.',
            userContribution:
              'Protect handoff quality and keep communication tight through completion.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer: 'Client clears final balance and receives repeat and referral follow-up.',
            economics: 'Fast collections plus repeat conversion stabilize monthly cash flow.',
            moneyFlow: 'Collected balances and repeat bookings recycle into new monthly pipeline.',
            userContribution:
              'Close collections quickly and trigger repeat or referral offers while trust is high.',
          },
        ],
      },
    ],
  },
  funnelModel: {
    title: 'Execution Flow: Lead -> Close -> Deliver -> Expand',
    subtitle:
      'Each brand maps role ownership to measurable daily execution so growth does not depend on luck.',
    companies: [
      {
        company: 'The Bosque Ltd',
        operatingFocus:
          'Regulated transport contracts, compliant dispatch, and recurring route growth.',
        roles: [
          {
            role: 'Dispatcher / Account Lead',
            objective: 'Convert compliant routing demand into recurring, paid transport work.',
            responsibilities: [
              'Verify licensing and route constraints before scheduling.',
              'Assign drivers and timing windows based on compliance and margin.',
              'Coordinate client communication from quote to delivery confirmation.',
            ],
            kpis: [
              'On-time route completion rate',
              'Collected invoice value per route',
              'Recurring route expansion per month',
            ],
            executionPath: [
              {
                stage: '1. Intake',
                owner: 'Dispatcher / Account Lead',
                executionDetail:
                  'Validate operator, product type, pickup/dropoff windows, and required paperwork.',
                successSignal: 'Request accepted with compliant route plan.',
              },
              {
                stage: '2. Dispatch',
                owner: 'Dispatcher + Driver Team',
                executionDetail:
                  'Issue trip plan with route timing, custody instructions, and escalation contacts.',
                successSignal: 'Trip starts on schedule with complete chain-of-custody setup.',
              },
              {
                stage: '3. Delivery + Billing',
                owner: 'Account Lead + Finance',
                executionDetail:
                  'Confirm delivery proof, close documentation, and issue invoice same day.',
                successSignal: 'Invoice delivered with zero compliance exceptions.',
              },
              {
                stage: '4. Expansion',
                owner: 'Account Lead',
                executionDetail:
                  'Review route outcomes with client and propose recurring or multi-stop schedule.',
                successSignal: 'New recurring route or expanded scope signed.',
              },
            ],
          },
        ],
      },
      {
        company: 'Digital Herencia',
        operatingFocus:
          'Revenue enablement engagements that convert into retainers and expansion work.',
        roles: [
          {
            role: 'Executive Account Manager',
            objective: 'Turn qualified SMB demand into retained revenue operations partnerships.',
            responsibilities: [
              'Own outbound lead generation and qualification quality.',
              'Run discovery, define commercial scope, and close aligned contracts.',
              'Protect retention through weekly performance communication and expansion planning.',
            ],
            kpis: [
              'Qualified leads/week',
              'Close rate',
              'Retainer retention rate',
              'Expansion revenue',
            ],
            executionPath: [
              {
                stage: '1. Prospecting',
                owner: 'Executive Account Manager',
                executionDetail:
                  'Build targeted outreach lists and launch channel-specific messaging.',
                successSignal: 'Consistent flow of qualified discovery calls.',
              },
              {
                stage: '2. Discovery + Offer',
                owner: 'Executive Account Manager',
                executionDetail:
                  'Diagnose revenue bottlenecks and present a scoped delivery plan with terms.',
                successSignal: 'Client signs project + retainer structure.',
              },
              {
                stage: '3. Delivery Governance',
                owner: 'Account Manager + Delivery Team',
                executionDetail:
                  'Track execution milestones, report outcomes weekly, and manage risks early.',
                successSignal: 'Milestones hit with clear proof of business impact.',
              },
              {
                stage: '4. Retention + Expansion',
                owner: 'Executive Account Manager',
                executionDetail:
                  'Use results to renew terms and introduce additional revenue infrastructure scope.',
                successSignal: 'Retainer renewal and incremental contract value.',
              },
            ],
          },
        ],
      },
      {
        company: 'Next Gen Management',
        operatingFocus:
          'Creator recruitment, onboarding quality, and managed account revenue lift.',
        roles: [
          {
            role: 'Recruiter + Manager Pod',
            objective:
              'Acquire qualified creators and compound monthly earnings through structured management.',
            responsibilities: [
              'Source and qualify creators from Reddit, Twitter/X, and Telegram.',
              'Close onboarding terms and transition creators into account management workflow.',
              'Run retention and monetization interventions based on weekly scorecards.',
            ],
            kpis: [
              'Qualified creators/week',
              'Signed creators/week',
              '30-day creator retention',
              'Measured revenue lift per managed creator',
            ],
            executionPath: [
              {
                stage: '1. Acquisition',
                owner: 'Recruiter',
                executionDetail:
                  'Execute channel outreach, pre-qualify creator fit, and book onboarding calls.',
                successSignal: 'Qualified pipeline with confirmed onboarding slots.',
              },
              {
                stage: '2. Close + Onboard',
                owner: 'Recruiter + Account Manager',
                executionDetail:
                  'Finalize terms, collect onboarding data, and launch creator workflow.',
                successSignal: 'Creator activates with complete profile and operating plan.',
              },
              {
                stage: '3. Growth Operations',
                owner: 'Manager Pod',
                executionDetail:
                  'Apply content, pricing, and audience engagement playbooks with weekly reviews.',
                successSignal: 'Week-over-week uplift in conversions and retained earnings.',
              },
              {
                stage: '4. Retention + Upside',
                owner: 'Manager + Leadership',
                executionDetail:
                  'Stabilize performance, reduce churn risks, and unlock premium management services.',
                successSignal: 'Long-term retention and higher monthly creator yield.',
              },
            ],
          },
        ],
      },
      {
        company: 'Southwest Media Services',
        operatingFocus:
          'Package bookings, delivery quality, and referral-driven repeat conversion in a service business.',
        roles: [
          {
            role: 'Executive Account Manager',
            objective:
              'Convert qualified inquiries into booked packages, then expand each account through add-ons and repeat demand.',
            responsibilities: [
              'Qualify each inquiry on timeline, budget, and deliverable scope.',
              'Close package terms with deposit/payment terms and defined add-on options.',
              'Run post-delivery follow-up to capture repeat bookings and referrals.',
            ],
            kpis: [
              'Qualified inquiry-to-booking conversion rate',
              'Average booked package value',
              'Add-on attachment rate',
              '60-day repeat or referral conversion',
            ],
            executionPath: [
              {
                stage: '1. Intake',
                owner: 'Executive Account Manager',
                executionDetail:
                  'Capture client request details, qualify budget fit, and set discovery call quickly.',
                successSignal: 'Inquiry becomes qualified booking opportunity.',
              },
              {
                stage: '2. Close',
                owner: 'Executive Account Manager',
                executionDetail:
                  'Present package options, finalize scope, and secure payment terms.',
                successSignal: 'Package is booked with deposit or confirmed payment plan.',
              },
              {
                stage: '3. Delivery',
                owner: 'Delivery Team + Account Manager',
                executionDetail:
                  'Execute project on schedule with clear communication and scope control.',
                successSignal: 'Client accepts delivery without scope-breaking revisions.',
              },
              {
                stage: '4. Repeat + Referral',
                owner: 'Executive Account Manager',
                executionDetail:
                  'Collect final balance, request referral/testimonial, and present next best offer.',
                successSignal: 'Repeat booking or referral opportunity enters active pipeline.',
              },
            ],
          },
        ],
      },
    ],
  },
  marketPenetration: {
    title: 'Performance Controls: Measure What Pays',
    bullets: [
      'Lead generation: qualified volume, show rate, and accepted handoff quality.',
      'Closing roles: close rate, cycle speed, and time to first collected payment.',
      'Management roles: retention stability, expansion conversion, and SLA reliability.',
      'Leadership: revenue quality, margin discipline, and repeatable playbook reuse.',
    ],
    leadSignals: [
      'Validate demand quality before forecasting growth.',
      'Prove operating reliability before adding capacity.',
      'Pay upside on retention and expansion, not activity volume.',
      'Standardize winning playbooks before adding headcount.',
    ],
    diagram: {
      title: 'Market forces model',
      description:
        'Regulation, trust, and channel control shape which growth levers are durable in each market.',
      imagePath: '/diagrams/market-forces.svg',
    },
  },
  role: {
    title: 'Impact: Ownership by Brand',
    subtitle:
      'Ownership map by brand: primary commercial control, handoff boundary, and the win condition that must be protected.',
    verticalContributions: [
      {
        vertical: 'The Bosque Ltd (regulated logistics)',
        primaryRole: 'Account Executive + Operator',
        ownership: [
          'Own account commercial terms and route economics before dispatch starts.',
          'Keep custody/compliance handoff quality high enough to prevent delivery friction.',
          'Escalate service risk early so collections and route continuity stay protected.',
        ],
        handoff: 'Win condition: one route converts into recurring contracted volume.',
      },
      {
        vertical: 'Digital Herencia (revenue systems)',
        primaryRole: 'Executive Account Manager',
        ownership: [
          'Own scope clarity and payment discipline before delivery resources are committed.',
          'Protect first-value milestones through weekly client decision alignment.',
          'Drive expansion only where retained outcomes and margin quality are proven.',
        ],
        handoff: 'Win condition: project delivery converts into stable retainer plus expansion scope.',
      },
      {
        vertical: 'Next Gen (creator management)',
        primaryRole: 'Recruiter + Manager',
        ownership: [
          'Own creator quality threshold before signing so manager capacity is protected.',
          'Protect onboarding accuracy so payouts, expectations, and workflow are aligned.',
          'Escalate churn/earnings risks fast enough to preserve retention and yield.',
        ],
        handoff: 'Win condition: onboarding quality compounds into retained managed revenue.',
      },
      {
        vertical: 'Southwest Media Services (package services)',
        primaryRole: 'Executive Account Manager',
        ownership: [
          'Own booking terms quality so scope, payment timing, and margin stay clean.',
          'Protect add-on positioning without sacrificing delivery reliability.',
          'Control follow-up cadence that turns completed work into repeat/referral demand.',
        ],
        handoff: 'Win condition: booked package expands through add-ons and repeat business.',
      },
    ],
    closingSkills: [
      'Explain money flow in plain language.',
      'Qualify quickly, close cleanly, and hand off without friction.',
      'Protect retention and expansion without sacrificing margin discipline.',
      'Execute consistently in high-friction operating conditions.',
    ],
  },
  responsibilitiesKpis: {
    title: 'Operating Governance: Scorecards and Controls',
    responsibilities: [
      'Track every opportunity from source to close with named ownership and handoff timestamps.',
      'Tie variable compensation only to collected revenue and verified retention performance.',
      'Log account health weekly: delivery quality, risk flags, and expansion readiness.',
      'Coach through role scorecards before changing pay plans or staffing levels.',
    ],
    scorecard: [
      {
        company: 'The Bosque Ltd',
        role: 'Executive Account Manager',
        kpi: 'Qualified pipeline quality',
        objective:
          'Maintain steady operator pipeline while protecting compliance fit and close-team time.',
        benchmarkContext:
          'The Bosque Ltd baseline: demand only counts when operator fit, route need, and buyer access are verified.',
        tiers: [
          {
            level: 'Baseline (light effort)',
            effort: '3-4 hrs/week',
            timeCommitment: '30-45 min/day',
            metrics: [
              '8-12 qualified operator opportunities/week',
              'Show rate >= 55%',
              'Lead acceptance by closer or dispatcher >= 70%',
            ],
            checklist: [
              'Log source channel and vertical fit for every lead.',
              'Send first follow-up within 24 hours of initial contact.',
              'Remove or relabel stale leads after 7 days with no response.',
            ],
          },
          {
            level: 'Growth (focused effort)',
            effort: '6-8 hrs/week',
            timeCommitment: '60-90 min/day',
            metrics: [
              '12-16 qualified operator opportunities/week',
              'Show rate >= 62%',
              'Lead acceptance by closer or dispatcher >= 78%',
            ],
            checklist: [
              'Run two channel tests weekly (offer, hook, or audience segment).',
              'Pre-qualify budget and urgency before handoff.',
              'Deliver handoff notes with pain point, timing, and decision-maker role.',
            ],
          },
          {
            level: 'Scale (high effort)',
            effort: '10-12 hrs/week',
            timeCommitment: '2+ hrs/day',
            metrics: [
              '18-22 qualified operator opportunities/week',
              'Show rate >= 70%',
              'Lead acceptance by closer or dispatcher >= 85%',
            ],
            checklist: [
              'Stand up referral loop with at least 2 partner sources.',
              'Score each channel by cost per qualified lead weekly.',
              'Document and reuse top-performing outreach scripts.',
            ],
          },
        ],
      },
      {
        company: 'Next Gen',
        role: 'Recruiter + Account Executive',
        kpi: 'Recruit-to-sign performance',
        objective:
          'Convert qualified creators into signed, activation-ready accounts without lowering fit standards.',
        benchmarkContext:
          'Next Gen baseline: channel volume only matters when creators activate quickly and enter managed workflow.',
        tiers: [
          {
            level: 'Baseline (light effort)',
            effort: '4-5 hrs/week',
            timeCommitment: '45-60 min/day',
            metrics: [
              'Recruiter-to-sign conversion >= 22%',
              'Median activation speed <= 14 days',
              'First managed cycle launched >= 80%',
            ],
            checklist: [
              'Respond to qualified creator leads in the same day.',
              'Run readiness score before presenting onboarding terms.',
              'Confirm manager pod ownership before signature.',
            ],
          },
          {
            level: 'Growth (focused effort)',
            effort: '7-9 hrs/week',
            timeCommitment: '90 min/day',
            metrics: [
              'Recruiter-to-sign conversion >= 30%',
              'Median activation speed <= 10 days',
              'First managed cycle launched >= 88%',
            ],
            checklist: [
              'Update objection patterns by channel every week.',
              'Set next-step commitment before ending each qualification call.',
              'Review non-sign reasons weekly and adjust screening criteria.',
            ],
          },
          {
            level: 'Scale (high effort)',
            effort: '12+ hrs/week',
            timeCommitment: '2-3 hrs/day',
            metrics: [
              'Recruiter-to-sign conversion >= 36%',
              'Median activation speed <= 7 days',
              'First managed cycle launched >= 92%',
            ],
            checklist: [
              'Run daily recruiter pipeline review with stage aging alerts.',
              'Codify top close scripts by creator profile segment.',
              'Coach one recruiter weekly to protect quality and volume.',
            ],
          },
        ],
      },
      {
        company: 'Digital Herencia',
        role: 'Executive Account Manager',
        kpi: 'Retention quality',
        objective: 'Protect account stability through predictable onboarding and issue response.',
        benchmarkContext:
          'Digital Herencia baseline: retention comes from predictable delivery, fast response loops, and visible weekly value.',
        tiers: [
          {
            level: 'Baseline (light effort)',
            effort: '3-4 hrs/week',
            timeCommitment: '30-45 min/day',
            metrics: [
              '30-day retention >= 88%',
              'Issue first-response time <= 8 hours',
              'Weekly client health reviews completed for 100% active accounts',
            ],
            checklist: [
              'Run onboarding checklist within 48 hours of close.',
              'Log delivery issues with owner and due date.',
              'Capture one qualitative sentiment note per active account weekly.',
            ],
          },
          {
            level: 'Growth (focused effort)',
            effort: '6-7 hrs/week',
            timeCommitment: '60-90 min/day',
            metrics: [
              '30-day retention >= 92%',
              'Issue first-response time <= 4 hours',
              'Net revenue retained >= 98%',
            ],
            checklist: [
              'Run weekly risk review for at-risk accounts with action plan.',
              'Host biweekly value review call for top-tier accounts.',
              'Escalate unresolved blockers older than 72 hours.',
            ],
          },
          {
            level: 'Scale (high effort)',
            effort: '9-11 hrs/week',
            timeCommitment: '2 hrs/day',
            metrics: [
              '30-day retention >= 95%',
              'Issue first-response time <= 2 hours',
              'Net revenue retained >= 103%',
            ],
            checklist: [
              'Implement early-warning score by account behavior patterns.',
              'Run monthly executive business review for top accounts.',
              'Publish retention playbook updates with measured outcomes.',
            ],
          },
        ],
      },
      {
        company: 'Southwest Media Services',
        role: 'Executive Account Manager',
        kpi: 'Booking-to-expansion output',
        objective: 'Turn completed bookings into add-ons, repeat projects, and referral-sourced revenue.',
        benchmarkContext:
          'Southwest Media Services baseline: delivery quality plus follow-up cadence should convert healthy accounts into repeat and referral demand.',
        tiers: [
          {
            level: 'Baseline (light effort)',
            effort: '2-3 hrs/week',
            timeCommitment: '20-30 min/day',
            metrics: [
              '2 qualified expansion conversations/week',
              'Referral asks made in >= 55% of healthy accounts',
              'Expansion win rate >= 18%',
            ],
            checklist: [
              'Flag accounts with stable delivery for expansion review.',
              'Include referral prompt in weekly check-in script.',
              'Track expansion pipeline separately from new logo pipeline.',
            ],
          },
          {
            level: 'Growth (focused effort)',
            effort: '4-6 hrs/week',
            timeCommitment: '45-60 min/day',
            metrics: [
              '3-4 qualified expansion conversations/week',
              'Referral asks made in >= 72% of healthy accounts',
              'Expansion win rate >= 26%',
            ],
            checklist: [
              'Map next best offer by account maturity and margin.',
              'Bundle upsell with operational milestone reviews.',
              'Review expansion blockers with leadership weekly.',
            ],
          },
          {
            level: 'Scale (high effort)',
            effort: '7-9 hrs/week',
            timeCommitment: '90+ min/day',
            metrics: [
              '5+ qualified expansion conversations/week',
              'Referral asks made in >= 85% of healthy accounts',
              'Expansion win rate >= 34%',
            ],
            checklist: [
              'Run monthly expansion campaign segmented by account type.',
              'Create case studies from top 3 expansion wins each quarter.',
              'Tie manager incentives to expansion quality and retention balance.',
            ],
          },
        ],
      },
    ],
  },
  compensationModel: {
    title: 'Compensation Framework: Paid on Collected Outcomes',
    subtitle:
      'Rates align to the operations briefs: pay follows collected cash, retention quality, and expansion performance.',
    tiers: [
      {
        tier: 'L1 - Acquisition and Closing',
        equityBand:
          'Milestone equity option begins after verified revenue thresholds by brand and role.',
        revenueBand: 'Individual collected revenue contribution: early-stage ramp band.',
        promotionGate:
          'Maintain qualified pipeline, close consistency, and clean handoff quality for 90 days.',
        roles: [
          {
            role: 'The Bosque Ltd New Account Closer',
            base: '$2,800 to $4,000 / month',
            variable:
              '12% of collected invoice revenue for first 6 months + 5% on incremental route expansion',
            totalRange: '$4,000 to $8,500 / month',
            outcomeGate:
              'Hit operator qualification targets and first-invoice cycle benchmarks.',
          },
          {
            role: 'Digital Herencia Executive Account Manager',
            base: '$3,200 to $4,800 / month',
            variable:
              '20% of first contract collections + 15% retainer for first 6 months + 10% on expansion scope',
            totalRange: '$5,000 to $12,500 / month',
            outcomeGate:
              'Meet close rate, first-value delivery, and 90-day retention scorecard.',
          },
          {
            role: 'Next Gen Recruiter',
            base: '$2,800 to $4,200 / month',
            variable:
              'Option A: 7% of creator earnings for first 6 months. Option B: fixed placement bonus + milestone kicker',
            totalRange: '$4,000 to $11,000 / month',
            outcomeGate:
              'Maintain recruiter-to-sign conversion and activation speed targets.',
          },
        ],
      },
      {
        tier: 'L2 - Retention and Management',
        equityBand:
          'Performance-based equity option range increases after sustained retention and expansion output.',
        revenueBand: 'Managed-book collected revenue: mid-stage scale band.',
        promotionGate:
          'Hold retention stability and expansion conversion across two full quarters.',
        roles: [
          {
            role: 'The Bosque Ltd Account Manager / Dispatch Lead',
            base: '$4,000 to $5,800 / month',
            variable: '6% on retained collected revenue + 5% on incremental route growth',
            totalRange: '$6,500 to $12,000 / month',
            outcomeGate:
              'Maintain incident-free execution, retention, and route expansion benchmarks.',
          },
          {
            role: 'Next Gen Account Manager',
            base: '$4,500 to $6,500 / month',
            variable:
              '15% of new net agency revenue for first 6 months + 5% ongoing retained revenue',
            totalRange: '$7,500 to $15,000 / month',
            outcomeGate:
              'Hit intervention lift, creator retention, and payout-accuracy scorecard targets.',
          },
          {
            role: 'Southwest Media Services Executive Account Manager',
            base: '$3,800 to $5,200 / month',
            variable:
              '15% on collected package revenue + 20% on add-ons + 5% on repeat and referral bookings',
            totalRange: '$6,000 to $13,500 / month',
            outcomeGate:
              'Maintain booking conversion, add-on attachment, and collection completion rates.',
          },
        ],
      },
      {
        tier: 'L3 - Cross-Brand Operators',
        equityBand:
          'Partner-track option eligibility tied to board-approved milestones and proven playbook leverage.',
        revenueBand: 'Cross-brand collected revenue ownership: advanced scale band.',
        promotionGate:
          'Lead repeatable playbooks across brands while holding margin, retention, and compliance controls.',
        roles: [
          {
            role: 'Senior Operator / Growth Lead',
            base: '$7,500 to $10,000 / month',
            variable:
              '4% of collected revenue under management + upside kicker on verified expansion targets',
            totalRange: '$13,000 to $25,000+ / month',
            outcomeGate:
              'Sustain portfolio retention, positive contribution margin, and documented expansion growth.',
          },
        ],
      },
    ],
    disclaimers: [
      'All variable payouts are paid on collected cash, never signed contract value.',
      'Chargebacks, compliance failures, or early churn windows are clawback-eligible.',
      'Equity options require signed plan documents, board approval, and vesting terms.',
    ],
  },
  cta: {
    title: 'If fit is clear, move to protected details and onboarding.',
    subtitle: 'Accept NDA, review terms, and confirm launch responsibilities.',
    primary: 'Continue to NDA and terms',
    secondary: 'Review scorecards again',
  },
  nda: {
    title: 'Confidentiality Gate: Required Before Protected Details',
    subtitle:
      'This deck contains non-public operating, compensation, and partnership material. Accept terms to continue.',
    statement: [
      'All protected sections are Confidential Information shared only to evaluate a potential partnership. No IP transfer, license, or assignment is implied by access.',
      'Recipient must keep materials private and may not copy, distribute, or use them for competitive or unauthorized purposes.',
      'Confidentiality obligations begin at acceptance and survive the end of discussions. If terms are not accepted, review must stop at this section.',
    ],
    acknowledgmentLabel:
      'I accept these confidentiality obligations and understand acceptance is required to continue.',
  },
  offer: {
    title: 'Offer Terms: Scope, Accountability, and Start Plan',
    subtitle:
      'This summary aligns role ownership, payout mechanics, and launch cadence before final documents.',
    terms: [
      {
        category: 'Role scope',
        details:
          'Own prospecting, pipeline progression, close quality, and clean handoff using the weekly scorecard as operating truth.',
      },
      {
        category: 'Compensation model',
        details:
          'Base plus variable compensation is paid on collected cash and verified retention or expansion outcomes.',
      },
      {
        category: 'Performance expectations',
        details:
          'Maintain lead quality, close discipline, and service reliability required to preserve payout eligibility.',
      },
      {
        category: 'Operating cadence',
        details:
          'Participate in weekly scorecard review, monthly pipeline planning, and cross-team handoff audits.',
      },
      {
        category: 'Compliance & confidentiality',
        details:
          'Follow NDA obligations, data-handling controls, and communication standards across all channels.',
      },
      {
        category: 'Start timeline',
        details:
          'Target onboarding starts within 5-10 business days after alignment, with 30-day priorities confirmed before kickoff.',
      },
    ],
    ctaLabel: 'If this structure matches your goals, reach out to schedule final alignment and onboarding.',
  },
} satisfies DeckContent;

export const deckContent = validateDeckContent(rawDeckContent);

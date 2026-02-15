export type DeckSectionId =
  | 'hero'
  | 'proof-first'
  | 'brand-positioning'
  | 'brand-assets'
  | 'revenue-engine'
  | 'funnel-model'
  | 'market-penetration'
  | 'role'
  | 'responsibilities-kpis'
  | 'compensation-model'
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

  if (content.compensationModel.tiers.length === 0) {
    throw new Error('deckContent.compensationModel.tiers must contain at least one tier.');
  }

  return content;
}

const rawDeckContent = {
  sectionOrder: [
    'nda',
    'hero',
    'proof-first',
    'brand-assets',
    'revenue-engine',
    'funnel-model',
    'market-penetration',
    'role',
    'responsibilities-kpis',
    'compensation-model',
    'offer',
  ],
  hero: {
    eyebrow: 'Portfolio Briefing',
    title: 'Revenue Operations Partnership Overview',
    subtitle:
      'Review each slide in sequence to evaluate performance proof, operating model, partner responsibilities, and terms in under seven minutes.',
    valueProps: [
      'Follow the section order from proof to terms so every decision is made with full commercial context.',
      'Use each heading to anchor discussion, then confirm the supporting metrics, operating detail, and ownership model.',
      'Treat the economics and role slides as formal checkpoints before advancing to NDA and offer execution.',
    ],
  },
  proofFirst: {
    title: 'What has already been accomplished',
    statements: [
      'The Bosque Ltd has completed 17,000+ regulated miles and generated $750k+ in transport activity, including $75,560.80 in paid invoices, with zero incidents.',
      'Digital Herencia delivers high-impact growth systems, conversion-focused automation, and modern digital transformation for everyday businesses.',
      'Next Gen Management is developing a creator-friendly platform designed to disrupt legacy talent operations through innovative recruitment, optimization, and monetization workflows.',
      'Southwest Media Services has hundreds of satisfied clients, events delivered across the country, and $42,650 in invoices.',
    ],
  },
  brandPositioning: {
    title: 'Economics: how each unit generates revenue',
    statements: [
      'Bosque: B2B transport contracts priced by route, miles, and schedule complexity.',
      'Digital Herencia: implementation sprints, monthly retainers, and expansion projects.',
      'Next Gen: creator growth operations and performance-linked revenue share.',
      'SMS: package media services, add-ons, and referral repeat bookings.',
    ],
  },
  brandAssets: {
    title: 'Economics: how each unit generates revenue',
    subtitle:
      'Bosque: B2B transport contracts priced by route, miles, and schedule complexity. Digital Herencia: implementation sprints, monthly retainers, and expansion projects. Next Gen: creator growth operations and performance-linked revenue share. SMS: package media services, add-ons, and referral repeat bookings.',
    entities: [
      {
        name: 'Digital Herencia',
        focus: 'Implementation sprints, monthly retainers, and expansion projects.',
        screenshot:
          'https://raw.githubusercontent.com/DigitalHerencia/SiempreNuevo/refs/heads/main/public/DigitalHerencia.jpeg',
        liveSite: 'https://digitalherencia.vercel.app/',
        repository: 'https://github.com/DigitalHerencia/DigitalHerencia',
        socialLinks: [],
      },
      {
        name: 'Next Gen Management Agency',
        focus: 'Creator growth operations and performance-linked revenue share.',
        screenshot: '/main-logo.png',
        liveSite: 'https://nextgenmanagementagency.vercel.app/',
        repository: 'https://github.com/DigitalHerencia/NextGenManagement',
        socialLinks: [],
      },
      {
        name: 'Southwest Media Services',
        focus: 'Package media services, add-ons, and referral repeat bookings.',
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
          {
            platform: 'Media asset',
            href: 'https://southwestmediaservices.vercel.app/_next/image?url=%2FGrey.png&w=1080&q=75',
          },
        ],
      },
      {
        name: 'The Bosque Ltd',
        focus: 'B2B transport contracts priced by route, miles, and schedule complexity.',
        screenshot: '/Home-Page-Name.png',
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
    title: 'Customers, economics, and money flow by vertical',
    subtitle:
      'Each company has its own slide with a branded infographic of the full 4-step customer-to-cash sequence.',
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    views: [
      {
        label: 'The Bosque Ltd',
        companyName: 'The Bosque Ltd',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer: 'Licensed operators submit transport requests for regulated routes.',
            economics:
              'Pricing baseline is built from route distance, timing, and compliance handling.',
            moneyFlow: 'Opportunity enters pipeline with scope and preliminary quote.',
            userContribution:
              'Run outbound and referral outreach to secure qualified transport requests.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer:
              'Dispatcher and client finalize schedule, custody chain, and delivery constraints.',
            economics: 'Final quote locks expected margin and operational capacity for the route.',
            moneyFlow: 'Approved job converts from lead to confirmed revenue event.',
            userContribution:
              'Confirm route fit, set expectations, and close the transport agreement.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer: 'Client receives compliant pickup, transfer, and delivery execution updates.',
            economics: 'On-time delivery protects margin and increases repeat booking likelihood.',
            moneyFlow: 'Service completion creates billable proof tied to signed delivery records.',
            userContribution:
              'Coordinate handoffs to operations and keep the account aligned through delivery.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer:
              'Accounts team issues invoice and confirms payment terms with customer contacts.',
            economics: 'Cash collection speed determines usable operating capital and growth pace.',
            moneyFlow: 'Collected invoice closes loop and funds route expansion.',
            userContribution:
              'Follow through on invoice status, remove blockers, and open expansion conversations.',
          },
        ],
      },
      {
        label: 'Digital Herencia',
        companyName: 'Digital Herencia',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer: 'SMB owners with lead and follow-up bottlenecks request an audit call.',
            economics: 'Lead source quality sets expected conversion and service delivery effort.',
            moneyFlow: 'Pipeline starts with discovery call and problem inventory.',
            userContribution:
              'Source qualified owners and position the audit around revenue bottlenecks.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer: 'Owner prioritizes implementation goals, constraints, and timeline.',
            economics: 'Scope maps to setup fee, retainer tier, and expansion roadmap.',
            moneyFlow: 'Signed proposal converts discovery into contracted work.',
            userContribution:
              'Translate needs into a clear offer and close the engagement with realistic outcomes.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer: 'Team deploys automation, reporting, and follow-up workflows for daily use.',
            economics: 'Adoption quality drives retention and add-on project opportunities.',
            moneyFlow: 'Milestone delivery validates invoice readiness and ongoing retainer value.',
            userContribution:
              'Own client communication cadence and keep implementation milestones on track.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer: 'Client pays setup invoice and transitions into recurring monthly billing.',
            economics: 'Recurring collections stabilize cash flow and increase predictable margin.',
            moneyFlow: 'Collected payments fund staffing and account expansion capacity.',
            userContribution:
              'Protect renewals, secure payment reliability, and identify expansion opportunities.',
          },
        ],
      },
      {
        label: 'Next Gen Management',
        companyName: 'Next Gen Management',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer: 'Creators enter pipeline through recruiter outreach and inbound screening.',
            economics: 'Acquisition channel quality controls activation cost and initial fit.',
            moneyFlow: 'Qualified applicants move into structured onboarding queue.',
            userContribution: 'Drive recruiter output and ensure only high-fit creators advance.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer: 'Manager and creator align on goals, channels, and operating standards.',
            economics: 'Terms determine revenue share potential and required management effort.',
            moneyFlow: 'Agreement activates managed growth plan and shared incentives.',
            userContribution: 'Set economic expectations and close alignment on execution cadence.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer:
              'Managers execute growth workflows across acquisition and retention channels.',
            economics:
              'Consistent execution increases subscriber retention and average account value.',
            moneyFlow: 'Performance period produces measurable earnings for payout cycles.',
            userContribution:
              'Monitor performance metrics and coach managers on retention-first execution.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer:
              'Revenue share distributions are reconciled and paid against verified performance.',
            economics: 'Reliable payout timing strengthens trust and improves long-term retention.',
            moneyFlow:
              'Net collections recycle into recruiting, manager capacity, and growth channels.',
            userContribution:
              'Validate payout readiness and convert strong accounts into long-term partnerships.',
          },
        ],
      },
      {
        label: 'SMS',
        companyName: 'SMS',
        table: [
          {
            step: 'Step 1 · Acquire customer',
            customer:
              'Media clients request packages through referrals, outreach, and local channels.',
            economics: 'Package mix sets expected labor load and gross revenue per booking.',
            moneyFlow: 'Lead intake captures preferred package and timeline.',
            userContribution:
              'Generate qualified demand and route clients to the best-fit package.',
          },
          {
            step: 'Step 2 · Qualify scope',
            customer:
              'Client confirms deliverables, timeline, and add-ons before production starts.',
            economics: 'Final scope sets invoice total and protects production margin.',
            moneyFlow: 'Deposit or agreement confirmation secures production slot.',
            userContribution:
              'Close package terms cleanly and upsell add-ons that improve customer outcomes.',
          },
          {
            step: 'Step 3 · Deliver work',
            customer: 'Team produces and delivers contracted media assets to the client.',
            economics: 'Delivery quality drives referrals and repeat package purchases.',
            moneyFlow: 'Project acceptance triggers final invoicing and testimonial opportunities.',
            userContribution:
              'Manage handoff quality and keep communication tight through final delivery.',
          },
          {
            step: 'Step 4 · Collect payment',
            customer: 'Client clears final balance and confirms satisfaction for future work.',
            economics: 'Fast collections and repeat bookings increase monthly cash consistency.',
            moneyFlow: 'Collected balances convert fulfilled work into cash and pipeline momentum.',
            userContribution:
              'Ensure collection closure and activate referral follow-up immediately.',
          },
        ],
      },
    ],
  },
  funnelModel: {
    title: 'Role clarity: daily execution sequence',
    subtitle: 'Select a company to review role ownership, KPI scorecards, and the execution path.',
    companies: [
      {
        company: 'Bosque Ltd',
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
        company: 'Digital Herencia LLC',
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
        company: 'Next Gen Management Co',
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
    ],
  },
  marketPenetration: {
    title: 'Role clarity: score each role on outcomes',
    bullets: [
      'Lead generator: qualified lead volume, show rate, and accepted handoff ratio.',
      'Account executive/recruiter: close rate, cycle time, and first invoice milestone.',
      'Manager: retention, expansion, and weekly execution consistency.',
      'Leadership: collected revenue, margin quality, channel efficiency, and repeatable vertical growth.',
    ],
    leadSignals: [
      'Show revenue proof before forecasts',
      'Show operating reliability before scale claims',
      'Require retention and expansion before commission multipliers',
      'Reuse playbooks with role-specific KPIs',
    ],
    diagram: {
      title: 'Market forces model',
      description:
        'Regulation, trust, and channel control shape which growth levers are durable in each market.',
      imagePath: '/diagrams/market-forces.svg',
    },
  },
  role: {
    title: 'Role clarity: what each role owns',
    verticalContributions: [
      {
        vertical: 'Bosque (regulated logistics)',
        primaryRole: 'Account Executive + Operator',
        ownership: [
          'Qualify licensed operators and define route economics clearly before dispatch.',
          'Coordinate compliant handoff from contract close to route execution.',
          'Protect retention by solving scheduling issues before they impact collections.',
        ],
        handoff: 'Win condition: one closed route expands into recurring route volume.',
      },
      {
        vertical: 'Digital Herencia (revenue systems)',
        primaryRole: 'Executive Account Manager',
        ownership: [
          'Run discovery around lead-flow bottlenecks and close scoped engagements.',
          'Translate client pain into implementation priorities with measurable milestones.',
          'Drive retainer continuity through visible weekly progress and expansion planning.',
        ],
        handoff: 'Win condition: first project converts into multi-month retainer + expansion.',
      },
      {
        vertical: 'Next Gen (creator management)',
        primaryRole: 'Recruiter + Manager',
        ownership: [
          'Source creator candidates through Reddit, X, and Telegram with fit screening.',
          'Close onboarding with clear earnings expectations and workflow commitments.',
          'Increase creator retention by managing execution cadence and intervention speed.',
        ],
        handoff: 'Win condition: onboarding quality compounds into retained net revenue.',
      },
      {
        vertical: 'SMS (package services)',
        primaryRole: 'Executive Account Manager',
        ownership: [
          'Qualify inbound demand to match package tier and delivery timeline.',
          'Close package scope with add-on opportunities defined at point of sale.',
          'Capture repeat and referral demand through post-delivery follow-through.',
        ],
        handoff: 'Win condition: booked package expands through add-ons and repeat business.',
      },
    ],
    closingSkills: [
      'Explain economics in plain language',
      'Qualify quickly and hand off cleanly',
      'Protect margin, retention, and expansion in every deal',
      'Execute reliably under operational constraints',
    ],
  },
  responsibilitiesKpis: {
    title: 'Compliance: enforce scorecard and controls',
    responsibilities: [
      'Track every opportunity from source to close with named ownership.',
      'Tie compensation triggers to collected revenue and verified retention milestones.',
      'Document account health weekly: delivery quality, client sentiment, and expansion readiness.',
      'Coach with role metrics before changing compensation terms.',
    ],
    scorecard: [
      {
        company: 'Bosque',
        role: 'Lead Generator',
        kpi: 'Lead quality',
        objective: 'Keep lead flow consistent while protecting close-team calendar quality.',
        benchmarkContext:
          'SaaS SDR teams commonly sustain ~50-60% show rates and ~60-70% opportunity acceptance according to industry benchmarking from Salesforce and Gong.',
        tiers: [
          {
            level: 'Baseline (light effort)',
            effort: '3-4 hrs/week',
            timeCommitment: '30-45 min/day',
            metrics: [
              '10-12 qualified leads/week',
              'Show rate >= 58%',
              'Lead acceptance by AE/recruiter >= 68%',
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
              '14-17 qualified leads/week',
              'Show rate >= 65%',
              'Lead acceptance by AE/recruiter >= 75%',
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
              '20-24 qualified leads/week',
              'Show rate >= 72%',
              'Lead acceptance by AE/recruiter >= 82%',
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
        company: 'FFJ',
        role: 'Account Executive',
        kpi: 'Close performance',
        objective: 'Convert qualified opportunities quickly without discounting margin discipline.',
        benchmarkContext:
          'Mid-market B2B AEs often close ~20-30% of qualified pipeline with sales cycles near 1-2 months per HubSpot and Pavilion reports.',
        tiers: [
          {
            level: 'Baseline (light effort)',
            effort: '4-5 hrs/week',
            timeCommitment: '45-60 min/day',
            metrics: [
              'Close rate >= 22%',
              'Median time-to-close <= 30 days',
              'First-value milestone hit >= 82%',
            ],
            checklist: [
              'Respond to inbound qualified leads within same business day.',
              'Run discovery checklist before sharing pricing.',
              'Confirm onboarding owner before contract signature.',
            ],
          },
          {
            level: 'Growth (focused effort)',
            effort: '7-9 hrs/week',
            timeCommitment: '90 min/day',
            metrics: [
              'Close rate >= 30%',
              'Median time-to-close <= 21 days',
              'First-value milestone hit >= 89%',
            ],
            checklist: [
              'Use objection log and update rebuttals weekly.',
              'Schedule next-step call before ending each sales conversation.',
              'Review lost deals by reason code and adjust qualification.',
            ],
          },
          {
            level: 'Scale (high effort)',
            effort: '12+ hrs/week',
            timeCommitment: '2-3 hrs/day',
            metrics: [
              'Close rate >= 36%',
              'Median time-to-close <= 14 days',
              'First-value milestone hit >= 93%',
            ],
            checklist: [
              'Run daily pipeline review with stage aging alerts.',
              'Build role-specific close playbooks for top two verticals.',
              'Shadow and coach one peer rep weekly to protect consistency.',
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
          'Agency and services businesses commonly target 80-90% annual logo retention and first-response SLAs under one business day, per CustomerSuccess and Zendesk benchmark datasets.',
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
        company: 'SMS',
        role: 'Manager',
        kpi: 'Expansion output',
        objective: 'Turn stable delivery into upsell, referral, and new route/project growth.',
        benchmarkContext:
          'B2B services teams typically see 10-30% expansion win rates and referral participation around 40-70% in healthy books, based on Gainsight and SaaStr operating surveys.',
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
    title: 'Economics: compensation by verified outcomes',
    subtitle:
      'Each equity-ladder level has a tighter operating scope, explicit outcome gates, and realistic compensation bands indexed to collected revenue.',
    tiers: [
      {
        tier: 'L1 — Contributor (0.00% to 0.25% equity pool eligibility)',
        equityBand: 'Eligible for 0.00% to 0.25% advisory pool grant after 2 full quarters.',
        revenueBand: 'Team collected revenue: $30k to $75k per month.',
        promotionGate:
          'Hit KPI scorecard for 90 days, maintain compliance accuracy, and clear weekly execution reviews.',
        roles: [
          {
            role: 'Lead Generator',
            base: '$2,800 to $3,600 / month',
            variable: '$50 per qualified show + 2% of first collected invoice',
            totalRange: '$3,500 to $5,200 / month',
            outcomeGate: 'Minimum 35 qualified leads and >=70% show rate.',
          },
          {
            role: 'Recruiter',
            base: '$3,000 to $3,800 / month',
            variable: '$250 per activated placement + 3% of month-one gross margin',
            totalRange: '$4,000 to $6,400 / month',
            outcomeGate: '4+ activated placements with <=15% first-30-day churn.',
          },
        ],
      },
      {
        tier: 'L2 — Operator (0.25% to 0.75% equity pool eligibility)',
        equityBand:
          'Eligible for 0.25% to 0.75% performance-based options grant with 12-month vesting cliff.',
        revenueBand: 'Team collected revenue: $75k to $180k per month.',
        promotionGate:
          'Sustain retained revenue for 2 consecutive quarters and document process leverage across at least 2 team members.',
        roles: [
          {
            role: 'Account Executive',
            base: '$4,000 to $5,500 / month',
            variable: '6% of new collected revenue + 2% on retained book after month three',
            totalRange: '$7,500 to $12,500 / month',
            outcomeGate: '>=22% close rate and <=45-day average cycle to first payment.',
          },
          {
            role: 'Manager',
            base: '$5,500 to $7,000 / month',
            variable: '3% of team collected revenue + retention kicker up to $1,500',
            totalRange: '$8,500 to $14,000 / month',
            outcomeGate: '>=85% retention and weekly scorecard compliance across team.',
          },
        ],
      },
      {
        tier: 'L3 — Partner Track (0.75% to 2.00% equity pool eligibility)',
        equityBand:
          'Eligible for 0.75% to 2.00% partner-track options grant tied to board-approved milestones.',
        revenueBand: 'Team collected revenue: $180k to $400k+ per month.',
        promotionGate:
          'Lead cross-vertical expansion, maintain margin discipline, and close succession-ready operating playbooks.',
        roles: [
          {
            role: 'Senior Manager / Regional Operator',
            base: '$7,500 to $10,000 / month',
            variable: '4% of regional collected revenue + 1% EBITDA kicker above target',
            totalRange: '$13,000 to $25,000+ / month',
            outcomeGate: '>=88% retention, >=20% YoY expansion, and positive contribution margin.',
          },
        ],
      },
    ],
    disclaimers: [
      'All commissions are paid on collected cash, not signed contract value.',
      'Any chargebacks, compliance breaches, or churn inside guarantee windows are clawback-eligible.',
      'Equity awards require signed plan documents, board approval, and time-based vesting.',
    ],
  },
  cta: {
    title: 'If the role fit is clear, move to protected details and onboarding.',
    subtitle: 'Sign NDA, validate role economics, and execute the offer path.',
    primary: 'Proceed to NDA + offer flow',
    secondary: 'Review role scorecards once more',
  },
  nda: {
    title: 'Confidentiality covenant acknowledgment',
    subtitle:
      'Review and accept these confidentiality terms before any non-public information is disclosed in this deck.',
    statement: [
      'All materials beyond this section are designated Confidential Information and are provided solely for evaluating a potential business relationship. No license, assignment, or transfer of intellectual property is granted by disclosure.',
      'Recipient must hold Confidential Information in strict confidence, apply commercially reasonable safeguards, and refrain from reproducing, distributing, or using the information for any competitive, personal, or unauthorized purpose.',
      'Confidentiality duties commence upon acceptance, remain in effect throughout all discussions, and survive termination of negotiations. If these terms are not accepted, access to protected sections is prohibited.',
    ],
    acknowledgmentLabel:
      'I have reviewed and accept these confidentiality obligations, and I understand acceptance is required to continue.',
  },
  offer: {
    title: 'Offer summary: terms, expectations, and onboarding timeline',
    subtitle:
      'Below is a plain-language summary of the proposed offer package so both parties can align on scope, compensation mechanics, and operating expectations before documents are finalized.',
    terms: [
      {
        category: 'Role scope',
        details:
          'Own prospecting, pipeline progression, and closed-won handoff across assigned accounts using the weekly KPI scorecard as the operating baseline.',
      },
      {
        category: 'Compensation model',
        details:
          'Compensation follows the base + variable framework shown in this deck, with variable payouts tied to collected revenue and retention-qualified performance windows.',
      },
      {
        category: 'Performance expectations',
        details:
          'Maintain forecast accuracy, documented activity quality, and conversion discipline required to sustain payout eligibility and advancement tracks.',
      },
      {
        category: 'Operating cadence',
        details:
          'Participate in weekly scorecard reviews, monthly pipeline planning, and cross-functional handoff reviews with documented follow-through.',
      },
      {
        category: 'Compliance & confidentiality',
        details:
          'Adhere to NDA obligations, customer data handling standards, and company communication policies across all channels and systems.',
      },
      {
        category: 'Start timeline',
        details:
          'Target onboarding begins within 5-10 business days after mutual alignment, with first 30-day priorities agreed before kickoff.',
      },
    ],
    ctaLabel: 'Interested in moving forward? Reach out to begin next-step conversations.',
  },
} satisfies DeckContent;

export const deckContent = validateDeckContent(rawDeckContent);

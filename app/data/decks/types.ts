export type DeckEntity = 'bosque' | 'digitalherencia' | 'nextgen' | 'sms' | 'ffj';

export interface DeckStat {
  label: string;
  value: string;
  sourceRef?: string;
}

export interface DeckDiagram {
  label: string;
  steps: string[];
}

export type RoleType = 'Executive Account Manager' | 'Recruiter' | 'Management';

export interface RoleBlock {
  role: RoleType;
  responsibilities: string[];
  kpis: string[];
}

export interface CompensationBlock {
  role: RoleType;
  newLever: string;
  retentionLever: string;
  expansionLever: string;
  equityNote: string;
  sourceDefined: boolean;
}

export interface ProofBlock {
  claim: string;
  sourceRef: string;
  confidence: 'High' | 'Med' | 'Low';
}

export interface DeckSection {
  id: string;
  type: 'hero' | 'problem' | 'solution' | 'process' | 'proof' | 'roles' | 'compensation' | 'cta';
  headline: string;
  subhead: string;
  bullets: string[];
  stats: DeckStat[];
  diagrams: DeckDiagram[];
  cta: string;
  roleBlocks: RoleBlock[];
  compensationBlocks: CompensationBlock[];
  proofBlocks: ProofBlock[];
  assetRefs: string[];
}

export interface DeckModel {
  brand: {
    name: string;
    tagline: string;
    links: string[];
  };
  themeHint: {
    vibeKeywords: string[];
    accentGuidance: string;
  };
  sections: DeckSection[];
  placeholders: string[];
}

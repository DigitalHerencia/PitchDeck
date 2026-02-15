# Health Report

## TODO checklist (execution log)

- [x] Inventory architecture, routes, components, and data model.
- [x] Run baseline commands (`npm install`, `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`, `npm run test`).
- [x] Add missing repo hygiene scripts (`typecheck`, `format`, `format:check`) and strict lint behavior.
- [x] Add Prettier + EditorConfig and normalize formatting.
- [x] Add guardrails: Husky + lint-staged pre-commit, and CI workflow for install/lint/typecheck/build/test.
- [x] Improve mobile UX (safe-area insets, stable snap scrolling, tap targets, reduced-motion handling, focus states).
- [x] Improve data model resilience with typed content validation.
- [x] Re-run lint/typecheck/build/test to verify clean state.

## Architecture inventory

### App architecture

- Framework: **Next.js 15 App Router**.
- Route entry: `app/(deck)/page.tsx`.
- Layout shell: `app/layout.tsx` with `next-themes` provider (dark default).
- Styling: Tailwind v4 via `app/globals.css` + CSS variables.

### Component structure

- Core deck shell and section rendering live in `app/components/deck/*`.
- Interactive client components include:
  - `DeckShell` (scroll-snap + progress UI)
  - `FunnelSection`, `RevenueEngine`, `CompensationModel` (tab/stage interactions)
  - `AnimatedHeading`, `GradientBackground`, `Section` for shared animation/layout behavior

### Data model

- Primary content model in `app/data/deck.ts`.
- Model now includes runtime validation guardrails for structural invariants (non-empty arrays, unique section order).

## Issues found

1. `typecheck` script was missing from `package.json`.
2. Repo hygiene was incomplete (no Prettier config, no EditorConfig, no CI workflow, no pre-commit guardrail).
3. Scroll handling in `DeckShell` could trigger avoidable high-frequency state updates.
4. Safe-area inset handling for iOS notch/home indicator was not explicit.
5. Several interactive controls needed stronger accessibility semantics/focus treatment.
6. Motion timing was not tokenized across components.

## Fixes applied

### Build/lint/typecheck/run stability

- Added scripts: `typecheck`, `format`, `format:check`, and `prepare`.
- Updated lint command to fail on warnings (`eslint . --max-warnings=0`).
- Kept test command explicit as placeholder (`No automated tests yet`) for predictable CI.

### Repo hygiene

- Added `.prettierrc.json`, `.prettierignore`, `.editorconfig`.
- Updated ESLint config to include `prettier` compatibility.
- Reviewed and retained existing `.gitignore` coverage.
- Updated README architecture/scripts section.

### Guardrails

- Added Husky pre-commit hook running `lint-staged`.
- Added `lint-staged` config to run Prettier + ESLint fix on staged files.
- Added GitHub Actions workflow (`.github/workflows/ci.yml`) for install/lint/typecheck/build/test.

### Mobile-first UI/UX and accessibility

- Stabilized deck scroll behavior with RAF-throttled active section updates.
- Added safe-area-aware layout/padding for section content and footer progress UI.
- Added consistent minimum tap targets (`min-h-11`/`min-h-12`) and focus-visible outlines.
- Added tab semantics (`role=tablist`, `role=tab`, `role=tabpanel`) where appropriate.
- Improved heading hierarchy by promoting hero heading to `h1`.
- Centralized motion durations/easing in `app/lib/motion.ts` and reused across components.
- Added reduced-motion fallback behavior at both component and global CSS levels.

### Performance notes

- Reduced re-render pressure in `DeckShell` by avoiding redundant `setState` and throttling scroll updates.
- Removed global scroll-linked transform in each section to reduce layout thrash risk.
- Lazy-loaded non-critical interactive sections (`FunnelSection`, `RevenueEngine`, `CompensationModel`) with lightweight loading placeholders.
- Build output improved first-load JS from 155kB to 152kB after optimization pass.

## Remaining risks / known limitations

1. The `test` script is a placeholder; there is still no automated test harness for interaction regressions.
2. Legacy component files outside `app/components/deck/*` remain in repository and appear unused; they were intentionally left to avoid unrelated refactor blast radius.
3. Lighthouse/Core Web Vitals are not yet captured via CI budget checks.

## Mobile LCP / CLS considerations

- **LCP**: hero section is text-first with no heavy hero bitmap, helping early render on mid-range phones.
- **CLS**: section heights are constrained to viewport (`min-h-dvh`) and loading placeholders reserve space in lazy components.
- **Animation cost**: transitions use opacity/translate and reduced-motion fallback; scroll event handling is throttled.
- **Further gains**: add `next/font` for deterministic font loading and run Lighthouse traces per viewport profile.

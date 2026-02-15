## Bosque Ltd v4.0 Pitch Deck

Mobile-first animated acquisition deck built with Next.js 15 App Router, Framer Motion, and Tailwind CSS v4.

### Project architecture

- `app/(deck)/page.tsx`: root route entry for the deck.
- `app/components/deck/*`: section primitives and feature components.
- `app/data/deck.ts`: typed content model + runtime validation.
- `app/lib/motion.ts`: shared motion tokens for consistent transitions.
- `app/globals.css`: design tokens, global motion/accessibility behavior, and scroll stability rules.

### Scripts

- `npm run dev` - start local development server.
- `npm run lint` - run ESLint and fail on warnings.
- `npm run typecheck` - run strict TypeScript checks.
- `npm run build` - build for production.
- `npm run format` - apply Prettier formatting.
- `npm run format:check` - verify formatting.
- `npm run test` - placeholder test command.

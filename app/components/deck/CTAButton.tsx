import { ArrowUpRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function CTAButton({ children, variant = 'primary' }: CTAButtonProps) {
  const shared =
    'inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300';

  return (
    <button
      type="button"
      className={
        variant === 'primary'
          ? `${shared} bg-[var(--accent)] text-black hover:brightness-110`
          : `${shared} border border-zinc-700 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900/70`
      }
    >
      {children}
      <ArrowUpRight size={16} aria-hidden />
    </button>
  );
}

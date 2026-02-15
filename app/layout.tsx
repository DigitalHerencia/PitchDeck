import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/components/providers/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Gen Management | Executive Account Manager Deck',
  description: 'Mobile-first growth and recruitment deck for Next Gen Management.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

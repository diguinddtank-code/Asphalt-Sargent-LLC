import type {Metadata} from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Asphalt Sargent | Paving & Concrete Experts',
  description: 'Premium asphalt paving, sealcoating, and concrete repair in Southfield, MI.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-body bg-neutral-950 text-neutral-50 antialiased selection:bg-orange-500 selection:text-neutral-950" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

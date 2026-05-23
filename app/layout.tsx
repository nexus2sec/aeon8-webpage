import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Aeon8 Systems | Sovereign Cybersecurity & Kernel Engineering',
  description:
    "Aeon8 Systems - India's kernel-grade network security company and cybersecurity education institute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import ServicesPageClient from './ServicesPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immigration Services | Carmine Mercorella Legal',
  description:
    'Explore our full range of Australian immigration services including partner, family, skilled, and work visas. Trusted advice from Carmine Mercorella Legal.',
  keywords: [
    'Australian immigration services',
    'partner visa',
    'family visa',
    'skilled visa',
    'work visa',
    'migration lawyer',
    'Carmine Mercorella',
    'immigration agent Australia',
  ],
  openGraph: {
    title: 'Immigration Services | Carmine Mercorella Legal',
    description:
      'Professional migration support including partner, family, skilled, and work visas. Let Carmine Mercorella Legal guide you through the process.',
    url: 'https://www.carminemercorellalegal.com/services',
    siteName: 'Carmine Mercorella Legal',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}

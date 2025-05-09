import SponsoredVisaClient from './SponsoredVisaClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsored Visa | Carmine Mercorella Legal',
  description:
    'Explore all sponsored visa pathways in Australia including Employer-Sponsored (482, 186, 494) and State Nominated (491, 190) options. Trusted legal guidance by Carmine Mercorella Legal.',
  keywords: [
    'sponsored visa Australia',
    'employer sponsored visa',
    'TSS 482 visa',
    'ENS 186 visa',
    '494 visa regional sponsored',
    '491 state nominated visa',
    '190 skilled nominated visa',
    'labour market testing Australia',
    'state sponsorship visa',
    'migration lawyer Adelaide',
    'Carmine Mercorella Legal'
  ],
  openGraph: {
    title: 'Sponsored Visa | Carmine Mercorella Legal',
    description:
      'Skilled visa support for employer and state sponsored pathways including 482, 186, 494, 491 and 190 visas. Get expert legal help with nominations and applications.',
    url: 'https://www.carminemercorellalegal.com/visa/sponsored-visa',
    siteName: 'Carmine Mercorella Legal',
    type: 'website',
  },
};

export default function SponsoredVisaPage() {
  return <SponsoredVisaClient />;
}

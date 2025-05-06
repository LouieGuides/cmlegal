import PartnerVisaClient from './PartnerVisaClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Visa | Carmine Mercorella Legal',
  description:
    'Explore the Partner Visa options available for reuniting with your partner in Australia. Get expert guidance from Carmine Mercorella Legal.',
  keywords: [
    'Partner Visa',
    'Australian Partner Visa',
    'Carmine Mercorella',
    'immigration lawyer',
    'migration expert Australia',
    'partner visa application',
    'partner visa eligibility',
    'partner visa requirements',
    'partner visa process',
    'partner visa support',
    'partner visa assistance',
    'partner visa advice',
    'partner visa lawyer',
    'partner visa agent',
    'partner visa services',
    'partner visa Australia',
    'partner visa subclass 820',
  ],
  openGraph: {
    title: 'Partner Visa | Carmine Mercorella Legal',
    description:
      'Explore the Partner Visa options available for reuniting with your partner in Australia. Get expert guidance from Carmine Mercorella Legal.',
    url: 'https://www.carminemercorellalegal.com/visa/partner-visa',
    siteName: 'Carmine Mercorella Legal',
    type: 'website',
  },
};

export default function PartnerVisaPage() {
  return <PartnerVisaClient />;
}

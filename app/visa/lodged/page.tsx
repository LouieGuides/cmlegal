import VisaLodgedClient from './VisaLodgedClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Lodged | Carmine Mercorella Legal',
  description:
    'Need help with your visa application in Australia? Get expert assistance from Carmine Mercorella Legal to ensure a smooth process.',
  keywords: [
    'visa lodged Australia',
    'visa application assistance',
    'migration lawyer',
    'Carmine Mercorella Legal',
    'visa application process',
    'visa application support',
    'visa application advice',
    'visa application help',
    'visa application lawyer',
    'visa application agent',
    'visa application services',
    'visa application requirements',
    'visa application eligibility',
    'visa application documents',
    'visa application checklist',
  ],
  openGraph: {
    title: 'Visa Lodged | Carmine Mercorella Legal',
    description:
      'Need help with your visa application in Australia? Get expert assistance from Carmine Mercorella Legal to ensure a smooth process.',
    url: 'https://www.carminemercorellalegal.com/visa/lodged',
    siteName: 'Carmine Mercorella Legal',
    type: 'website',
  },
};

export default function VisaLodgedPage() {
  return <VisaLodgedClient />;
}
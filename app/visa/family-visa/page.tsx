import FamilyVisaClient from './FamilyVisaClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Family Visa | Carmine Mercorella Legal',
  description:
    'Explore Australian Family Visa options including Parent, Child, and Relative visas. Get expert help from Carmine Mercorella Legal to reunite with your loved ones in Australia.',
  keywords: [
    'Family visa Australia',
    'Parent visa',
    'Child visa',
    'Remaining relative visa',
    'Carer visa',
    'Subclass 143',
    'Subclass 103',
    'Subclass 802',
    'Family migration',
    'Australian immigration lawyer',
    'Carmine Mercorella',
    'migration agent Adelaide',
  ],
  openGraph: {
    title: 'Family Visa | Carmine Mercorella Legal',
    description:
      'Reunite with your family in Australia with our expert legal help. Parent, child, and other family visa services provided by Carmine Mercorella Legal.',
    url: 'https://www.carminemercorellalegal.com/visa/family-visa',
    siteName: 'Carmine Mercorella Legal',
    type: 'website',
  },
};

export default function FamilyVisaPage() {
  return <FamilyVisaClient />;
}

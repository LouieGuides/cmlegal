import VisaAppealClient from './VisaAppealClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Appeal | Carmine Mercorella Legal',
  description:
    'Had a visa refused or cancelled in Australia? Get expert legal representation for your visa appeal through the AAT. Learn how Carmine Mercorella Legal can help.',
  keywords: [
    'visa appeal Australia',
    'AAT migration appeal',
    'appeal visa refusal',
    'visa cancellation help',
    'ministerial intervention',
    'immigration tribunal Australia',
    'partner visa refusal appeal',
    'student visa appeal',
    'migration lawyer Adelaide',
    'Carmine Mercorella Legal'
  ],
  openGraph: {
    title: 'Visa Appeal | Carmine Mercorella Legal',
    description:
      'We help individuals appeal their visa refusal or cancellation in Australia. Expert representation at the AAT by Carmine Mercorella Legal.',
    url: 'https://www.carminemercorellalegal.com/visa/visa-appeal',
    siteName: 'Carmine Mercorella Legal',
    type: 'website',
  },
};

export default function VisaAppealPage() {
  return    <VisaAppealClient />;
}

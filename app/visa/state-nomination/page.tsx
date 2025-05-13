import StateNominationClient from './StateNominationClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'State Nomination | Carmine Mercorella Legal',
    description:
        'Explore the State Nomination process for skilled migration in Australia. Get expert guidance from Carmine Mercorella Legal.',
    keywords: [
        'State Nomination',
        'Australian State Nomination',
        'Carmine Mercorella',
        'immigration lawyer',
        'migration expert Australia',
        'state nomination application',
        'state nomination eligibility',
        'state nomination requirements',
        'state nomination process',
        'state nomination support',
        'state nomination assistance',
        'state nomination advice',
        'state nomination lawyer',
        'state nomination agent',
        'state nomination services',
        'state nomination Australia',
        'state nomination subclass 190',
        'state nomination subclass 491',
        'state nomination visa',
        'state nomination criteria',
    ],
    openGraph: {
        title: 'State Nomination | Carmine Mercorella Legal',
        description:
            'Explore the State Nomination process for skilled migration in Australia. Get expert guidance from Carmine Mercorella Legal.',
        url: 'https://www.carminemercorellalegal.com/visa/state-nomination',
        siteName: 'Carmine Mercorella Legal',
        type: 'website',
    },
};
export default function StateNominationPage() {
    return <StateNominationClient />;
}
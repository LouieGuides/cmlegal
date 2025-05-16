import StudentVisaClient from './StudentVisaClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Visa | Carmine Mercorella Legal',
    description:
        'Explore the Student Visa options available for studying in Australia. Get expert guidance from Carmine Mercorella Legal.',
    keywords: [
        'Student Visa',
        'Australian Student Visa',
        'Carmine Mercorella',
        'immigration lawyer',
        'migration expert Australia',
        'student visa application',
        'student visa eligibility',
        'student visa requirements',
        'student visa process',
        'student visa support',
    ],
    openGraph: {
        title: 'Student Visa | Carmine Mercorella Legal',
        description:
            'Explore the Student Visa options available for studying in Australia. Get expert guidance from Carmine Mercorella Legal.',
        url: 'https://www.carminemercorellalegal.com/visa/student-visa',
        siteName: 'Carmine Mercorella Legal',
        type: 'website',
    },
};

export default function StudentVisaPage() {
    return <StudentVisaClient />;
}
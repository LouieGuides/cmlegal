/* eslint-disable @next/next/no-img-element */
'use client';

import Services from '@/components/Services';
import Visas from '@/components/Visas';

export default function ServicesPageClient() {
  return (
    <main className="min-h-screen text-base-content bg-base-100">
        {/* Hero Section */}
        <section className="relative h-[400px] w-full">
            <img
            src="/images/cmlegal-background-3.png"
            alt="Carmine Mercorella Legal"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            />
            <div className="absolute inset-0 bg-[#0c0950]/70 flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
                <p className="mt-4 text-lg text-[#d4ebf8] max-w-2xl mx-auto">
                A Legacy of Expertise and Integrity
                </p>
            </div>
            </div>
        </section>

        <Services />

        <Visas />

        {/* HOW WE HELP SECTION */}
        <section className="bg-[#D4EBF8]">
        <div className="max-w-screen-2xl mx-auto px-4 pb-20 pt-20 text-center">
            <h2 className="text-4xl text-black font-bold mb-4">How We Help You Migrate</h2>
            <p className="text-black md:text-lg mb-10 text-base-content">
            Whether you're reuniting with family, advancing your career, or starting a new chapter in Australia, 
            our firm delivers comprehensive legal and migration support—every step of the way.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-10 shadow-md bg-white text-black rounded-[0] transition shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white duration-300">
                <div className="card-body">
                <h3 className="font-semibold text-xl mb-2">Visa Eligibility Assessment</h3>
                <p>We evaluate your situation to determine the most suitable visa pathway.</p>
                </div>
            </div>
            <div className="card p-10 shadow-md bg-white text-black rounded-[0] transition shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white duration-300">
                <div className="card-body">
                <h3 className="font-semibold text-xl mb-2">Document Preparation & Submission</h3>
                <p>Our team ensures your application is accurate, complete, and submitted on time.</p>
                </div>
            </div>
            <div className="card p-10 shadow-md bg-white text-black rounded-[0] transition shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white duration-300">
                <div className="card-body">
                <h3 className="font-semibold text-xl mb-2">Liaison with Immigration Authorities</h3>
                <p>We communicate directly with the Department of Home Affairs on your behalf.</p>
                </div>
            </div>
            <div className="card p-10 shadow-md bg-white text-black rounded-[0] transition shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white duration-300">
                <div className="card-body">
                <h3 className="font-semibold text-xl mb-2">Ongoing Legal Support</h3>
                <p>From initial consultation to final approval, we're with you all the way.</p>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 pb-20 pt-20 text-center">
            <h2 className="text-4xl text-black font-bold mb-4">Why Choose Carmine Mercorella Legal?</h2>
            <p className="text-black md:text-lg mb-10">
            Clients across Australia and around the world trust our legal team for honest advice, strategic 
            advocacy, and a proven record of success in complex migration matters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-10 bg-[#D4EBF8] rounded-[0] text-black shadow-md transition shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white duration-300">
                <div className="card-body">
                <h3 className="text-xl font-semibold mb-2">Certified Migration Agent</h3>
                <p>Registered with the Law Society of South Australia and MARA (Migration Agents Registration Authority).</p>
                </div>
            </div>
            <div className="card p-10 bg-[#D4EBF8] rounded-[0] text-black shadow-md transition shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white duration-300">
                <div className="card-body">
                <h3 className="text-xl font-semibold mb-2">Tailored Legal Strategy</h3>
                <p>We don't believe in one-size-fits-all. Your case receives personal attention from day one.</p>
                </div>
            </div>
            <div className="card p-10 bg-[#D4EBF8] rounded-[0] text-black shadow-md transition shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white duration-300">
                <div className="card-body">
                <h3 className="text-xl font-semibold mb-2">Track Record of Results</h3>
                <p>We've helped hundreds of individuals and families achieve their migration goals with confidence.</p>
                </div>
            </div>
            </div>
        </div>
        </section>


    </main>
  );
}

/* eslint-disable @next/next/no-img-element */
'use client';

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

      <div className="w-full bg-[#D4EBF8] py-16">        
            {/* Full-width container */}
            <div className="max-w-screen-2xl mx-auto px-4 pb-20 pt-20 m-[-50px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "Visa Appeal Support",
                        description: "Get expert help to challenge and appeal your visa refusal decisions effectively.",
                        href: "/visa-appeal",
                        label: "Appeal Your Visa Decision"
                    },
                    {
                        title: "Partner Visa Assistance",
                        description: "We guide you through the process of reuniting with your partner in Australia.",
                        href: "/visa/partner-visa",
                        label: "Apply for a Partner Visa"
                    },
                    {
                        title: "Skilled Visa Pathways",
                        description: "Explore your eligibility and apply for skilled migration to boost your career.",
                        href: "/skilled-visas",
                        label: "Start Your Skilled Visa Application"
                    },
                    {
                        title: "State Nomination",
                        description: "Secure nomination from Australian states for Subclass 190 or 491 visas.",
                        href: "/state-nomination",
                        label: "Check State Nomination Options"
                    },
                    {
                        title: "Business Visa Support",
                        description: "Start or invest in a business in Australia with our visa advisory services.",
                        href: "/business-visa",
                        label: "Talk to a Business Visa Advisor"
                    },
                    {
                        title: "Student Visa Guidance",
                        description: "Apply for your student visa and get support for enrollment and compliance.",
                        href: "/student-visa",
                        label: "Get Help with a Student Visa"
                    }
                    ].map((service, index) => (
                    <div
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                        data-aos-delay={index * 100}
                        className="card group w-full h-[240px] bg-white border text-black rounded-none border-gray-300 shadow-sm transition-all duration-300 hover:bg-[#0C0950] hover:text-white"
                    >
                        <div className="card-body p-6 flex flex-col">
                        <h3 className="card-title text-xl font-semibold">{service.title}</h3>
                        <p className="flex-grow">{service.description}</p>
                        <a
                            href={service.href}
                            className="flex items-center gap-1 text-blue-600 group-hover:text-white hover:underline transition-colors duration-200 mt-auto"
                        >
                            <span>{service.label}</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M3 12h18" />
                            </svg>
                        </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

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

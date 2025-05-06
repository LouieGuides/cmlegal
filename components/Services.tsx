'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false, // animate only once per scroll
          easing: 'ease-in-out',
          offset: 100
        });
      }, []);
      

    return (
    <div className="w-full bg-[#D4EBF8] py-16">
      
      {/* Section Title */}
      <div className="bg-[#0C0950] w-[90%] md:w-[60%] flex flex-row items-center py-15"> 
        <h2
            className="text-4xl md:text-5xl font-bold text-white mb-12 px-10 md:px-55"
            data-aos="fade-up"
        >
            We Can Help You With:
        </h2>
      </div>
     
      {/* Full-width container */}
      <div className="max-w-screen-2xl mx-auto px-4 pb-20 m-[-50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
            {
                title: "Visa Appeal Support",
                description: "Get expert help to challenge and appeal your visa refusal decisions effectively.",
                href: "/visa/appeal",
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
                href: "/visa/skilled-visa",
                label: "Start Your Skilled Visa Application"
            },
            {
                title: "State Nomination",
                description: "Secure nomination from Australian states for Subclass 190 or 491 visas.",
                href: "/visa/state-nomination",
                label: "Check State Nomination Options"
            },
            {
                title: "Business Visa Support",
                description: "Start or invest in a business in Australia with our visa advisory services.",
                href: "/visa/business-visa",
                label: "Talk to a Business Visa Advisor"
            },
            {
                title: "Student Visa Guidance",
                description: "Apply for your student visa and get support for enrollment and compliance.",
                href: "/visa/student-visa",
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
  );
}

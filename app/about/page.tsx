/* eslint-disable @next/next/no-img-element */
'use client';

import { BadgeCheck, ShieldCheck, Users, Scale, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="text-gray-800">

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
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Carmine Mercorella Legal</h1>
            <p className="mt-4 text-lg text-[#d4ebf8] max-w-2xl mx-auto">
              A Legacy of Expertise and Integrity
            </p>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Introduction */}
        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            At <strong className="text-[#161179]">Carmine Mercorella Legal</strong>, we believe that immigration is more than just a legal process — it is a life-changing journey.
          </p>
          <p>
            Guided by a commitment to precision, ethics, and client-centered service, we provide strategic immigration solutions designed to empower individuals, families, and businesses across Australia and beyond.
          </p>
          <p>
            Led by Managing Director <strong className="text-[#161179]">Carmine Mercorella</strong>, a respected expert in Australian immigration law with over two decades of experience, our firm has built a reputation for excellence, trusted advice, and unwavering client advocacy.
          </p>
          <p>
            We pride ourselves on our careful attention to detail, transparent communication, and commitment to achieving the best outcomes for every client.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-[#d4ebf8] rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-8 h-8 text-[#161179]" />
            <h2 className="text-2xl font-semibold text-[#161179]">Our Mission</h2>
          </div>
          <p className="text-gray-700 text-lg">
            To provide strategic, ethical, and expert immigration services that empower individuals and businesses to build lasting futures in Australia.
          </p>
        </section>

        {/* Values */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <Scale className="w-8 h-8 text-[#161179]" />
            <h2 className="text-2xl font-semibold text-[#161179]">Our Values</h2>
          </div>
          <ul className="space-y-4 text-gray-800 text-lg">
            <li className="flex items-start gap-3">
              <BadgeCheck className="mt-1 w-6 h-6 text-green-600" />
              <span>
                <strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in every client matter.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="mt-1 w-6 h-6 text-green-600" />
              <span>
                <strong>Excellence:</strong> We are committed to delivering superior legal services with precision and care.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BadgeCheck className="mt-1 w-6 h-6 text-green-600" />
              <span>
                <strong>Client Commitment:</strong> Our clients' success is our priority. We listen, we advocate, and we deliver.
              </span>
            </li>
          </ul>
        </section>

        {/* Meet Carmine */}
        <section className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-8 h-8 text-[#161179]" />
            <h2 className="text-2xl font-semibold text-[#161179]">Meet Carmine Mercorella</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 20 years' experience navigating Australia's complex migration landscape, Carmine Mercorella combines technical excellence with a genuine passion for helping people achieve their migration goals.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            His reputation for integrity, strategic thinking, and client care has made him a trusted advisor to individuals and businesses across Australia.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-[#161179] rounded-xl text-white px-8 py-12 text-center shadow-lg">
          <Mail className="mx-auto w-10 h-10 mb-4 text-[#d4ebf8]" />
          <h2 className="text-3xl font-bold mb-2">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6">Book a consultation with Carmine Mercorella and take the next step toward your future in Australia.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#161179] font-semibold px-6 py-3 rounded-full hover:bg-[#d4ebf8] transition"
          >
            Book a Consultation
          </a>
        </section>
      </div>
    </div>
  );
}

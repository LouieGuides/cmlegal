/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect } from 'react';
import { FaUserTie, FaBalanceScale, FaLightbulb, FaMapMarkedAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="bg-[#0C0950] py-24 px-5">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

        {/* Left Side - Why Choose Us */}
        <div className="col-span-2 flex flex-col justify-between" data-aos="fade-right">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Why Choose Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div
              className="p-8 border-2 border-transparent hover:bg-[#D4EBF8] shadow-md bg-white flex flex-col items-center justify-between h-full text-center transform transition-all duration-500"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <FaUserTie className="text-4xl text-[#0C0950] mb-4" />
              <h4 className="text-2xl font-semibold text-[#0C0950] mb-4">Proven Expertise</h4>
              <p className="text-gray-600 leading-relaxed">With over 20 years of hands-on experience, we deliver knowledgeable, strategic advice tailored to your unique circumstances.</p>
            </div>

            <div
              className="p-8 border-2 border-transparent hover:bg-[#D4EBF8]  shadow-md bg-white flex flex-col items-center justify-between h-full text-center transform transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaBalanceScale className="text-4xl text-[#0C0950] mb-4" />
              <h4 className="text-2xl font-semibold text-[#0C0950] mb-4">Ethical Guidance</h4>
              <p className="text-gray-600 leading-relaxed">We are committed to the highest standards of honesty, integrity, and professionalism in every matter we undertake.</p>
            </div>

            <div
              className="p-8 border-2 border-transparent hover:bg-[#D4EBF8]  shadow-md bg-white flex flex-col items-center justify-between h-full text-center transform transition-all duration-500"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <FaLightbulb className="text-4xl text-[#0C0950] mb-4" />
              <h4 className="text-2xl font-semibold text-[#0C0950] mb-4">Personalised Solutions</h4>
              <p className="text-gray-600 leading-relaxed">No two cases are alike. We listen carefully to your goals and craft bespoke strategies that reflect your needs and aspirations.</p>
            </div>

            <div
              className="p-8 border-2 border-transparent hover:bg-[#D4EBF8]  shadow-md bg-white flex flex-col items-center justify-between h-full text-center transform transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaMapMarkedAlt className="text-4xl text-[#0C0950] mb-4" />
              <h4 className="text-2xl font-semibold text-[#0C0950] mb-4">Begin Your Journey</h4>
              <p className="text-gray-600 leading-relaxed">Your future in Australia deserves the right foundation. Trust Carmine Mercorella Legal to guide you with care, expertise, and integrity every step of the way.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Us Button with Background and Hover Effect */}
        <div className="relative flex justify-center items-center overflow-hidden group h-full min-h-full" data-aos="fade-left">
            {/* Optimized Background Image */}
            <img
                src="/images/cmlegal-background-6.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="lazy"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 p-10 text-center flex flex-col items-center justify-center w-full h-full">
                <h4 className="text-2xl font-bold text-white mb-6">Ready to Start?</h4>
                <a
                href="/contact"
                className="inline-block bg-[#f4c55b] text-[#0C0950] font-semibold px-8 py-4 rounded-full shadow-md hover:brightness-90 transition"
                >
                Contact Us Today
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}
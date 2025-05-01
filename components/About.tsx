'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="bg-[#D4EBF8] py-24 relative overflow-hidden text-center md:text-left">
      {/* Animated Circle */}
      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-[#f4c55b] rounded-full animate-pulse z-0 opacity-40 md:block hidden" />

      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Text Content */}
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C0950] mb-6">
            About Carmine Mercorella Legal
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Carmine Mercorella Legal, we provide comprehensive immigration solutions, rooted in over two decades of experience and a dedication to the highest standards of professional service. Whether you are applying for a skilled visa, seeking employer sponsorship, reuniting with family, or navigating complex immigration challenges, we stand by you — offering clear advice, strategic support, and unwavering confidentiality.
          </p>
          <a
            href="/about"
            className="inline-block bg-[#f4c55b] text-[#0C0950] font-semibold px-6 py-3 rounded-md shadow-md hover:brightness-90 transition"
          >
            Learn More About Us
          </a>
        </div>

        {/* Animated Visual */}
        <div className="flex justify-center" data-aos="fade-left">
          <div className="w-[280px] h-[280px] rounded-full border-4 border-[#0C0950] flex items-center justify-center relative">
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-yellow-300 animate-[ping_2s_linear_infinite] opacity-20"></div>
            <span className="text-[#0C0950] font-bold text-xl text-center leading-tight px-6">
              Trusted Australian <br /> Immigration Lawyer & Agent
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

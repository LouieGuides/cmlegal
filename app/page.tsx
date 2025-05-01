import AboutUs from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Visas from "@/components/Visas";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <div
        className="relative min-h-[50vh] flex items-center text-white bg-[#050C9C] md:bg-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/cmlegal-background-6.png")`,
        }}
      >
        {/* ✅ Dark overlay on all devices */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* ✅ Centered content with padding */}
        <div className="z-10 flex-col gap-4 px-10 md:px-55 ">
          <span className="text-sm md:text-[20px] ">Carmine Mercorella Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Expertise. Integrity. Commitment...
          </h1>
          <p className="text-lg w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[75%]">
            Navigating Australia&rsquo;s immigration system is a profound journey — one that requires trusted guidance, precise expertise, and a steadfast commitment to your future.
          </p>
          <button className="btn bg-[#f4c55b] mt-10 text-[14px] md:text-lg w-[320] md:w-[400] text-[#000957] border-0">
            Schedule Confidential Consultation
          </button>
        </div>
      </div>

      <Visas />

      <Services />
      
      <section className="bg-[#0C0950] text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Ready to Start Your Australian Journey?
            </h2>
            <p className="text-lg text-white/90">
              Whether it&rsquo;s migration, sponsorship, or legal guidance, we&rsquo;re here to help you every step of the way.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="/contact"
              className="btn bg-[#f4c55b] text-[#0C0950] text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:brightness-90 transition"
            >
              Schedule Consultation
            </a>
          </div>
          
        </div>
      </section>

      <AboutUs />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

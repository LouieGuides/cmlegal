'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const testimonials = [
    {
      name: "Maria G.",
      title: "Visa Approved in 4 Weeks",
      text: "Carmine and his team helped me navigate the visa process with confidence. Their support was outstanding from start to finish!",
      rating: 5
    },
    {
      name: "Jason T.",
      title: "Permanent Residency Success",
      text: "Professional, prompt, and truly caring. I couldn’t have achieved PR without their expertise. Highly recommended!",
      rating: 5
    },
    {
      name: "Aisha K.",
      title: "Partner Visa Support",
      text: "They explained every step clearly and helped reunite me with my partner in Australia. Eternally grateful!",
      rating: 5
    },
    {
      name: "Liam R.",
      title: "Business Visa Made Easy",
      text: "From consultation to approval, Carmine’s office was exceptional. I was able to launch my startup in Sydney hassle-free.",
      rating: 5
    },
    {
      name: "Sophia D.",
      title: "Student Visa Guidance",
      text: "They helped me transition smoothly to study in Melbourne. Truly supportive and responsive team!",
      rating: 5
    },
    {
      name: "Nathan W.",
      title: "Visa Appeal Turnaround",
      text: "I was devastated by my visa refusal, but this team turned it around. I now have the chance to stay and work here!",
      rating: 5
    }
  ];

  return (
    <section className="bg-[#D4EBF8] py-20">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0C0950] mb-12" data-aos="fade-up">
          What Our Clients Say
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-left transition-all duration-300 hover:bg-[#0C0950] hover:text-white text-[#0C0950] h-full flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <p className="mb-4 italic">“{t.text}”</p>
                <div className="flex gap-1 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.316 4.043 4.241.017c.969.004 1.371 1.24.588 1.81l-3.44 2.49 1.29 4.135c.285.917-.755 1.681-1.54 1.118L10 14.347l-3.406 2.193c-.785.563-1.825-.2-1.54-1.118l1.29-4.135-3.44-2.49c-.783-.57-.38-1.806.588-1.81l4.241-.017 1.316-4.043z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <span className="text-sm">{t.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

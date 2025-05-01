/* eslint-disable @next/next/no-img-element */
'use client';

import React from "react";

export default function Visas() {
  const animation = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll('.card');
    const reset = () => {
      cards.forEach((card) => {
        card.classList.remove('animation');
      });
    };
    const target = e.target as HTMLElement;
    if (!target.closest('.card')) return;
    reset();
    (e.target as HTMLElement).parentElement?.classList.add('animation');
  };

  const cards = [
    {
      src: "/images/Family-Visa.jpg",
      title: "Family & Parents",
      desc: "Reunite with loved ones through Australia's family sponsorship options.",
      link: "/family-visa",
    },
    {
      src: "/images/Partner-Visa.jpg",
      title: "Partner Visa",
      desc: "Live in Australia with your spouse or de facto partner.",
      link: "/partner-visa",
    },
    {
      src: "/images/Skilled-Working-Visa.jpg",
      title: "Skilled Visa",
      desc: "Migrate to Australia with in-demand skills and build your career.",
      link: "/skilled-visa",
    },
    {
      src: "/images/Sponsored-Visa.jpg",
      title: "Sponsored Visa",
      desc: "Get sponsored by an Australian employer or state government.",
      link: "/sponsored-visa",
    },
    {
      src: "/images/Visa-Appeal.jpg",
      title: "Visa Appeal",
      desc: "Need help with a rejected visa? Our experts can assist.",
      link: "/visa-appeal",
      defaultActive: true,
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-white flex gap-1 py-1 flex-col md:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={animation}
            className={`card relative ${
              index === 4 ? 'md:flex-[2]' : 'md:flex-1'
            } flex-1 h-[30vmin] cursor-pointer overflow-hidden transition-all rounded-none duration-700 ${
              card.defaultActive ? 'animation' : ''
            }`}
          >
            <img
              src={card.src}
              className="w-full h-full object-cover m-0 p-0 rounded-none"
              alt={card.title}
              loading="lazy"
            />

            <div className="absolute bottom-0 left-0 bg-black/60 text-white px-4 py-2 text-base md:text-lg font-semibold z-10">
              {card.title}
            </div>

            <div className="absolute inset-0 bg-black/70 text-white p-9 opacity-0 transition-opacity duration-500 card-content flex flex-col justify-center items-start z-20">
              <h2 className="text-1xl md:text-2xl font-bold mb-2">{card.title}</h2>
              <p className="mb-4 max-w-sm">{card.desc}</p>
              <a
                href={card.link}
                className="underline text-blue-200 hover:text-blue-400 text-sm md:text-base"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

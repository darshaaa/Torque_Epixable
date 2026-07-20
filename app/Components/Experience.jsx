// components/Experience.jsx
// Usage in landing page: import Experience from '@/components/Experience'
// Then add: <Experience />

import React from 'react';

const stats = [
  { value: '2+', label: 'Years of Excellence' },
  { value: '500+', label: 'Vehicles Serviced' },
  { value: '4', label: 'Premium Brand Partners' },
  { value: '100%', label: 'Honest Advisory' },
];

const brands = ['Avery Dennison', 'XPEL', 'Hexis', 'Onyx Coatings'];

export default function Experience() {
  return (
    <section className="relative bg-black text-white py-15 overflow-hidden">

      {/* Background TORQUE text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(120px,20vw,260px)] text-white/[0.025] whitespace-nowrap pointer-events-none select-none tracking-widest font-bold">
        TORQUE
      </span>

      <div className="relative z-10 max-w-[1200px] mx-auto px-10 max-md:px-6">

        {/* Tag */}
        <span className="inline-block text-[11px] font-medium tracking-[0.25em] uppercase text-[#00DAFF] border border-[rgba(0,218,255,0.35)] px-4 py-1.5 mb-8">
          Our Story &amp; Experience
        </span>

        {/* Heading */}
        <h2 className="text-[clamp(48px,7vw,88px)] leading-[0.95] tracking-wide text-white font-bold m-0">
          Built On<br />
          <span className="text-[#00DAFF]">Trust &amp;</span><br />
          Craftsmanship
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-2 gap-20 mt-16 items-start max-md:grid-cols-1 max-md:gap-12">

          {/* Left — Copy */}
          <div>
            <p className="text-[15px] font-light leading-[1.85] text-white/65 mb-5">
              When it comes to your car, every detail matters. You invested in it, dreamed about it, and take pride in owning it. At{' '}
              <strong className="text-white font-medium">Torque Detailing Studio</strong>, we believe that protecting and preserving that pride goes far beyond simply making a car look good.
            </p>
            <p className="text-[15px] font-light leading-[1.85] text-white/65 mb-5">
              Founded over two years ago, Torque has earned the trust of car enthusiasts and owners across{' '}
              <strong className="text-white font-medium">South India</strong> by delivering honest advice, exceptional workmanship, and premium vehicle protection solutions.
            </p>
            <p className="text-[15px] font-light leading-[1.85] text-white/65 mb-5">
              What sets us apart is our{' '}
              <strong className="text-white font-medium">commitment to education</strong>. We don't believe in selling services customers don't need. Instead, we take the time to explain the advantages, limitations, and best solutions for every vehicle — ensuring informed decisions about protecting your investment.
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-[#00DAFF] my-8" />

            {/* Closing quote */}
            <p className="text-[14px] italic font-light text-white/45 leading-[1.7] border-l-2 border-[#00DAFF] pl-5 mt-7">
              Because great detailing isn't just about shine — it's about protection, preservation, and peace of mind.
            </p>
          </div>

          {/* Right — Stats + Brands */}
          <div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-0.5 mb-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/[0.07] p-8 transition-all duration-300 hover:border-[rgba(0,218,255,0.4)] hover:bg-[rgba(0,218,255,0.04)]"
                >
                  <div className="text-[52px] text-[#00DAFF] leading-none mb-2 tracking-wide font-bold">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/35 mb-4">
              Trusted Brand Partners
            </div>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="text-[12px] tracking-wider text-white/60 border border-white/10 px-4 py-1.5 transition-all duration-300 hover:border-[#00DAFF] hover:text-[#00DAFF] cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>

            {/* Region */}
            <div className="mt-10 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00DAFF] shrink-0" />
              <div className="text-[12px] tracking-[0.12em] uppercase text-white/35">
                Serving Car Enthusiasts Across South India
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
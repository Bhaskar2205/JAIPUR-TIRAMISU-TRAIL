"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cafes } from "@/data/cafe";

export default function Home() {
  return (
    <main className="bg-[#F7F3EE] text-[#2B2B2B] overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        {/* HERO IMAGE */}
        <div className="absolute inset-0">

          <Image
            src="/cafes/hero.png"
            alt="Jaipur Tiramisu Trail"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-bottom"
          />

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />

          {/* BOTTOM FADE */}
{/* SOFT BOTTOM FADE */}
      </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <a
            href="#trail"
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-black px-5 py-3 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            Explore Trail
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-20 sm:py-28 px-5">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[11px] sm:text-sm text-[#9A7C6F] mb-5">
            Curated Route Experience
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            5 Curated Stops.
            <br />
            One Elegant Trail.
          </h2>

          <p className="mt-7 text-[#5F5F5F] text-base sm:text-lg leading-loose max-w-2xl mx-auto">
            Each café has been strategically grouped to create a smooth and
            premium tasting experience across Jaipur.
          </p>
        </div>
      </section>

      {/* ROUTE */}
      <section
        id="trail"
        className="pb-24 sm:pb-32 px-5"
      >
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40">

          {cafes.map((cafe, index) => (
            <motion.div
              key={cafe.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`
                grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center
                ${index % 2 !== 0
                  ? "md:[&>*:first-child]:order-2"
                  : ""
                }
              `}
            >

              {/* IMAGE */}
              <div className="relative h-[420px] sm:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)] group">

                <Image
                  src={cafe.image}
                  alt={cafe.name}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* STOP BADGE */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm tracking-[0.2em]">
                  STOP {cafe.stop}
                </div>

                {/* NAME */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-tight">
                    {cafe.name}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-1 sm:px-4">

                <p className="uppercase tracking-[0.25em] text-[11px] sm:text-sm text-[#A18679] mb-4">
                  {cafe.cluster}
                </p>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1]">
                  {cafe.name}
                </h2>

                <div className="flex items-center gap-2 mt-6 text-[#6E6E6E]">
                  <MapPin size={18} />

                  <span className="text-sm sm:text-base">
                    {cafe.area}
                  </span>
                </div>

                <p className="mt-7 text-[#555] text-base sm:text-lg leading-loose">
                  {cafe.note}
                </p>

                <a
                  href={cafe.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#2B2B2B] text-white px-7 py-4 rounded-full mt-9 w-full sm:w-auto active:scale-95 transition-all"
                >
                  Open Route
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 py-10 px-5">

        <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row justify-between items-center text-center">

          <p className="text-sm text-[#777]">
            Jaipur’s Famous Restaurants & Cafés — Tiramisu Trail
          </p>

          <p className="text-sm text-[#777]">
            Curated by IO (InfoObjects)
          </p>
        </div>
      </footer>
    </main>
  );
}
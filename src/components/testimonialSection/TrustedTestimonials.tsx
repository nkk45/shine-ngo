"use client";
import React, { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi P",
    rating: 5,
    text: "This place is a sanctuary for people who are struggling in life, who are either physically or mentally ill. The ashram supports them with love and compassion.",
  },
  {
    id: 2,
    name: "Shravan Varala",
    rating: 5,
    text: "Temple and complete place! Staff, service, care taken for the ashramites is commendable. Great work by the founder and team. Service to mankind is service to God.",
  },
  {
    id: 3,
    name: "Vinod Kumar Voruganti",
    rating: 5,
    text: "Cannot express in words about the great service and care towards the mentally sick and destitute. Hats off to the team for this noble work.",
  },
];

const TrustedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const len = testimonials.length;
    const left = (currentIndex - 1 + len) % len;
    const center = currentIndex;
    const right = (currentIndex + 1) % len;
    return [testimonials[left], testimonials[center], testimonials[right]];
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-slate-700">
            Trusted By Hundreds{" "}
            <span className="text-amber-600">Here&apos;s What They Say!</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <span className="h-[2px] w-14 bg-amber-500 rounded-full" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop arrows */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border bg-white shadow"
          >
            ›
          </button>

          {/* Cards */}
          <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:justify-center">
            {getVisibleTestimonials().map((item, idx) => {
              const isCenter = idx === 1;

              return (
                <article
                  key={item.id}
                  className={[
                    "relative flex flex-col rounded-2xl bg-white px-5 pb-5 pt-4 shadow-[0_6px_16px_rgba(15,23,42,0.08)] transition-all",
                    "md:w-[32%]",
                    isCenter
                      ? "md:scale-[1.05]"
                      : "md:opacity-70",
                  ].join(" ")}
                >
                  {/* Top bar */}
                  <div className="absolute inset-x-0 top-0 h-2 rounded-t-2xl bg-rose-500" />

                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="text-[13px] font-semibold uppercase tracking-wide text-slate-800">
                      {item.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex gap-0.5 text-[11px] text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-4 text-[12px] leading-relaxed text-slate-600">
                    {item.text}
                  </p>

                  <span className="mt-4 inline-flex text-[12px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                    Read More ›
                  </span>

                  {/* Bottom shadow */}
                  <div className="pointer-events-none absolute inset-x-3 bottom-[-10px] h-3 rounded-b-2xl bg-slate-200/60 blur-[2px]" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={
                i === currentIndex
                  ? "h-1.5 w-8 rounded-full bg-amber-500"
                  : "h-1.5 w-4 rounded-full bg-slate-300"
              }
            />
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <button
            onClick={prev}
            className="h-9 w-9 rounded-full border bg-white shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="h-9 w-9 rounded-full border bg-white shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedTestimonials;

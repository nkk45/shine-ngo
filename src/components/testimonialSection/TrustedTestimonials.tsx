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
    name: "D Pallavi",
    rating: 5,
    text:
      "It's a good institute for women. Very useful things we can learn here. Excellent facilities, computer training available and learning is completely free of cost.",
  },
  {
    id: 2,
    name: "Harish Chary",
    rating: 5,
    text:
      "SHINE NGO is a Telangana-based non-profit working to empower rural communities through education, healthcare, digital literacy, and women’s welfare programs.",
  },
  {
    id: 3,
    name: "Pravalika G",
    rating: 5,
    text:
      "MS Word and basic computer knowledge are taught here. Mentors guide us very well and help in practice. A great welfare program for women development.",
  },
  {
    id: 4,
    name: "Ramesh Goud",
    rating: 5,
    text: "Very good place to develop skills and make our own startup.",
  },
  {
    id: 5,
    name: "Rajitha Repani",
    rating: 4,
    text:
      "Good teaching faculty and this organisation is very useful to women.",
  },
  {
    id: 6,
    name: "Swathi Chinthapally",
    rating: 5,
    text:
      "Excellent skill centre especially for women. I strongly recommend joining Shine NGO. Best learning place for poor people. Thank you Shine NGO team.",
  },
  {
    id: 7,
    name: "N B",
    rating: 5,
    text:
      "Shine is an exceptional skill development center. Their commitment to empowering poor people through education truly changed my life.",
  },
  {
    id: 8,
    name: "Rajender Pedarala",
    rating: 5,
    text:
      "My experience with Shine NGO's tailoring course has been life-changing. I gained valuable skills, financial stability, and confidence. Highly recommended!",
  },
  {
    id: 9,
    name: "Amina Khan",
    rating: 5,
    text:
      "Joining Shine's tailoring program was a life-changing decision. The supportive environment and practical learning helped me pursue tailoring as a career.",
  },
  {
    id: 10,
    name: "Bhargavi Reddy",
    rating: 5,
    text:
      "Wonderful program by SHINE team. Teaching was extraordinary. Computer training helped me gain job skills. Completely free of cost. Highly recommended.",
  },
];


const TrustedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setExpandedId(null);
  };

  const next = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
    setExpandedId(null);
  };

  const getVisibleTestimonials = () => {
    const len = testimonials.length;
    return [
      testimonials[(currentIndex - 1 + len) % len],
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % len],
    ];
  };

  const toggleReadMore = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-slate-700">
            Trusted Reviews{" "}
            <span className="text-amber-600">From Our Community</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <span className="h-[2px] w-14 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          {/* Prev Arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition hover:bg-amber-50"
          >
            ‹
          </button>

          {/* Next Arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition hover:bg-amber-50"
          >
            ›
          </button>

          {/* Cards */}
          <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row">
            {getVisibleTestimonials().map((item, idx) => {
              const isCenter = idx === 1;
              const isExpanded = expandedId === item.id;
              const isLong = item.text.length > 50;

              return (
                <article
                  key={item.id}
                  className={`relative rounded-2xl bg-white px-5 pb-5 pt-4 shadow transition-all md:w-[32%] ${
                    isCenter ? "md:scale-105" : "md:opacity-70"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-2 rounded-t-2xl bg-rose-500" />

                  <h3 className="mt-3 text-xs font-semibold uppercase text-slate-800">
                    {item.name}
                  </h3>

                  <div className="mt-1 flex text-xs text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {isLong && !isExpanded
                      ? item.text.slice(0, 50) + "..."
                      : item.text}
                  </p>

                  {/* {isLong && (
                    <button
                      onClick={() => toggleReadMore(item.id)}
                      className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-600"
                    >
                      {isExpanded ? "Read Less ‹" : "Read More ›"}
                    </button>
                  )} */}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedTestimonials;

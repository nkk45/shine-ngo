"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const financialYears = [
  "2023 – 2024",
  "2022 – 2023",
  "2021 – 2022",
  "2019 – 2020",
  "2018 – 2019",
  "2017 – 2018",
  "2016 – 2017",
  "2015 – 2016",
];

export default function FinancialsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Financial
        </h1>
        <p className="text-gray-600 mt-3 text-center max-w-2xl mx-auto">
          Our audited financial records reflect transparency, accountability,
          and responsible utilization of funds.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="relative border-l-2 border-gray-200">
          {financialYears.map((year, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Dot */}
              <span className="absolute -left-[7px] w-3.5 h-3.5 bg-blue-600 rounded-full" />

              {/* Year Card */}
              <div className="border rounded-lg p-5">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    Financial Year {year}
                  </h3>
                  <ChevronDown
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                {openIndex === index && (
                  <div className="mt-4 text-sm text-gray-600 space-y-3">
                    <p>
                      This audited report includes income sources, program
                      expenses, administrative costs, and compliance details.
                    </p>

                    <a
                      href="#"
                      className="inline-block text-blue-600 font-medium hover:underline"
                    >
                      View / Download Audited Report →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { Users, Calendar, Globe, HeartHandshake } from "lucide-react";

const Welcome = () => {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute right-0 top-0 w-[480px] h-[480px] bg-orange-100 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-orange-500 font-semibold tracking-widest uppercase flex items-center gap-2">
            Welcome to SHINE NGO
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
            Empowering Women.
            <br />
            <span className="text-orange-600">Creating Lasting Change.</span>
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            SHINE NGO is a women-led social organization committed to empowering
            marginalized communities through capacity building, digital
            inclusion, sustainable livelihoods, and health initiatives.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Since 2014, we have impacted the lives of more than{" "}
            <span className="font-semibold text-gray-900">5 lakh women</span>{" "}
            across Hyderabad and nearby rural areas—helping them rise with
            dignity, confidence, and self-reliance.
          </p>

          <p className="mt-5 text-xl font-semibold text-gray-900">
            We don’t believe in temporary support.
            <br />
            <span className="text-orange-600">We believe in lasting change.</span>
          </p>

          {/* WHO WE ARE */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              SHINE NGO works at the grassroots level to enable women from
              underserved communities to become economically independent,
              digitally empowered, and socially confident. By integrating skill
              development, income generation, education, and health awareness,
              we create pathways for women to lead better lives and secure
              brighter futures for their families.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition">
              Volunteer With Us
            </button>
            <button className="px-6 py-3 border border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition">
              Partner With Us
            </button>
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              Support Our Mission
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          <div className="absolute -z-10 w-[320px] h-[320px] bg-orange-200 rounded-3xl rotate-6 opacity-40 blur-xl"></div>

          <Image
            src="/about/about-1.png"
            alt="Women Empowerment at SHINE NGO"
            width={1200}
            height={800}
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
            priority
          />

          {/* IMPACT STATS */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
              <Users className="text-orange-600" />
              <p className="text-sm font-semibold">
                5,00,000+ Women Empowered
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
              <Calendar className="text-orange-600" />
              <p className="text-sm font-semibold">Active Since 2014</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
              <Globe className="text-orange-600" />
              <p className="text-sm font-semibold">
                PMGDISHA – Digital India
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
              <HeartHandshake className="text-orange-600" />
              <p className="text-sm font-semibold">
                SHINE ULTRA Menstrual Health
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* JOIN US SECTION */}
      <div className="max-w-5xl mx-auto px-5 mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Join Us in Creating Change
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          Your support can help us empower more women, improve health outcomes,
          and build sustainable livelihoods.
        </p>
        <p className="mt-4 font-semibold text-orange-600 text-lg">
          Together, we can ensure that every woman has the opportunity to
          learn, earn, and lead.
        </p>
      </div>
    </section>
  );
};

export default Welcome;

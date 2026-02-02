"use client";

import Image from "next/image";
import {
  Heart,
  Globe,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Award,
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-5 space-y-20 relative z-10">
        {/* ABOUT INTRO */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              About <span className="text-orange-600">SHINE NGO</span>
            </h1>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              SHINE NGO is a purpose-driven social organization dedicated to the
              empowerment of marginalized communities through capacity building
              and sustainable rural and urban development programs. Founded in
              2014, SHINE has been working relentlessly across Hyderabad and
              surrounding rural regions.
            </p>

            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              At SHINE, we believe empowerment is not charity — it is opportunity.
              Through education, digital literacy, livelihood training, and
              health awareness, we enable women to transform their lives and the
              future of their families.
            </p>

            <p className="mt-5 font-semibold text-gray-900">
              Impacted over <span className="text-orange-600">5 Lakh+</span>{" "}
              women with skills, confidence, and sustainable income.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -z-10 w-[320px] h-[320px] bg-orange-200 rounded-3xl rotate-6 blur-xl opacity-50"></div>
            <Image
              src="/about/3.jpeg"
              alt="Women Empowerment"
              width={1200}
              height={800}
              className="rounded-2xl shadow-xl object-cover h-[420px]"
            />
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-orange-50 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To build an inclusive and equitable society where every woman is
              digitally literate, economically independent, healthy, and
              respected, regardless of her background.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Empower women through education & digital inclusion</li>
              <li>• Create sustainable livelihood opportunities</li>
              <li>• Promote menstrual health & women’s well-being</li>
              <li>• Support children’s education via family income</li>
              <li>• Transform women into leaders & change-makers</li>
            </ul>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-orange-600" />,
                title: "Digital Literacy",
                desc: "PMGDISHA-aligned digital empowerment for rural women",
              },
              {
                icon: <Briefcase className="text-orange-600" />,
                title: "Livelihood Training",
                desc: "Tailoring, embroidery, vocational & income skills",
              },
              {
                icon: <BookOpen className="text-orange-600" />,
                title: "Skill Development",
                desc: "Entrepreneurship, micro-savings & market orientation",
              },
              {
                icon: <ShieldCheck className="text-orange-600" />,
                title: "Menstrual Health",
                desc: "Eco-friendly SHINE ULTRA sanitary pads initiative",
              },
              {
                icon: <Heart className="text-orange-600" />,
                title: "Women Well-being",
                desc: "Counseling, confidence & personal development",
              },
              {
                icon: <Briefcase className="text-orange-600" />,
                title: "Home Employment",
                desc: "Distribution of tailoring machines to poor women",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FOUNDER MESSAGE */}
        <div className="bg-orange-600 text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Founder’s Message</h2>
          <p className="italic text-lg leading-relaxed">
            “Don’t give a fish to a person; teach them how to catch the fish.”
          </p>
          <p className="mt-4 text-orange-100">
            Our focus is not short-term support, but lifelong skills,
            confidence, and independence that uplift families and communities.
          </p>
          <p className="mt-6 font-semibold">
            — Dr. Parmeshwari Chadurupally
            <br />
            Founder, SHINE NGO
          </p>
        </div>

        {/* RECOGNITION */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
            Recognition & Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <Award className="text-orange-600 mb-3" />
              <p className="font-semibold">
                Stree Swabhiman Excellency Award
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Government of India – Presented by Union IT Minister
                Shri Ravi Shankar Prasad
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <BookOpen className="text-orange-600 mb-3" />
              <p className="font-semibold">Media Coverage</p>
              <p className="text-gray-600 text-sm mt-2">
                Featured in The Hans India, Sakshi, Andhra Jyothi & more
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <Heart className="text-orange-600 mb-3" />
              <p className="font-semibold">5 Lakh+ Women Empowered</p>
              <p className="text-gray-600 text-sm mt-2">
                Through livelihoods, digital inclusion & health programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

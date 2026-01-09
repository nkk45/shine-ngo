import React from "react";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
import Razorpay from "../razorpay/Razorpay";
import Image from "next/image";

const childImages = [
  { src: "/service/CHILDDevolopmet/1.jpg" },
  { src: "/service/CHILDDevolopmet/11.jpg" },
  { src: "/service/CHILDDevolopmet/12.jpg" },
  { src: "/service/CHILDDevolopmet/4.jpg" },
  { src: "/service/CHILDDevolopmet/5.jpg" },
  { src: "/service/CHILDDevolopmet/6.jpg" },
  { src: "/service/CHILDDevolopmet/7.jpg" },
  { src: "/service/CHILDDevolopmet/8.jpg" },
  { src: "/service/CHILDDevolopmet/9.jpg" },
  { src: "/service/CHILDDevolopmet/14.jpg" },
];

const ChildEducation = () => {
  return (
    <div>
      <PageBanner title="Child Education" image="/service/servicebg.png" />

      <div className="w-full  px-20 md:flex gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-700 leading-7 text-justify">
           <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Child Education Program
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Nurturing Dreams, Shaping Futures
          </p>
 <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-gray-700 space-y-4 leading-relaxed">
          <p>
            At <strong>Shine NGO</strong>, we strongly believe that every child
            has the right to dream, learn, and build a meaningful future,
            regardless of their background or circumstances. Our{" "}
            <strong>Child Education Program</strong> is designed to support
            underprivileged children by removing barriers to learning and
            creating opportunities for holistic development.
          </p>

          <p>
            Education at Shine NGO goes beyond textbooks—it is about building
            confidence, values, life skills, and hope.
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Commitment to Child Education
          </h2>

          <p>
            Over the years, Shine NGO’s child education initiative has grown
            steadily, reaching more children and addressing their needs in a
            comprehensive way. We focus not only on academic support but also on
            the everyday challenges that prevent children from attending and
            continuing school.
          </p>

          <p>
            By providing consistent care and educational assistance, we help
            children stay in school and move toward a brighter, self-reliant
            future.
          </p>
        </div>
      </section>

      {/* Why Education Matters */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Child Education Matters
          </h2>

          <p className="text-gray-700 mb-6">
            Many children are forced to give up education due to poverty, lack
            of guidance, or family challenges. Shine NGO works to break this
            cycle by ensuring children receive continuous education and the
            support systems they need to thrive.
          </p>

          <p className="font-semibold text-gray-800 mb-4">
            Education empowers children to:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Build confidence and independence</li>
            <li>Escape poverty</li>
            <li>Develop life skills and values</li>
            <li>Become responsible and contributing members of society</li>
          </ul>
        </div>
      </section>

      {/* Who We Support */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Who We Support
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Children from low-income families</li>
            <li>Orphans and vulnerable children</li>
            <li>Children at risk of dropping out of school</li>
            <li>Children lacking basic educational resources</li>
          </ul>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            How You Can Help
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Sponsor a child’s education</li>
            <li>Support school supplies and uniforms</li>
            <li>Contribute to nutrition and transportation</li>
            <li>Volunteer as a mentor or educator</li>
            <li>Partner with Shine NGO for long-term impact</li>
          </ul>
        </div>
      </section>
          <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {childImages.map((img, index) => (
                <div
                  key={index}
                  className="w-full overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    alt={`Tailoring ${index + 1}`}
                    src={img.src}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <Razorpay />
        </div>

        <ServicesSidebar active="Child Education" />
      </div>
    </div>
  );
};

export default ChildEducation;

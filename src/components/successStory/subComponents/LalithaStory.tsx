// pages/success-stories/saritha.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const successStories = [
  {
    name: "Saritha",
    desc: "Saritha’s Journey of Empowerment through the Hope Project",
    image: "/stories/saritha.jpg",
    href: "/success-stories/saritha",
    disabled: false,
  },
  {
    name: "Naveena",
    desc: "Naveena's Triumph: From Postal Department to Entrepreneurial Success",
    image: "/stories/naveena.jpg",
    href: "/success-stories/naveena",
    disabled: false,
  },
  {
    name: "Durga",
    desc: "Durga's Journey: From Teacher to Entrepreneur",
    image: "/stories/durga.jpg",
    href: "/success-stories/durga",
    disabled: false,
  },
  {
    name: "Lalitha",
    desc: "Joshna's Journey: From Car Driver to Beauty Entrepreneur",
    image: "/stories/Lalitha.jpg",
    href: "/success-stories/laitha",
    disabled: false,
  },
  {
    name: "Sri Devi",
    desc: "Sri Devi Triumph: From Tailor to Business Owner",
    image: "/stories/Sridevi.jpg",
    href: "/success-stories/sridevi",
    disabled: false,
  },
  {
    name: "Sneha",
    desc: "Sneha,'s Journey of Empowerment through the Hope Project",
    image:"/stories/Sneha.jpg",
    href: "/success-stories/sneha",
    disabled: false,
  },
];

const JoshnaStory = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          Lalitha's Beauty Revolution: From Family Support to Business Success
        </h1>

        <p className="mb-4">
          A turning point arrived when Lalitha discovered the HOPE Project,
          implemented by the SHINE NGO. The project offered vocational training
          courses, including one in beauty therapy. Intrigued by the prospect of
          learning a new skill, she enrolled in the course, balancing her
          studies with her family responsibilities.{" "}
        </p>

        <p className="mb-4">
          With unwavering determination and the support of her family, Lalitha
          excelled in the beauty therapy course. She developed a passion for
          transforming people's appearance and honed her skills in various
          techniques, from skincare to makeup application. Upon completing the
          course, she emerged with a newfound sense of confidence and purpose.
        </p>

        <p className="mb-4">
          Determined to make the most of her newfound expertise, Lalitha decided
          to start her own beauty salon. Initially, building a clientele was
          challenging, but her dedication, talent, and exceptional customer
          service soon paid off. Word of her skills spread, and her salon became
          a popular destination for people seeking beauty treatments.
        </p>

        <p className="mb-4">
          Lalitha's success story is a testament to the power of education,
          empowerment, and family support. The HOPE Project played a crucial
          role in transforming her life by providing her with the skills and
          opportunities she needed to succeed. Today, she is a thriving beauty
          therapist, running a successful salon and inspiring others to pursue
          their dreams. Her journey serves as a reminder that with
          determination, hard work, and the right support, anyone can overcome
          obstacles and achieve their goals, even in the face of adversity.
        </p>

        <Image
          src="/stories/Lalitha.jpg"
          alt=""
          width={400}
          height={400}
          className="mt-6 rounded-lg object-cover"
        />
      </div>

      <aside className="bg-gray-50 p-4 rounded-lg w-full lg:w-80 shrink-0">
        <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
        <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto">
          {successStories.map((story, idx) =>
            story.disabled ? (
              <div
                key={idx}
                className="flex gap-3 items-center opacity-50 cursor-not-allowed p-2 rounded"
              >
                <div className="w-10 h-10 bg-gray-300 rounded" />
                <div className="text-sm">
                  <p className="font-medium">{story.name}</p>
                  <p className="truncate text-xs">{story.desc}</p>
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                href={story.href}
                className="flex gap-3 items-center p-2 hover:bg-gray-100 transition rounded"
              >
                <Image
                  src={story.image}
                  alt={story.name}
                  width={40}
                  height={40}
                  className="rounded object-cover"
                />
                <div className="text-sm">
                  <p className="font-medium">{story.name}</p>
                  <p className="truncate text-xs">{story.desc}</p>
                </div>
              </Link>
            ),
          )}
        </div>
        <Link
          href="/success-stories"
          className="block text-center mt-4 py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition text-sm"
        >
          More Success Stories
        </Link>
      </aside>
    </div>
  );
};

export default JoshnaStory;

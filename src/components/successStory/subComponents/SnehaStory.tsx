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
    desc: "Lalitha's Beauty Revolution: From Family Support to Business Success",
    image: "/stories/Lalitha.jpg",
    href: "/success-stories/lalitha",
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
    image: "/stories/Sneha.jpg",
    href: "/success-stories/sneha",
    disabled: false,
  },
];

const SnehaStory = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          Sneha,'s Journey of Empowerment through the Hope Project
        </h1>

        <p className="mb-4">
          Sneha, a young woman from Hyderabad, India, had always faced
          significant challenges. Her family's financial situation was
          precarious, and her limited education made it difficult to find a
          stable job. Despite these obstacles, Sneha had a burning desire to
          improve her life and contribute to her community.
        </p>

        <p className="mb-4">
          Her journey took a turning point when she became involved in the Hope
          Project, a community development initiative implemented by the SHINE
          NGO. The project offered various programs, including vocational
          training, skill development, and financial literacy. Sneha enrolled in
          the electrical technician course, hoping to acquire the skills needed
          to secure a better job.
        </p>

        <p className="mb-4">
          With the support of the project's dedicated mentors and instructors,
          Sneha excelled in her studies. She quickly grasped the technical
          concepts and demonstrated a natural aptitude for electrical work. The
          project also provided her with opportunities to gain practical
          experience through internships and workshops, allowing her to apply
          her newfound knowledge in real-world settings.
        </p>

        <p className="mb-4">
          After completing the course, Sneha was determined to use her newfound
          skills to improve her family's circumstances. She applied for numerous
          jobs and, with perseverance, eventually landed a position as an
          electrical technician at a local construction company. Her new job
          provided her with a stable income and a sense of accomplishment.
        </p>

        <p className="mb-4">
          Through the Hope Project, Sneha not only acquired the skills she
          needed to succeed professionally but also gained confidence and a
          renewed sense of purpose. She became a role model for other women in
          her community, inspiring them to overcome their challenges and pursue
          their dreams.
        </p>
        <p className="mb-4">
          Sneha's story is a testament to the power of education and
          empowerment. The Hope Project played a crucial role in providing her
          with the necessary tools and support to achieve her goals. By
          investing in her future, Sneha was able to transform her life and make
          a positive impact on her c ommunity.
        </p>
        <Image
          src="/stories/Sneha.jpg"
          alt="Saritha"
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

export default SnehaStory;

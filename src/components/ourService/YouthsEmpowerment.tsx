import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";

const YouthEmpowermentImages = [
  { src: "/service/YouthEmpowerment/1.jpg" },
  { src: "/service/YouthEmpowerment/2.jpg" },
  { src: "/service/YouthEmpowerment/3.jpg" },
  { src: "/service/YouthEmpowerment/4.jpg" },
  { src: "/service/YouthEmpowerment/5.jpg" },
];
import Image from "next/image";
const YouthEmpowerment = () => {
  return (
    <div>
      <PageBanner
        title="Youthâ€™s Empowerment"
        image="/service/servicebg.png"
      />

      <section className="w-full px-20 md:flex gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-700 leading-7 ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Youth Skill Development Program
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Empowering Youth with Digital Skills for a Brighter Future
          </p>
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-gray-700 space-y-4 leading-relaxed">
              <p>
                At <strong>Shine NGO</strong>, we believe that today’s youth are
                the builders of tomorrow. Our{" "}
                <strong>Youth Skill Development Program</strong> is designed to
                equip young individuals with practical computer and digital
                skills that enhance employability, confidence, and career
                opportunities.
              </p>

              <p>
                Through this initiative, we provide job-oriented computer
                courses that help youth stay relevant in an increasingly digital
                world.
              </p>
            </div>
          </section>

          {/* Why Digital Skills Matter */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-4 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-800">
                Why Digital Skills Matter for Youth
              </h2>

              <p>
                In today’s job market, basic education alone is not enough.
                Digital knowledge and technical skills are essential for
                employment, self-employment, and entrepreneurship.
              </p>

              <p>
                Many young people from economically weaker backgrounds lack
                access to quality computer training. Shine NGO bridges this gap
                by offering affordable and accessible digital education focused
                on real-world applications.
              </p>
            </div>
          </section>

          {/* Courses Offered */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Computer Courses Offered by Shine NGO
              </h2>

              <div className="bg-white p-6 rounded-xl shadow-sm text-gray-700 space-y-4">
                <h3 className="text-xl font-semibold">
                  💻 Computer & Digital Skill Courses
                </h3>

                <ul className="list-disc list-inside space-y-2">
                  <li>Computer basics and fundamental operations</li>
                  <li>Internet usage and digital literacy</li>
                  <li>English typing skills for office and online work</li>
                  <li>
                    MS Excel training for data management and office tasks
                  </li>
                  <li>
                    Digital marketing courses including social media promotion,
                    online branding, and content creation
                  </li>
                  <li>
                    Graphic designing training to develop creativity and visual
                    communication skills
                  </li>
                  <li>
                    Python programming course to build a strong foundation in
                    coding and problem-solving
                  </li>
                </ul>

                <p>
                  Together, these courses equip youth with the knowledge and
                  confidence to pursue employment, freelancing, or
                  entrepreneurship opportunities in a digital-first world.
                </p>
              </div>
            </div>
          </section>

          {/* Who Can Join */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Who Can Join
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Students and school dropouts</li>
                <li>Unemployed youth</li>
                <li>College students seeking practical skills</li>
                <li>Youth from low-income families</li>
                <li>Beginners with no prior computer knowledge</li>
              </ul>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Benefits of the Program
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Improved employability</li>
                <li>Job-ready digital skills</li>
                <li>Confidence in technology usage</li>
                <li>Opportunities for freelancing and self-employment</li>
                <li>Strong foundation for higher studies or careers</li>
              </ul>
            </div>
          </section>

          {/* Approach */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Approach
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Practical, hands-on training</li>
                <li>Beginner-friendly curriculum</li>
                <li>Supportive learning environment</li>
                <li>Focus on skill application, not just theory</li>
              </ul>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                How You Can Support Youth Empowerment
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Sponsor computer courses</li>
                <li>Donate computers or learning equipment</li>
                <li>Support training center infrastructure</li>
                <li>Volunteer as a trainer or mentor</li>
                <li>Partner with Shine NGO for youth development programs</li>
              </ul>
            </div>
          </section>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 my-3">
            {YouthEmpowermentImages.map((img, index) => (
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

        {/* RIGHT SIDEBAR */}
        <ServicesSidebar active="Youthâ€™s Empowerment" />
      </section>
    </div>
  );
};

export default YouthEmpowerment;

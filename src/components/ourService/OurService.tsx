"use client";
import Image from "next/image";
import Link from "next/link";
const OurService =()  =>{
  const services = [
    {
      title: "Old Age Home",
      image: "/service/oldage.jpg",
      link: "/services/old-age-home",
    },
    {
      title: "Child Education",
      image: "/service/child-edu.jpg",
      link: "/services/child-education",
    },
    {
      title: "Covid Widow Women",
      image: "/service/covid-women.jpg",
      link: "/services/covid-widow-women",
    },
    {
      title: "Project Raksha",
      image: "/service/raksha.jpg",
      link: "/services/project-raksha",
    },
    {
      title: "Women Empowerment",
      image: "/service/women-emp.jpg",
      link: "/services/women-empowerment",
    },
    {
      title: "Youth’s Empowerment",
      image: "/service/youth.jpg",
      link: "/services/youth-empowerment",
    },
  ];

  return (
    <div className="w-full bg-[#F5F9F8] min-h-screen pb-20 pt-10">
      <h1 className="text-center text-4xl font-bold text-[#0D2A1B] mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {services.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer duration-300">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-t-lg w-full h-60 object-cover"
              />
              <h3 className="text-center text-lg font-bold py-4">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


export default OurService;
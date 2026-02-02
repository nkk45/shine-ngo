"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-[500px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/about/1.jpeg"
              alt="About image 1"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/about/2.jpeg"
              alt="About image 2"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/about/4.jpeg"
              alt="About image 3"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/about/5.jpeg"
              alt="About image 4"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/about/6.jpeg"
              alt="About image 5"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/about/7.jpeg"
              alt="About image 6"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

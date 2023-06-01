// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";

import Image from "next/image";

export default function Header({ headers }) {
  return (
    <header className="py-10 relative grid place-items-center lg:min-h-[700px] bg-base-200">
      <div className="container">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay
        >
          {headers.map((header) => (
            <SwiperSlide className="px-3" key={Math.random()}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28">
                <div className="flex flex-col justify-center text-center lg:text-left">
                  <h4 className="text-2xl font-bold">{header.subHeading}</h4>
                  <h2 className="text-5xl leading-[3.5rem] mt-3 font-bold">
                    {header.heading}
                  </h2>
                  <p className="py-6">{header.description}</p>
                  <div>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
                <div className="flex w-full px-10 items-center justify-center">
                  <Image
                    src={header.imageUrl}
                    alt={header.heading}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}

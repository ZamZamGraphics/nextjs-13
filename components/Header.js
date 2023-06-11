import style from "../styles/headers.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";

import Image from "next/image";

export default function Header({ headers }) {
  return (
    <header className={style.css}>
      <div className="bg-[url('/bg1.svg')] bg-no-repeat bg-left-top top-0 absolute w-full h-[70%] dark:opacity-10"></div>
      <div className="bg-[url('/bg2.svg')] bg-no-repeat bg-left-bottom bottom-0 absolute w-full h-[70%] dark:opacity-20"></div>
      <div className="bg-[url('/bg3.svg')] bg-no-repeat bg-right-top top-0 absolute w-full h-[70%] dark:opacity-20"></div>
      <div className="bg-[url('/bg4.svg')] bg-no-repeat bg-right-bottom bottom-0 absolute w-full h-[40%] md:h-full dark:opacity-10"></div>
      <div className="container">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay
        >
          {headers.map((header) => (
            <SwiperSlide className="px-3" key={Math.random()}>
              <div className={style.box}>
                <div className={style.text}>
                  <h4 className="text-xl font-bold">{header.subHeading}</h4>
                  <h2 className="text-4xl mt-3 font-bold">{header.heading}</h2>
                  <p className="my-3">{header.description}</p>
                  <div>
                    <button className="btn btn-success text-white dark:text-green-950 rounded-full">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className={style.images}>
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

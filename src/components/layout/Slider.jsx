
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/core';
import brand1 from "../../assets/brands/brand-1.png";
import brand2 from "../../assets/brands/brand-2.png";
import brand3 from "../../assets/brands/brand-3.png";
import brand4 from "../../assets/brands/brand-4.png";
import brand5 from "../../assets/brands/brand-5.png";
import brand6 from "../../assets/brands/brand-6.png";
import brand7 from "../../assets/brands/brand-7.png";
import brand8 from "../../assets/brands/brand-8.png";
import brand9 from "../../assets/brands/brand-9.png";
import brand10 from "../../assets/brands/brand-10.png";
import brand11 from "../../assets/brands/brand-11.png";
import brand12 from "../../assets/brands/brand-12.png";
import brand13 from "../../assets/brands/brand-13.png";
import brand14 from "../../assets/brands/brand-14.png";
import brand15 from "../../assets/brands/brand-15.png";

import 'swiper/css';

const brands = [
  { id: 1, image: brand1 },
  { id: 2, image: brand2 },
  { id: 3, image: brand3 },
  { id: 4, image: brand4 },
  { id: 5, image: brand5 },
  { id: 6, image: brand6 },
  { id: 7, image: brand7 },
  { id: 8, image: brand8 },
  { id: 9, image: brand9 },
  { id: 10, image: brand10 },
  { id: 11, image: brand11 },
  { id: 12, image: brand12 },
  { id: 13, image: brand13 },
  { id: 14, image: brand14 },
  { id: 15, image: brand15 },
];

const SliderBar = () => {
  return (
    <div className="mt-5 container-fixed lg:mt-0">
      <h1 className="mb-10 text-3xl font-semibold leading-7 text-center text-gray-800 xl:text-4xl xl:leading-9">
        Our Trusted Partners
      </h1>
      <Swiper
        className="py-3 "
        spaceBetween={25}
        slidesPerView={4}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}

      >
        {brands.map((brand) => (
          <SwiperSlide
            key={brand.id}
            className="flex items-center justify-center p-6 border-2 rounded-lg shadow-md cursor-pointer "
          >
            <div className=" aspect-w-[1/2] aspect-h-1  ">
              <img
                className="object-contain w-full h-full "
                src={brand.image}
                alt={brand.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBar;

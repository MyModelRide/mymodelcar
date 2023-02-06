import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
const style = { wrapper: "my-12 w-[90%] md:w-[70%] lg:w-[80%] mx-auto" };
const Gallery = () => {
  const { width } = useWindowSize();
  return (
    <div className={style.wrapper}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={width < 500 ? 1 : 2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <Image src="/gallery1.jpeg" width={600} height={300} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <Image src="/gallery2.jpeg" width={600} height={300} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <Image src="/gallery3.jpeg" width={600} height={300} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <Image src="/gallery4.jpeg" width={600} height={300} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Gallery;

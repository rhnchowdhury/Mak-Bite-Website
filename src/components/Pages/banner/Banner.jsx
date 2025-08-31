import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.jpg";

const Banner = () => {
  return (
    <Swiper className="bg-[#483C33]">
      {/* <Swiper className="bg-[#8B1013]"> */}
      <SwiperSlide className="flex justify-between">
        <img
          src={img1}
          alt=""
          className=" rounded-2xl w-80 lg:h-[350px] h-[200px]"
        />
        <h1 className="text-white text-center mt-32 uppercase text-7xl font-bold">
          Buy 1 Get 1 Free
        </h1>
        <img
          src={img2}
          alt=""
          className="rounded-2xl w-80 lg:h-[350px] h-[200px]"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

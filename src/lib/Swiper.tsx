import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// カルーセルにする画像のソースをリストにします
const images = ["/images/test1.png", "/images/test2.png", "/images/test3.png"];

const Slider = () => {
  return (
    <Swiper
      className="w-[512px] h-[640px] p-5"
      grabCursor={true}
      effect={"cards"}
      modules={[EffectCards]}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`} className=" ">
            <Image src={src} width={512} height={640} alt="test_image" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;

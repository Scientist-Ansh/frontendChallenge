import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "./SingleTestimonial";
import { Box } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Box py="50px" mt="100px">
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <SingleTestimonial />
        </SwiperSlide>
        <SwiperSlide>
          <SingleTestimonial />
        </SwiperSlide>
        <SwiperSlide>
          <SingleTestimonial />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Testimonials;

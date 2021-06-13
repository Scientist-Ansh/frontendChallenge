import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "./SingleTestimonial";
import { Box, Image } from "@chakra-ui/react";

import styles from "@/styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <Box py="50px" mt="200px" position="relative">
      <Image
        className={styles.pattern}
        src="testimonialPattern.png"
        alt="pattern"
        height="350px"
      />
      <Swiper
        spaceBetween={40}
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

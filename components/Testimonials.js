import { useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "./SingleTestimonial";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import styles from "@/styles/Testimonials.module.css";

SwiperCore.use([Navigation]);

const Testimonials = () => {
  const [isSmall] = useMediaQuery("(max-width: 800px)");
  const swiper = useRef(null);
  return (
    <Box py="50px" mt="200px" position="relative">
      <Image
        className={styles.pattern}
        src={isSmall ? "purpleBg.png" : "testimonialPattern.png"}
        alt="pattern"
      />
      <Swiper
        navigation={{
          prevEl: ".prev-slide",
          nextEl: ".next-slide",
        }}
        ref={swiper}
        className={styles.swiper}
        spaceBetween={40}
        slidesPerView="auto"
        centeredSlides={true}
        freeMode={true}
        loop={true}
      >
        <SwiperSlide>
          <SingleTestimonial src="https://bit.ly/dan-abramov" />
        </SwiperSlide>
        <SwiperSlide>
          <SingleTestimonial src="https://bit.ly/kent-c-dodds" />
        </SwiperSlide>
        <SwiperSlide>
          <SingleTestimonial src="https://bit.ly/ryan-florence" />
        </SwiperSlide>
      </Swiper>
      <Flex justify="flex-end" display={{ base: "flex", md: "none" }}>
        <Box className={`${styles.slide} prev-slide`}>{"<"}</Box>
        <Box className={`${styles.slide} next-slide`} mr={5}>
          {">"}
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonials;

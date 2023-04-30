import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from '../../../assets/images/banner.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import cls from "./banner.module.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
	return (
		<div className={cls.container}>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className={cls.myswipper}>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image} alt="banner" className={cls.image} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;

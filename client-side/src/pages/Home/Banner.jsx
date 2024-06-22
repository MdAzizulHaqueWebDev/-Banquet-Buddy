/** @format */

// import { Swiper, SwiperSlide } from 'swiper/react';
import slide_1 from "../../assets/slider-img-1.avif";
import slide_2 from "../../assets/slider-img-2.jpeg";
import slide_3 from "../../assets/slider-img-3.jpeg";
import Carousel from "react-elastic-carousel";
import Slide from "./Slide";

const Banner = () => {
	return (
		<div className="mx-auto w-11/12">
			<Carousel itemsToShow={1}>
				<Slide img={slide_1} />
				<Slide img={slide_2} />
				<Slide img={slide_3} />
			</Carousel>
		</div>
	);
};

export default Banner;

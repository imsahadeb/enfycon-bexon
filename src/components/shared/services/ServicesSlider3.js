"use client";
import getALlServices from "@/libs/getALlServices";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../cards/ServiceCard7";
const ServicesSlider3 = ({ services: propServices }) => {
	const showableSevices = propServices ? propServices : getALlServices()?.slice(0, 3);
	const services = [...showableSevices, ...showableSevices];
	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="slider-navigation d-flex justify-content-end mb-4 gap-2">
						<button className="service-3-prev slider-prev">
							<span className="anim-icon">
								<i className="tji-arrow-left tw:!text-gray-400"></i>
								<i className="tji-arrow-left"></i>
							</span>
						</button>
						<button className="service-3-next slider-next">
							<span className="anim-icon">
								<i className="tji-arrow-right tw:!text-gray-400"></i>
								<i className="tji-arrow-right"></i>
							</span>
						</button>
					</div>
				</div>
			</div>
			<Swiper
				slidesPerView={1}
				spaceBetween={15}
				loop={true}
				speed={1500}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					el: ".swiper-pagination-area",
					clickable: true,
				}}
				navigation={{
					nextEl: ".service-3-next",
					prevEl: ".service-3-prev",
				}}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[Pagination, Autoplay, Navigation]}
				className="h6-service-slider"
			>
				{services?.length
					? services?.map((service, idx) => (
						<SwiperSlide key={idx}>
							<ServiceCard service={service} idx={idx} />
						</SwiperSlide>
					))
					: ""}
				<div className="swiper-pagination-area"></div>
			</Swiper>
		</>
	);
};

export default ServicesSlider3;

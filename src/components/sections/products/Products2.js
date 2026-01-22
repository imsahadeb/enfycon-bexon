"use client";
import PortfolioCard2 from "@/components/shared/cards/PortfolioCard2";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Products2 = () => {
	const productsData = [
		{
			id: 1,
			title: "iCognito.ai",
			img2: "/images/product/icognito.jpg",
			category: "AI Intelligence",
			shortDesc: "Advanced AI Intelligence Platform",
		},
		{
			id: 2,
			title: "iDental.ai",
			img2: "/images/product/idental.jpg",
			category: "Healthcare AI",
			shortDesc: "Dental AI Solutions",
		},
		{
			id: 3,
			title: "lexGenie.ai",
			img2: "/images/product/lexgen.jpg",
			category: "Legal AI",
			shortDesc: "Legal Intelligence Platform",
		},
		{
			id: 4,
			title: "quantfin.ai",
			img2: "/images/product/ifin.jpg",
			category: "Financial AI",
			shortDesc: "Quantitative Finance Solutions",
		},
		{
			id: 5,
			title: "PerformanceEdge.ai",
			img2: "/images/product/performance.jpg",
			category: "Performance AI",
			shortDesc: "Performance Analytics Platform",
		},
		{
			id: 6,
			title: "iWac.ai",
			img2: "/images/product/iwac.jpg",
			category: "Web Analytics",
			shortDesc: "Web Analytics & Intelligence",
		},
	];

	const products = [...productsData, ...productsData];

	return (
		<section className="tj-project-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Products
							</span>
							<h2 className="sec-title text-anim">
								Breaking Boundaries, Building <span>Dreams.</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
							<Swiper
								slidesPerView={1.2}
								spaceBetween={15}
								loop={true}
								speed={1500}
								centeredSlides={true}
								autoplay={{
									delay: 6000,
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								breakpoints={{
									576: {
										slidesPerView: 1.7,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									992: {
										slidesPerView: 2,
										spaceBetween: 30,
									},
									1024: {
										slidesPerView: 2.2,
										spaceBetween: 30,
									},
									1400: {
										slidesPerView: 2.31,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="project-slider"
							>
								{products?.length
									? products?.map((product, idx) => (
											<SwiperSlide key={idx}>
												<PortfolioCard2 portfolio={product} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-pagination-area"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products2;

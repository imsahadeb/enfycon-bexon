"use client";
import { memo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { heroSlides } from "@/data/hero";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero2 = () => {
	const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
	const [slides, setSlides] = useState(heroSlides);

	useEffect(() => {
		// Import dynamically or just use the function if available
		const allServices = require("@/libs/getALlServices").default();
		if (allServices && allServices.length > 0) {
			// Shuffle array
			const shuffled = [...allServices].sort(() => 0.5 - Math.random());
			// Get first 3
			const selected = shuffled.slice(0, 3);
			// Map to hero format
			const formattedSlides = selected.map(service => ({
				subtitle: service.title, // or category
				title: service.title,
				desc: service.desc ? service.desc.slice(0, 150) + (service.desc.length > 150 ? "..." : "") : "",
				img: service.img,
				thumbImg: service.img, // Using same image for thumb, might need CSS object-fit
				slug: service.id
			}));
			setSlides(formattedSlides);
		}
	}, []);

	return (
		<section className="tj-slider-section">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				effect="fade"
				speed={1400}
				autoplay={{ delay: 5000 }}
				modules={[Autoplay, Navigation, EffectFade, Thumbs]}
				thumbs={{ swiper: controlledMainSwiper && !controlledMainSwiper.destroyed ? controlledMainSwiper : null }}
				navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
				className="hero-slider"
				style={{ height: "100%" }}
			>
				{slides.map(({ img, title, desc, slug }, idx) => (
					<SwiperSlide
						key={idx}
						className="tj-slider-item"
						style={{ height: "auto" }}
					>
						<div
							className="slider-bg-image"
							style={{
								backgroundImage: `url('${img ? img : "/images/hero/slider-1.jpg"
									}')`,
							}}
						></div>
						<div className="container">
							<div className="slider-wrapper">
								<div className="slider-content">
									<h1 className="slider-title">{title}</h1>
									<div className="slider-desc">{desc}</div>
									<div className="slider-btn">
										<ButtonPrimary text={"Learn More"} url={slug ? `/services/${slug}` : "/services"} />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				<div
					className="hero-navigation d-inline-flex wow fadeIn"
					data-wow-delay="1.5s"
				>
					<div className="slider-prev" role="button">
						<span className="anim-icon">
							<i className="tji-arrow-left"></i>
							<i className="tji-arrow-left"></i>
						</span>
					</div>
					<div className="slider-next" role="button">
						<span className="anim-icon">
							<i className="tji-arrow-right"></i>
							<i className="tji-arrow-right"></i>
						</span>
					</div>
				</div>
			</Swiper>
			<Swiper
				onSwiper={setControlledMainSwiper} // capture thumbs swiper
				slidesPerView={3}
				spaceBetween={15}
				loop={false}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Thumbs]}
				className="hero-thumb wow fadeIn"
				data-wow-delay="2s"
			>
				{slides.map(
					({ thumbImg = "/images/hero/slider-thumb-1.webp", title }, idx) => (
						<SwiperSlide key={idx} className="thumb-item">
							<Image
								src={thumbImg}
								alt={`${title} thumbnail`}
								width={80}
								height={80}
								quality={85}
								style={{ width: "100%", height: "auto", objectFit: "cover" }}

							/>
						</SwiperSlide>
					)
				)}
			</Swiper>

			<div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
				<span
					className="circle-text"
					style={{ backgroundImage: "url('/images/hero/circle-text.webp')" }}
				></span>
				<Link className="circle-icon" href="/services">
					<i className="tji-arrow-down-big"></i>
				</Link>
			</div>
		</section>
	);
};

export default memo(Hero2);

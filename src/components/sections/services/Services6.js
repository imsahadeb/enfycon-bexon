"use client";
import ServiceCard from "@/components/shared/cards/ServiceCard7";
import ServicesSlider3 from "@/components/shared/services/ServicesSlider3";
import getALlServices from "@/libs/getALlServices";
import Link from "next/link";
import { useState, useRef } from "react";

const Services6 = () => {
	const [activeTab, setActiveTab] = useState(0);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const tabs = [
		{
			id: "ai-allied-services",
			name: "AI & Allied Services",
			title: "AI & Allied Services",
			desc: "Transform your business with cutting-edge AI solutions. We harness machine learning and emerging technologies to build intelligent systems that automate processes, enhance decision-making, and drive innovation.",
			services: getALlServices()?.slice(0, 3),
		},
		{
			id: "it-professional-staffing",
			name: "IT Professional Staffing",
			title: "IT Professional Staffing",
			desc: "Connect with top-tier IT talent to power your digital transformation. Our staffing solutions provide skilled professionals across all technology domains, ensuring you have the expertise to drive innovation.",
			services: [
				{
					id: 1,
					title: "US IT Staffing",
					desc3: "Access elite US-based IT professionals to strengthen your team with top-tier talent for mission-critical projects.",
					img4: "/images/service/us-it-staffing.png",
				},
				{
					id: 2,
					title: "Domestic IT Staffing",
					desc3: "Connect with skilled domestic IT talent across various technologies to meet your local business requirements.",
					img4: "/images/service/domestic-it-staffing.png",
				},
				{
					id: 3,
					title: "Offshore Dedicated Teams",
					desc3: "Build dedicated offshore development teams that work as an extension of your organization, delivering quality at scale.",
					img4: "/images/service/offshore-dedicated-teams.png",
				},
			],
		},
		{
			id: "data-analytics",
			name: "Data & Analytics",
			title: "Data & Analytics",
			desc: "Unlock the power of your data with advanced analytics solutions. We transform raw data into actionable insights through data engineering, predictive modeling, and visualizations that drive better business decisions.",
			services: getALlServices()?.slice(2, 5),
		},

		{
			id: "cybersecurity-services",
			name: "Cybersecurity Services",
			title: "Cybersecurity Services",
			desc: "Protect your digital assets with enterprise-grade security solutions. Our cybersecurity experts implement robust defense strategies, threat detection systems, and compliance frameworks to safeguard your business from threats.",
			services: getALlServices()?.slice(6, 9),
		},
	];

	return (
		<section className="h6-service section-gap bg-dark">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-left style-2 style-6 ">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>OUR Services
							</span>
							<h2 className="sec-title  title-anim tw:!text-white ">
								Innovative Solutions for Modern Enterprises
							</h2>
						</div>
					</div>
				</div>

				{/* Desktop View (Tabs + Slider) */}
				<div className="d-none d-lg-block">
					{/* Tabs Navigation */}
					<div className="row mb-5 justify-content-center">
						<div className="col-12 col-lg-12">
							<ul className="service-tabs d-flex flex-wrap  gap-1 list-unstyled border-bottom pb-2 border-secondary" style={{ borderColor: "rgba(255,255,255,0.1)!important" }}>
								{tabs.map((tab, index) => (
									<li key={index} className="nav-item">
										<button
											className={`nav-link bg-transparent border-0 px-3 py-2 w-full service-tab-btn ${activeTab === index
												? "text-white fw-bold active"
												: "inactive-tab"
												}`}
											onClick={() => setActiveTab(index)}
											style={{
												transition: "all 0.3s ease",
												cursor: "pointer",
												fontSize: "16px",
												position: "relative",
												width: "100%",
												textAlign: "left",

											}}
										>
											{tab.name}
											{activeTab === index && (
												<span
													style={{
														position: "absolute",
														bottom: "-9px",
														left: "0",
														width: "100%",
														height: "2px",
														backgroundColor: "#ffffff",
													}}
												/>
											)}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Tab Content */}
					<div className="row mb-4 align-items-end justify-content-between">
						<div className="col-lg-8 col-12">
							<div className="tab-content-header mb-4 mb-lg-0">
								<h3 className="section-title text-white mb-3 wow fadeInUp" data-wow-delay=".3s">
									{tabs[activeTab].title}
								</h3>
								<p className="text-light opacity-80 wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: "700px" }}>
									{tabs[activeTab].desc}
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-12 text-end">
							<div className="slider-navigation d-flex justify-content-lg-end justify-content-start mb-4 gap-2 wow fadeInUp" data-wow-delay=".5s">
								<button ref={prevRef} className="service-3-prev slider-prev service-nav-btn">
									<span className="anim-icon">
										<i className="tji-arrow-left"></i>
										<i className="tji-arrow-left"></i>
									</span>
								</button>
								<button ref={nextRef} className="service-3-next slider-next service-nav-btn">
									<span className="anim-icon">
										<i className="tji-arrow-right"></i>
										<i className="tji-arrow-right"></i>
									</span>
								</button>
							</div>
						</div>
					</div>

					<div className="row ">
						<div className="col-12 ">
							<ServicesSlider3 services={tabs[activeTab].services} hideNavigation={true} prevRef={prevRef} nextRef={nextRef} />
						</div>
					</div>
				</div>

				{/* Mobile View (List of Categories) */}
				<div className="d-block d-lg-none">
					<div className="row">
						{tabs.map((tab, index) => (
							<div key={index} className="col-12 mb-5">
								<div className="mobile-service-category">
									<h3 className="section-title text-white mb-3">
										<Link href={`/services`}>{tab.title}</Link>
									</h3>
									<p className="text-light opacity-75 mb-4">
										{tab.desc}
									</p>
									<div className="mobile-service-card">
										{/* Show the first service card as representative */}
										{tab.services && tab.services.length > 0 && (
											<ServiceCard service={tab.services[0]} idx={0} />
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services6;

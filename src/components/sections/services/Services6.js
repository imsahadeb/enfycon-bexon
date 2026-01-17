"use client";
import ServicesSlider3 from "@/components/shared/services/ServicesSlider3";
import getALlServices from "@/libs/getALlServices";
import { useState } from "react";

const Services6 = () => {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		{
			name: "AI & Allied Services",
			title: "AI & Allied Services",
			desc: "CSM Tech pioneers in AI and allied services, crafting innovative solutions that redefine industries. From machine learning to cutting-edge technologies, we drive transformative outcomes for a smarter future.",
			services: getALlServices()?.slice(0, 3), // Simulate different services
		},
		{
			name: "Consulting & Allied Services",
			title: "Consulting & Allied Services",
			desc: "Our consulting services help businesses navigate complex challenges and seize opportunities. We provide expert advice and strategic planning to drive growth and efficiency.",
			services: getALlServices()?.slice(3, 6),
		},
		{
			name: "Data & Analytics",
			title: "Data & Analytics",
			desc: "Unlock the power of your data with our advanced analytics solutions. We help you turn raw data into actionable insights that drive better business decisions.",
			services: getALlServices()?.slice(2, 5),
		},
	
		{
			name: "IT Facilities, Cybersecurity & Partner Services",
			title: "IT & Cybersecurity",
			desc: "Secure your business and optimize your IT infrastructure with our comprehensive facilities and cybersecurity services.",
			services: getALlServices()?.slice(0, 3).reverse(),
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
								Comprehensive Services for Corporates
							</h2>
						</div>
					</div>
				</div>

				{/* Tabs Navigation */}
				<div className="row mb-5 justify-content-center">
					<div className="col-12 col-lg-12">
						<ul className="service-tabs d-flex flex-wrap  gap-1 list-unstyled border-bottom pb-2 border-secondary" style={{ borderColor: "rgba(255,255,255,0.1)!important" }}>
							{tabs.map((tab, index) => (
								<li key={index} className="nav-item">
									<button
										className={`nav-link bg-transparent border-0 px-3 py-2 w-full ${activeTab === index
												? "text-white fw-bold"
												: "tw:!text-gray-300"
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
				<div className="row mb-4">
					<div className="col-12">
						<div className="tab-content-header mb-4">
							<h3 className="section-title text-white mb-3 wow fadeInUp" data-wow-delay=".3s">
								{tabs[activeTab].title}
							</h3>
							<p className="text-light opacity-80 wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: "700px" }}>
								{tabs[activeTab].desc}
							</p>
						</div>
					</div>
				</div>

				<div className="row ">
					<div className="col-12 ">
						<ServicesSlider3 services={tabs[activeTab].services} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services6;

"use client";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";
import { footerData } from "@/data/footerData";
import { usePathname } from "next/navigation";

const Footer2 = () => {
	const pathname = usePathname();

	// Helper to determine if a link is active
	const isActive = (path) => pathname === path;

	return (
		<footer className="tj-footer-section footer-2">
			<div className="container">
				{/* Main Footer Area */}
				<div className="footer-main-area">
					<div className="row">
						{/* Col 1: Contact & Info (Left Side) */}
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget footer-col-1">
								<div className="logo-area mb-4">
									<Link href="/">
										<img src="/images/logos/enfycon-white.png" alt="Logos" />
									</Link>
								</div>
								<p className="desc mb-4">
									{footerData.contactInfo.description}
								</p>

								<div className="footer-contact-info">
									<h5 className="title">Contact Us</h5>
									<p className="address mb-3">{footerData.contactInfo.address}</p>
									<ul className="list-unstyled">
										<li className="mb-2">
											<a href={`tel:${footerData.contactInfo.phone}`}>
												<i className="fa-solid fa-phone me-2"></i>
												{footerData.contactInfo.phone}
											</a>
										</li>
										<li className="mb-4">
											<a href={`mailto:${footerData.contactInfo.email}`}>
												<i className="fa-solid fa-envelope me-2"></i>
												{footerData.contactInfo.email}
											</a>
										</li>
									</ul>
								</div>

								<div className="social-icons">
									{footerData.socialLinks.map((social, index) => (
										<Link key={index} href={social.link} target="_blank" className="me-3">
											<i className={social.icon}></i>
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Col 2: Industries */}
						<div className="col-xl-2 col-lg-2 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">Industries</h5>
								<ul>
									{industriesData.map((industry) => (
										<li key={industry.id}>
											<Link
												href={`/industries/${industry.id}`}
												className={isActive(`/industries/${industry.id}`) ? "active" : ""}
											>
												{industry.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Col 3: Services */}
						<div className="col-xl-2 col-lg-2 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">Services</h5>
								<ul>
									{footerData.services.map((service, index) => (
										<li key={index}>
											<Link
												href={service.link}
												className={isActive(service.link) ? "active" : ""}
											>
												{service.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Col 4: Products */}
						<div className="col-xl-2 col-lg-2 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">Products</h5>
								<ul>
									{footerData.products.map((product, index) => (
										<li key={index}>
											<Link
												href={product.link}
												className={isActive(product.link) ? "active" : ""}
											>
												{product.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Col 5: About & Other (Combined to save space if needed, or kept separate) */}
						<div className="col-xl-3 col-lg-2 col-md-6">
							<div className="row">
								<div className="col-12">
									<div className="footer-widget widget-nav-menu mb-4">
										<h5 className="title">About Us</h5>
										<ul>
											{footerData.about.map((item, index) => (
												<li key={index}>
													<Link
														href={item.link}
														className={isActive(item.link) ? "active" : ""}
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
								{/* <div className="col-12">
                                    <div className="footer-widget widget-nav-menu">
                                        <h5 className="title">Other Links</h5>
                                        <ul>
                                            {footerData.otherLinks.map((item, index) => (
                                                <li key={index}>
                                                    <Link 
                                                        href={item.link} 
                                                        className={isActive(item.link) ? "active" : ""}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div> */}
							</div>
						</div>
					</div>
				</div>

				{/* Copyright - kept simple */}
				<div className="tj-copyright-area-2">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area justify-content-center text-center">
								<div className="copyright-text">
									<p>
										&copy; {new Date().getFullYear()} <Link href="#" target="_blank"> enfycon</Link>. All Rights Reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer2;

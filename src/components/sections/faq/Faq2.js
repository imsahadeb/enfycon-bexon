import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/config/siteConfig";

const Faq2 = ({
	data = [
		{
			title: "What services does enfycon Inc offer?",
			desc: "\tenfycon Inc is a global technology and talent partner specializing in AI-driven digital transformation. We craft intelligent ecosystems that help enterprises operate, scale, and innovate through advanced AI, Web 3.0, and software engineering solutions. Our comprehensive services include Technology Hiring Solutions, AI-driven solutions, and end-to-end digital transformation across the USA, India, and UAE.",
			initActive: true,
		},
		{
			title: "What is enfycon's mission and vision?",
			desc: "\tOur mission is to enable enterprises to become intelligent, agile, and future-ready by delivering world-class technology, talent, and AI-driven solutions that solve real business challenges and accelerate digital transformation. We're dedicated to creating lasting value for clients, employees, partners, and communities, using technology responsibly to drive growth, trust, and positive impact in our rapidly evolving digital world.",
			initActive: false,
		},
		{
			title: "What makes enfycon's work culture unique?",
			desc: "\tOur culture is built on five core pillars: People First & Well-Being (health, safety, and professional growth with fair labor practices), Integrity, Trust & Transparency (highest ethical standards with data privacy compliance), Excellence, Accountability & Quality (operational excellence with measurable outcomes), Diversity, Equity & Inclusion (celebrating diversity across all backgrounds), and Collaboration & Responsible Innovation (open collaboration for secure, future-ready solutions).",
			initActive: false,
		},
		{
			title: "What is enfycon's track record and experience?",
			desc: "\tWith over 20 years of experience in the technology industry, enfycon has achieved a 98% client satisfaction rate. We operate across three major regions—USA, India, and UAE—and are on a mission to digitally transform over a million businesses worldwide. We believe people are the foundation, not just resources, emphasizing accountability, transparency, and long-term relationships.",
			initActive: false,
		},
		{
			title: "How do I get started with enfycon?",
			desc: "\tGetting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your digital transformation needs and how we can best assist you. Our team keeps you informed throughout the entire process, ensuring quality control, transparency, and timely delivery aligned with your business objectives.",
			initActive: false,
		},
	],
	title = "Need Help? Start Here...",
	desc = (
		<>
			We stay ahead of curve, leveraging <br /> cutting-edge are technologies
			and <br /> strategies to competitive
		</>
	),
	type = 1,
	callBoxText = "Get Started",
	contactLink,
	contactText = siteConfig.phone.display,
	rightTitle,
	showCallBox = true,
}) => {
	const items = data;
	return (
		<section
			className={`tj-faq-section section-gap  ${type === 3 || type === 4 ? "" : "tj-arrange-container-2"
				}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										{title}
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									{desc}
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${type === 3 ? "" : "tj-arrange-item-2"
									}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.jpg"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										{title}
									</h2>
								</div>
								{showCallBox && (
									<div className="box-area ">
										<div className="call-box">
											<h4 className="title">
												<Link href="/contact-us" className="text-white text-decoration-none">
													{callBoxText}
												</Link>
											</h4>
											<span className="call-icon">
												<i className="tji-phone"></i>
											</span>
											{contactLink ? (
												<Link className="number" href={contactLink}>
													<span>{contactText}</span>
												</Link>
											) : (
												<Link
													className="number"
													href={`tel:${siteConfig.phone.link}`}
												>
													<span>{contactText}</span>
												</Link>
											)}
										</div>
									</div>
								)}
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							{rightTitle && (
								<div className="sec-heading mb-4">
									<h3 className="section-title">{rightTitle}</h3>
								</div>
							)}
							<div
								className={`accordion tj-faq ${type === 2 || type === 4 ? "style-2" : ""
									} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
										<FaqItem key={idx} item={item} idx={idx} />
									))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;

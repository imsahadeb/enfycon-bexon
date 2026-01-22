import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "What services does Enfycon Inc offer?",
			desc: "\tEnfycon Inc is a global technology and talent partner specializing in AI-driven digital transformation. We craft intelligent ecosystems that help enterprises operate, scale, and innovate through advanced AI, Web 3.0, and software engineering solutions. Our comprehensive services include IT staffing, AI-driven solutions, and end-to-end digital transformation across the USA, India, and UAE.",
			initActive: true,
		},
		{
			title: "What is Enfycon's mission and vision?",
			desc: "\tOur mission is to enable enterprises to become intelligent, agile, and future-ready by delivering world-class technology, talent, and AI-driven solutions that solve real business challenges and accelerate digital transformation. We're dedicated to creating lasting value for clients, employees, partners, and communities, using technology responsibly to drive growth, trust, and positive impact in our rapidly evolving digital world.",
			initActive: false,
		},
		{
			title: "What makes Enfycon's work culture unique?",
			desc: "\tOur culture is built on five core pillars: People First & Well-Being (health, safety, and professional growth with fair labor practices), Integrity, Trust & Transparency (highest ethical standards with data privacy compliance), Excellence, Accountability & Quality (operational excellence with measurable outcomes), Diversity, Equity & Inclusion (celebrating diversity across all backgrounds), and Collaboration & Responsible Innovation (open collaboration for secure, future-ready solutions).",
			initActive: false,
		},
		{
			title: "What is Enfycon's track record and experience?",
			desc: "\tWith over 20 years of experience in the technology industry, Enfycon has achieved a 98% client satisfaction rate. We operate across three major regions—USA, India, and UAE—and are on a mission to digitally transform over a million businesses worldwide. We believe people are the foundation, not just resources, emphasizing accountability, transparency, and long-term relationships.",
			initActive: false,
		},
		{
			title: "How do I get started with Enfycon?",
			desc: "\tGetting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your digital transformation needs and how we can best assist you. Our team keeps you informed throughout the entire process, ensuring quality control, transparency, and timely delivery aligned with your business objectives.",
			initActive: false,
		},
	];
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
										Need <span>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									We stay ahead of curve, leveraging <br /> cutting-edge are
									technologies and <br /> strategies to competitive
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
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Need Help? Start Here...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Get Started Free Call? </h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:18884521505">
											<span>1-888-452-1505</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
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

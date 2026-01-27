import { ScrollSmoother } from "@/libs/gsap.config";
import { usePathname, useRouter } from "next/navigation";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const pathname = usePathname();
	const router = useRouter();
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const homeNav = makeActiveLink(navItems[0]);
	const aboutNav = makeActiveLink(navItems[1]);
	const serviceNav = makeActiveLink(navItems[2]);
	const industriesNav = makeActiveLink(navItems[3]);
	const productsNav = makeActiveLink(navItems[4]);
	const csrNav = makeActiveLink(navItems[5]);
	const contactNav = makeActiveLink(navItems[6]);
	const blogsNav = makeActiveLink(navItems[7]);

	const handleScroll = (e, href) => {
		e.preventDefault();
		const [path, hash] = href.split("#");

		if (pathname === path) {
			const target = document.getElementById(hash);
			const smoother = ScrollSmoother.get();
			if (smoother && target) {
				smoother.scrollTo(target, true, "top 100");
			}
		} else {
			router.push(href);
		}
	};

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{/* About Us */}
					<li
						className={`has-dropdown ${aboutNav?.isActive ? "current-menu-ancestor" : ""
							}`}
					>
						<Link href={aboutNav?.path ? aboutNav?.path : "#"}>
							{aboutNav?.name ? aboutNav?.name : "About us"}
						</Link>
						<ul className="sub-menu mega-menu mega-menu-about mega-menu-pages">
							<li>
								<div className="mega-menu-wrapper">
									{aboutNav?.submenu?.length
										? aboutNav?.submenu?.map((section, idx) => (
											<div key={idx} className="mega-menu-pages-single mega-menu-service-col">
												<div className="mega-menu-pages-single-inner">
													<h6 className="mega-menu-title">
														{section?.name}
													</h6>
													<div className="mega-menu-list">
														{section?.items?.length
															? section?.items?.map((item, idx2) => (
																<Link
																	key={100 + idx2}
																	href={item?.path ? item?.path : "/"}
																	className={`mega-menu-service-single ${item?.isActive ? "active" : ""}`}
																	onClick={(e) => handleScroll(e, item?.path)}
																>
																	<span className="mega-menu-service-icon">
																		<i
																			className={item?.icon ? item?.icon : "tji-service-1"}
																		></i>
																	</span>
																	<span className="mega-menu-service-title">
																		{item?.name}
																	</span>
																	<span className="mega-menu-service-nav">
																		<i className="tji-arrow-right-long"></i>
																		<i className="tji-arrow-right-long"></i>
																	</span>
																</Link>
															))
															: ""}
													</div>
												</div>
											</div>
										))
										: ""}
								</div>
							</li>
						</ul>
					</li>

					{/* Services */}
					<li
						className={`has-dropdown ${serviceNav?.isActive ? "current-menu-ancestor" : ""
							}`}
					>
						<Link href={serviceNav?.path ? serviceNav?.path : "#"}>
							{serviceNav?.name}
						</Link>
						<ul className="sub-menu mega-menu mega-menu-pages">
							<li>
								<div className="mega-menu-wrapper">
									{serviceNav?.submenu?.length
										? serviceNav?.submenu?.map((category, idx) => (
											<div key={idx} className="mega-menu-pages-single mega-menu-service-col">
												<div className="mega-menu-pages-single-inner">
													<h6 className="mega-menu-title">
														{category?.name}
													</h6>
													<div className="mega-menu-list">
														{category?.items?.length
															? category?.items?.map((item, idx2) => (
																<Link
																	key={idx2}
																	href={item?.path ? item?.path : "/"}
																	className="mega-menu-service-single"
																>
																	<span className="mega-menu-service-icon">
																		<i
																			className={item?.icon ? item?.icon : "tji-service-1"}
																		></i>
																	</span>
																	<span className="mega-menu-service-title">
																		{item?.name}
																	</span>
																	<span className="mega-menu-service-nav">
																		<i className="tji-arrow-right-long"></i>
																		<i className="tji-arrow-right-long"></i>
																	</span>
																</Link>
															))
															: ""}
													</div>
												</div>
											</div>
										))
										: ""}
								</div>
							</li>
						</ul>
					</li>

					{/* Industries */}
					<li
						className={`has-dropdown ${industriesNav?.isActive ? "current-menu-ancestor" : ""
							}`}
					>
						<Link href={industriesNav?.path ? industriesNav?.path : "#"}>
							{industriesNav?.name}
						</Link>
						<ul className="sub-menu mega-menu mega-menu-pages" style={{ width: "auto" }}>
							<li>
								<div className="mega-menu-wrapper">
									<div className="mega-menu-pages-single mega-menu-service-col" style={{ borderInlineStart: "none", width: "100%" }}>
										<div className="mega-menu-pages-single-inner" style={{ padding: "10px 20px" }}>
											<div className="mega-menu-list" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px 50px" }}>
												{industriesNav?.submenu?.length
													? industriesNav?.submenu?.map((item, idx) => (
														<Link
															key={idx}
															href={item?.path ? item?.path : "/"}
															className="mega-menu-service-single"
														>
															<span className="mega-menu-service-icon">
																<i
																	className={
																		item?.icon ? item?.icon : "tji-industry"
																	}
																></i>
															</span>
															<span className="mega-menu-service-title">
																{item?.name
																	? item?.name
																	: "Industry"}
															</span>
															<span className="mega-menu-service-nav">
																<i className="tji-arrow-right-long"></i>
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													))
													: ""}
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>

					{/* Products */}
					<li
						className={`has-dropdown ${productsNav?.isActive ? "current-menu-ancestor" : ""
							}`}
					>
						<Link href={productsNav?.path ? productsNav?.path : "#"}>
							{productsNav?.name}
						</Link>
						<ul className="sub-menu mega-menu mega-menu-pages" style={{ width: "auto" }}>
							<li>
								<div className="mega-menu-wrapper">
									<div className="mega-menu-pages-single mega-menu-service-col" style={{ borderInlineStart: "none" }}>
										<div className="mega-menu-pages-single-inner">
											<div className="mega-menu-list">
												{productsNav?.submenu?.length
													? productsNav?.submenu?.map((item, idx) => (
														<Link
															key={idx}
															href={item?.path ? item?.path : "/"}
															className="mega-menu-service-single"
															style={{ borderBottom: idx < productsNav?.submenu?.length - 1 ? "1px solid var(--tj-color-border-1)" : "none" }}
														>
															<span className="mega-menu-service-icon">
																<i
																	className={
																		item?.icon ? item?.icon : "tji-industry"
																	}
																></i>
															</span>
															<span className="mega-menu-service-title">
																{item?.name
																	? item?.name
																	: "Product"}
															</span>
															<span className="mega-menu-service-nav">
																<i className="tji-arrow-right-long"></i>
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													))
													: ""}
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>

					{/* CSR Program */}
					<li className={csrNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={csrNav?.path ? csrNav?.path : "#"}>
							{csrNav?.name ? csrNav?.name : "CSR Program"}
						</Link>
					</li>

					{/* Blogs */}
					<li
						className={`${blogsNav?.isActive ? "current-menu-ancestor" : ""
							}`}
					>
						<Link href={blogsNav?.path ? blogsNav?.path : "#"}>
							{blogsNav?.name}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import Image from "next/image";
import Link from "next/link";
const BlogDetailsPrimary = ({ post, option }) => {
	const { prevId, nextId, isPrevItem, isNextItem } = option || {};
	const { title, featuredImage, author, day, month, year, commentCount, avatar, content } = post || {};
	return (
		<section className="tj-blog-section section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								{featuredImage ? (
									<Image
										src={featuredImage}
										alt="Images"
										width={870}
										height={450}
										style={{ height: "auto" }}
										unoptimized={true}
									/>
								) : (
									<Image
										src="/images/blog/blogs-backdrop.jpg"
										alt="Fallback Images"
										width={870}
										height={450}
										style={{ height: "auto" }}
										unoptimized={true}
									/>
								)}
							</div>



							<h2 className="title title-anim">{title}</h2>

							<div
								className="blog-category-two wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="category-item">
									<div className="cate-images">
										<Image
											src={avatar || "/images/testimonial/client-2.webp"}
											alt="Images"
											width={89}
											height={89}
										/>
									</div>
									<div className="cate-text">
										<span className="degination">Authored by</span>
										<h6 className="title">{author}</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Date Released</span>
										<h6 className="text">
											{day} {month}, {year}
										</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-comment"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Comments</span>
										<h6 className="text">{commentCount ? String(commentCount).padStart(2, '0') : "00"} Comments</h6>
									</div>
								</div>
							</div>

							{/* Table of Contents */}
							{(() => {
								// Process content to extract headings and inject IDs
								const processContent = (html) => {
									if (!html) return { processedContent: "", headings: [] };

									const headings = [];
									const processedContent = html.replace(/<h([2-4])[^>]*>(.*?)<\/h\1>/gi, (match, level, text) => {
										const cleanText = text.replace(/<[^>]*>/g, '');
										const id = cleanText
											.toLowerCase()
											.replace(/[^a-z0-9]+/g, '-')
											.replace(/(^-|-$)/g, '');

										headings.push({ id, text: cleanText, level: parseInt(level) });
										return `<h${level} id="${id}">${text}</h${level}>`;
									});

									return { processedContent, headings };
								};

								const { processedContent, headings } = processContent(content);

								return (
									<>
										{headings.length > 0 && (
											<div className="blog-toc-wrapper wow fadeInUp" data-wow-delay=".3s">
												<div className="toc-header">
													<i className="fa-regular fa-list-ul"></i>
													<h4 className="toc-title">Table of Contents</h4>
												</div>
												<ul className="toc-list">
													{headings.map((heading, index) => (
														<li key={index} className={`toc-item level-${heading.level}`}>
															<a href={`#${heading.id}`}>{heading.text}</a>
														</li>
													))}
												</ul>
											</div>
										)}

										<div className="blog-text">
											<div
												className="wow fadeInUp wp-content"
												data-wow-delay=".3s"
												dangerouslySetInnerHTML={{ __html: processedContent }}
											/>
										</div>
									</>
								);
							})()}

							{/* Tags and Social Share */}
							<div className="tags-share-wrapper wow fadeInUp" data-wow-delay="0.3s">
								{/* Tags */}
								<div className="tags-section">
									<span>Tags:</span>
									{post.tags && post.tags.map((tag, index) => (
										<Link
											key={index}
											href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
										>
											{tag}
										</Link>
									))}
								</div>

								{/* Social Share */}
								<div className="share-section">
									<span>Share:</span>
									<div className="social-icons">
										<a
											href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
											target="_blank"
											rel="noopener noreferrer"
											className="facebook"
										>
											<i className="fa-brands fa-facebook-f"></i>
										</a>
										<a
											href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${title}`}
											target="_blank"
											rel="noopener noreferrer"
											className="twitter"
										>
											<i className="fa-brands fa-x-twitter"></i>
										</a>
										<a
											href={`https://www.instagram.com/`}
											target="_blank"
											rel="noopener noreferrer"
											className="instagram"
										>
											<i className="fa-brands fa-instagram"></i>
										</a>
										<a
											href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
											target="_blank"
											rel="noopener noreferrer"
											className="linkedin"
										>
											<i className="fa-brands fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>

							<div
								className="tj-post__navigation  wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/blogs/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/blogs"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/blogs/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;

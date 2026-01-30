import BlogFeed from "@/components/sections/blogs/BlogFeed";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Header from "@/components/layout/header/Header";
import Footer2 from "@/components/layout/footer/Footer2";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import LatestBlogHero from "@/components/sections/blogs/LatestBlogHero";
import { mapPostToCard } from "@/libs/mappers";
import { getBlogPageData } from "@/libs/wpBlogs";

export const metadata = {
	title: "Blogs - enfycon",
	description: "Explore our latest insights and news",
};

export default async function BlogPage(props) {
	const searchParams = await props.searchParams;
	const category = searchParams?.category || null;
	const author = searchParams?.author || null;

	const data = await getBlogPageData(category, author);
	const latestPost = data?.latestPost;
	const postsData = data?.posts;

	if (!postsData) {
		return (
			<div className="container mt-5 pt-5 text-center">
				<h3>Unable to load blogs</h3>
				<p>We are experiencing some technical difficulties. Please check back later.</p>
				<a href="/blogs" className="btn btn-primary mt-3">Refresh Page</a>
			</div>
		);
	}

	const { nodes, pageInfo } = postsData;

	// Map initial posts to the format expected by BlogCard1
	const initialPosts = nodes.map((node) => mapPostToCard(node, category));

	return (
		<div>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<LatestBlogHero post={latestPost} />

						<section className="tj-blog-section section-gap pt-4">
							<div className="container">
								<div className="row mb-4">
									<div className="col-12">
										<h3 className="section-title">Latest Articles</h3>
									</div>
								</div>
								<BlogFeed
									initialPosts={initialPosts}
									initialPageInfo={pageInfo}
									category={category}
								/>
							</div>
						</section>
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

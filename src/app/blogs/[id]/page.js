import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { getAllBlogs, getBlogBySlug } from "@/libs/wpBlogs";
import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
	const { id } = await params;
	const post = await getBlogBySlug(id);

	if (!post) {
		notFound();
	}

	return (
		<div>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<BlogDetailsMain post={post} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

export async function generateStaticParams() {
	const items = await getAllBlogs();
	return items?.map(({ id }) => ({ id: id.toString() }));
}


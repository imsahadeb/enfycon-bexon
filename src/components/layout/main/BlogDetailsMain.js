import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import BlogHeroEnterprise from "@/components/sections/blogs/BlogHeroEnterprise";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import { getAllBlogs } from "@/libs/wpBlogs";

const BlogDetailsMain = async ({ post }) => {
	const items = await getAllBlogs();
	const option = getPreviousNextItem(items, post.id);

	return (
		<div>
			<HeaderSpace />
			<BlogHeroEnterprise post={post} />
			<BlogDetailsPrimary post={post} option={option} />
		</div>
	);
};

export default BlogDetailsMain;


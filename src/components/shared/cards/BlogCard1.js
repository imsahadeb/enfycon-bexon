import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import sliceText from "@/libs/sliceText";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard1 = ({ blog, idx }) => {
	const { title, featuredImage, id, category, categorySlug, author, day, month } = blog || {};
	return (
		<div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					{" "}
					<Image
						src={featuredImage || "/images/blog/blogs-backdrop.jpg"}
						alt={title || "Blog Image"}
						width={870}
						height={450}
						unoptimized={true}
					/>
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span className="categories">
						<Link href={`/blogs?category=${categorySlug || makePath(category)}`}>
							{" "}
							{category}
						</Link>
					</span>
					<span>
						By <Link href={`/blogs?author=${author}`}>{author || "enfycon"}</Link>
					</span>
				</div>
				<h4 className="title">
					<Link href={`/blogs/${id}`}>{sliceText(title, 45, true)}</Link>
				</h4>

				<ButtonPrimary
					text={"Read More"}
					url={`/blogs/${id}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};


export default BlogCard1;

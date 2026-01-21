"use client";
import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogSingle = ({ blog, idx }) => {
	const {
		id,
		featuredImage,
		title,
		desc,
		category,
		author,
		day,
		month,
	} = blog ? blog : {};

	return (
		<article
			className="blog-item wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.1)}
		>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					{featuredImage ? (
						<Image
							src={featuredImage}
							alt={title || "Blog Image"}
							width={870}
							height={450}
							unoptimized={true}
						/>
					) : (
						<Image
							src="/images/blog/blogs-backdrop.jpg"
							alt="Fallback Blog Image"
							width={870}
							height={450}
							unoptimized={true}
						/>
					)}
				</Link>


				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span className="categories">
						<Link href={`/blogs?category=${makePath(category)}`}>
							{category}
						</Link>
					</span>
					<span>
						By <Link href={`/blogs/${id}`}>{author || "enfycon"}</Link>
					</span>
				</div>
				<h3 className="title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h3>
				<div
					className="desc"
					dangerouslySetInnerHTML={{ __html: desc }}
				/>
				<ButtonPrimary
					text={"Read More"}
					url={`/blogs/${id}`}
					isTextBtn={true}
				/>
			</div>
		</article>
	);
};


export default BlogSingle;

import Link from "next/link";
import Image from "next/image";
import styles from "./blog-hero-enterprise.module.scss";

const BlogHeroEnterprise = ({ post }) => {
    const { title, date, day, month, year, readTime, author, category, featuredImage, avatar } = post || {};

    // Format date if day/month/year provided, else fallback to date string
    const formattedDate = day && month && year ? `${day} ${month}, ${year}` : date;

    return (
        <section
            className={styles.heroSection}
            style={{
                "--hero-bg-image": `url(${featuredImage || '/images/bg/service-banner.jpg'})`
            }}
        >
            <div className={styles.container + " container"}>
                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span className={styles.separator}>&gt;</span>
                    <Link href="/blogs">Blogs</Link>
                    <span className={styles.separator}>&gt;</span>
                    {category && (
                        <>
                            <Link href={`/blogs?category=${category}`}>{category}</Link>
                            <span className={styles.separator}>&gt;</span>
                        </>
                    )}
                    {/* Truncate title in breadcrumb if too long */}
                    <span className={styles.current}>
                        {title?.length > 40 ? title.substring(0, 40) + "..." : title}
                    </span>
                </div>

                {/* Title */}
                <h1 className={styles.title}>{title}</h1>

                {/* Meta Info */}
                <div className={styles.metaRow}>

                    {/* Author */}
                    <div className={styles.metaItem}>
                        <span>By</span>
                        {avatar && (
                            <div className={styles.authorImage}>
                                <Image
                                    src={avatar}
                                    alt={author}
                                    width={30}
                                    height={30}
                                    className={styles.avatar}
                                />
                            </div>
                        )}
                        <Link href={`/blogs?author=${author}`} className={styles.authorLink}>{author || "Enfycon"}</Link>
                    </div>

                    <div className={styles.separator}></div>

                    {/* Category */}
                    <div className={styles.metaItem}>
                        <Link href={`/blogs?category=${category}`} className={styles.categoryLink}>{category || "Insights"}</Link>
                    </div>

                    <div className={styles.separator}></div>

                    {/* Date */}
                    {formattedDate && (
                        <div className={styles.metaItem}>
                            <i className="flaticon-calendar"></i>
                            <span>{formattedDate}</span>
                        </div>
                    )}

                    <div className={styles.separator}></div>

                    {/* Read Time */}
                    <div className={styles.metaItem}>
                        <i className="flaticon-clock"></i>
                        <span>{readTime || "4 mins"} Read</span>
                    </div>
                </div>
            </div>

            {/* Zig Zag Strip */}
            <div className={styles.zigzagStrip}></div>
        </section>
    );
};

export default BlogHeroEnterprise;

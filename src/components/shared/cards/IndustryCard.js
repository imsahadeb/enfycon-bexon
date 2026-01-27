import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const IndustryCard = ({ industry, idx, basePath = "/industries" }) => {
    const { id, title, desc, image, icon } = industry || {};

    return (
        <div className="industry-card">
            <div className="industry-image-wrapper">
                <Link href={`${basePath}/${id}`}>
                    <Image
                        src={image || "/images/industries/default.png"}
                        alt={title || "Industry"}
                        width={400}
                        height={280}
                        quality={85}
                        className="industry-image"
                        priority={idx < 3}
                    />
                </Link>
            </div>
            <div className="industry-content">
                <h3 className="industry-title">
                    <Link href={`${basePath}/${id}`}>{title}</Link>
                </h3>
                <p className="industry-desc">{desc}</p>
                <Link href={`${basePath}/${id}`} className="industry-link">
                    Find Out More
                    <i className="tji-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default memo(IndustryCard);

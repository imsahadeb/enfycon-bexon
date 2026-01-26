"use client";

import Image from "next/image";

const ImageFeatureGrid = ({ title, items, gridClass = "image-feature-grid", sectionClass = "" }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className={`image-feature-section ${sectionClass} wow fadeInUp`} data-wow-delay=".3s">
            <div className="container">
                {title && <h3 className="section-title text-primary mb-4">{title}</h3>}
                <div className={gridClass}>
                    {items.map((item, idx) => (
                        <div className="image-feature-card" key={idx}>
                            <div className="image-wrapper">
                                {item.image &&
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={250}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                }
                            </div>
                            <div className="accent-bar" style={{ backgroundColor: item.color || 'var(--tj-color-theme-primary)' }}></div>
                            <div className="content">
                                <h4 className="title">{item.title}</h4>
                                <p className="desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageFeatureGrid;

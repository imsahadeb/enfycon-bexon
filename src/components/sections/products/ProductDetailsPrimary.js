"use client";

import { useState } from "react";
import Link from "next/link";
import IconFeatureGrid from "@/components/shared/sections/IconFeatureGrid";

const ProductDetailsPrimary = ({ option }) => {
    const [isHovering, setIsHovering] = useState(false);

    const {
        currentItem,
        items,
        currentId,
        isPrevItem,
        isNextItem,
        prevId,
        nextId,
    } = option || {};
    const { title, desc, longDesc, tagline } = currentItem || {};

    const gradients = [
        'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', // Blue to Purple
        'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)', // Cyan to Blue
        'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)', // Green to Cyan
        'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', // Amber to Red
    ];
    const borderColors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#ef4444'];

    return (
        <section className="tj-service-area" id="product-details">

            {/* Product Description - Containerized */}
            <div className="container section-gap-top mb-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="post-details-wrapper py-5">
                            {currentItem.overviewTitle && (
                                <h3 className="section-title text-primary mb-4 text-3xl">{currentItem.overviewTitle}</h3>
                            )}
                            <div className="blog-text">
                                <div className="service-section wow fadeInUp" data-wow-delay=".3s">
                                    {longDesc ? (
                                        longDesc.map((text, i) => (
                                            <p key={i} className="mb-4 text-lg">{text}</p>
                                        ))
                                    ) : (
                                        desc && <p className="mb-4 text-lg">{desc}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Benefits Section - Full Width (Gray Background) */}
            {currentItem.benefits && (
                <IconFeatureGrid
                    title="Key Benefits"
                    items={currentItem.benefits}
                    sectionClass="product-benefits-section bg-gray-1 py-5"
                />
            )}

            {/* How It Works Section - Full Width (White Background) */}
            {currentItem.howItWorks && (
                <IconFeatureGrid
                    title="How It Works"
                    items={currentItem.howItWorks}
                    sectionClass="product-how-it-works-section py-5"
                />
            )}

            {/* Use Cases Section - Gradient Cards */}
            {currentItem.useCases && (
                <div className="product-use-cases-section bg-gray-1 py-5">
                    <div className="container">
                        <h3 className="section-title text-primary mb-4">Use Cases Across Industries</h3>
                        <div className="row g-4">
                            {currentItem.useCases.map((useCase, idx) => (
                                <div key={idx} className="col-lg-6">
                                    <div
                                        className="use-case-card h-100 wow fadeInUp"
                                        data-wow-delay={`${0.1 * (idx + 1)}s`}
                                        style={{
                                            background: 'var(--tj-white)',
                                            borderRadius: '16px',
                                            padding: '0',
                                            overflow: 'hidden',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            border: `2px solid ${borderColors[idx % 4]}`,
                                            position: 'relative',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                                        }}
                                    >
                                        {/* Gradient Header */}
                                        <div
                                            style={{
                                                background: gradients[idx % 4],
                                                padding: '25px 30px',
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {/* Decorative circle */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '-20px',
                                                right: '-20px',
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '50%',
                                                background: 'rgba(255,255,255,0.1)',
                                            }}></div>

                                            <div className="d-flex align-items-center">
                                                <div
                                                    style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        borderRadius: '14px',
                                                        background: 'rgba(255,255,255,0.25)',
                                                        backdropFilter: 'blur(10px)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        border: '2px solid rgba(255,255,255,0.3)',
                                                        marginRight: '15px',
                                                    }}
                                                >
                                                    <i
                                                        className={useCase.icon}
                                                        style={{
                                                            fontSize: '32px',
                                                            color: '#fff',
                                                        }}
                                                    ></i>
                                                </div>
                                                <h4
                                                    style={{
                                                        fontSize: '24px',
                                                        fontWeight: '700',
                                                        color: '#fff',
                                                        textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                        margin: 0,
                                                    }}
                                                >
                                                    {useCase.title}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div style={{ padding: '30px' }}>
                                            <ul
                                                style={{
                                                    listStyle: 'none',
                                                    margin: 0,
                                                    padding: 0,
                                                }}
                                            >
                                                {useCase.items?.map((item, itemIdx) => (
                                                    <li
                                                        key={itemIdx}
                                                        className="d-flex align-items-start mb-3"
                                                        style={{
                                                            fontSize: '15px',
                                                            lineHeight: '1.7',
                                                            color: 'var(--tj-grey-1)',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: '24px',
                                                                height: '24px',
                                                                borderRadius: '50%',
                                                                background: gradients[idx % 4],
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0,
                                                                marginRight: '12px',
                                                                marginTop: '2px',
                                                            }}
                                                        >
                                                            <i
                                                                className="fa-solid fa-check"
                                                                style={{
                                                                    color: '#fff',
                                                                    fontSize: '11px',
                                                                }}
                                                            ></i>
                                                        </div>
                                                        <span style={{ flex: 1 }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA & Navigation - Containerized */}
            <div className="container section-gap-bottom mt-5">
                {currentItem.cta && (
                    <div className="industry-cta-box wow fadeInUp" data-wow-delay=".3s">
                        <h3 className="title text-primary">{currentItem.cta.title}</h3>
                        <p className="desc">{currentItem.cta.desc}</p>
                        <Link href={currentItem.cta.buttonLink} className="tj-btn-primary">
                            {currentItem.cta.buttonText} <i className="tji-arrow-right"></i>
                        </Link>
                    </div>
                )}

                <div
                    className="tj-post__navigation mb-0 wow fadeInUp mt-5"
                    data-wow-delay="0.3s"
                >
                    {/* Previous Product */}
                    <div
                        className="tj-nav__post previous"
                        style={{ visibility: isPrevItem ? "visible" : "hidden" }}
                    >
                        <div className="tj-nav-post__nav prev_post">
                            <Link href={isPrevItem ? `/products/${prevId}` : "#"}>
                                <span>
                                    <i className="tji-arrow-left"></i>
                                </span>
                                Previous
                            </Link>
                        </div>
                    </div>
                    <Link href={"/products"} className="tj-nav-post__grid">
                        <i className="tji-window"></i>
                    </Link>
                    {/* Next Product */}
                    <div
                        className="tj-nav__post next"
                        style={{ visibility: isNextItem ? "visible" : "hidden" }}
                    >
                        <div className="tj-nav-post__nav next_post">
                            <Link href={isNextItem ? `/products/${nextId}` : "#"}>
                                Next
                                <span>
                                    <i className="tji-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsPrimary;

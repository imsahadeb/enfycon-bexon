"use client";

import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CtaSidebar from "../cta/CtaSidebar";

const IndustryDetailsPrimary = ({ option }) => {
    const {
        currentItem,
        items,
        currentId,
        isPrevItem,
        isNextItem,
        prevId,
        nextId,
    } = option || {};
    const { title, desc, image } = currentItem || {};

    return (
        <section className="tj-service-area section-gap" id="industry-details">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="col-lg-8">
                        <div className="post-details-wrapper">
                            <h2 className="title title-anim">
                                {title}
                            </h2>
                            <div className="blog-text">
                                {/* Industry Description */}
                                <div className="service-section wow fadeInUp" data-wow-delay=".3s">
                                    {desc && (
                                        <p className="mb-4">{desc}</p>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <div className="mt-5 wow fadeInUp" data-wow-delay=".3s">
                                    <Link href="/contact" className="tj-btn-primary">
                                        Get Started Now <i className="tji-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            <div
                                className="tj-post__navigation mb-0 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                {/* <!-- previous post --> */}
                                <div
                                    className="tj-nav__post previous"
                                    style={{ visibility: isPrevItem ? "visible" : "hidden" }}
                                >
                                    <div className="tj-nav-post__nav prev_post">
                                        <Link href={isPrevItem ? `/industries/${prevId}` : "#"}>
                                            <span>
                                                <i className="tji-arrow-left"></i>
                                            </span>
                                            Previous
                                        </Link>
                                    </div>
                                </div>
                                <Link href={"/industries"} className="tj-nav-post__grid">
                                    <i className="tji-window"></i>
                                </Link>
                                {/* <!-- next post --> */}
                                <div
                                    className="tj-nav__post next"
                                    style={{ visibility: isNextItem ? "visible" : "hidden" }}
                                >
                                    <div className="tj-nav-post__nav next_post">
                                        <Link href={isNextItem ? `/industries/${nextId}` : "#"}>
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
                        <aside className="tj-main-sidebar">
                            {/* <!-- Industries List --> */}
                            <div
                                className="tj-sidebar-widget service-categories wow fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">More Industries</h4>
                                {(() => {
                                    const itemsPerPage = 10; // Show more for industries as list is small
                                    const [currentPage, setCurrentPage] = useState(1);
                                    const allItems = items || [];
                                    const totalPages = Math.ceil(allItems.length / itemsPerPage);

                                    const currentItems = allItems.slice(
                                        (currentPage - 1) * itemsPerPage,
                                        currentPage * itemsPerPage
                                    );

                                    return (
                                        <>
                                            <ul>
                                                {currentItems.length > 0 ? (
                                                    currentItems.map(({ title: shortTitle, id }, idx) => (
                                                        <li key={idx}>
                                                            <Link
                                                                className={`${currentId === id ? "active" : ""}`}
                                                                href={`/industries/${id}`}
                                                            >
                                                                {shortTitle}
                                                                <span className="icon">
                                                                    <i className="tji-arrow-right"></i>
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li>No items available</li>
                                                )}
                                            </ul>
                                        </>
                                    );
                                })()}
                            </div>

                            {/* <!-- cta --> */}
                            <div
                                className="tj-sidebar-widget widget-feature-item wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <CtaSidebar />
                            </div>
                        </aside>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default IndustryDetailsPrimary;

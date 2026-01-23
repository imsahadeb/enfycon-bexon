import Link from "next/link";
import React from "react";

const IndustryHero = ({ title, text, breadcrums = [], image }) => {
    return (
        <section
            className="tj-industry-hero"
            style={{
                backgroundImage: `url('${image ? image : "/images/bg/service-banner.jpg"}')`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-industry-hero-content">
                            <div className="tj-industry-hero-breadcrumbs">
                                <span>
                                    <Link href="/">Home</Link>
                                </span>
                                <span>
                                    <i className="tji-arrow-right"></i>
                                </span>
                                {breadcrums?.length
                                    ? breadcrums?.map(({ name, path }, idx) => (
                                        <React.Fragment key={idx}>
                                            <span>
                                                <Link href={path ? path : "/"}>{name}</Link>
                                            </span>
                                            <span>
                                                <i className="tji-arrow-right"></i>
                                            </span>
                                        </React.Fragment>
                                    ))
                                    : ""}
                                <span>Overview</span>
                            </div>
                            <h1 className="title">{title}</h1>
                            <div className="desc">
                                <p>{text}</p>
                            </div>
                            <div className="tj-industry-hero-button">
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="industry-hero-overlay"
                style={{ backgroundImage: `url('/images/shape/pheader-overlay.webp')` }}
            ></div>
        </section>
    );
};

export default IndustryHero;

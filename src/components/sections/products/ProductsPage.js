"use client";
import IndustryCard from "@/components/shared/cards/IndustryCard";
import { productsData } from "@/data/productsData";

const ProductsPage = () => {
    return (
        <div className="tj-industries-section section-gap">
            <div className="container">
                {/* Page Header */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <div className="sec-heading">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className="tji-box"></i>Our Products
                            </span>
                            <h2 className="sec-title title-anim">
                                Breaking Boundaries, Building Dreams
                            </h2>
                            <p className="sec-desc mt-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                                Intelligent AI-powered solutions designed to transform your business operations
                                and drive growth. From customer engagement to analytics, our products deliver
                                cutting-edge technology tailored to your industry needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Product Cards Grid - Reusing IndustryCard component */}
                <div className="row row-gap-4">
                    {productsData.map((product, idx) => (
                        <div key={product.id} className="col-lg-4 col-md-6">
                            <IndustryCard industry={product} idx={idx} basePath="/products" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;

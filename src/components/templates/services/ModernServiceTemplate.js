import React from "react";
import getALlServices from "@/libs/getALlServices";
import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import ApproachSection from "@/components/sections/services/cyber/ApproachSection";
import ProductUseCaseSection from "@/components/sections/products/ProductUseCaseSection";
import WhyUsSection from "@/components/sections/services/WhyUsSection";
import Faq2 from "@/components/sections/faq/Faq2";
import Blogs2 from "@/components/sections/blogs/Blogs2";

const ModernServiceTemplate = ({ serviceSlug }) => {
    const services = getALlServices();
    const currentItem = services.find((service) => service.id === serviceSlug);

    // Guard clause if service not found
    if (!currentItem) return <div>Service not found</div>;

    const {
        title,
        desc,
        img,
        img4,
        overview,
        catchyTitle,
        challenges,
        keyBenefits,
        whyUsItems,
        faqs,
        category,
        categoryId
    } = currentItem;

    const breadcrums = [
        { name: "Services", path: "/services" },
        { name: category || "Service Category", path: `/services/${categoryId}` }
    ];

    // Data Transformations for Component Compatibility

    // 1. Challenges -> ApproachSection Items
    const approachItems = challenges?.map((challenge) => ({
        title: challenge.title,
        desc: challenge.desc,
        icon: challenge.icon || "fa-light fa-shield-exclamation"
    }));

    // 2. Key Benefits -> ProductUseCaseSection Items (Gradient Cards)
    const productUseCaseItems = keyBenefits?.map((benefit) => ({
        title: benefit.title,
        icon: benefit.icon || "fa-regular fa-star",
        items: benefit.items || [benefit.desc]
    }));

    const mappedFaqs = faqs?.map(faq => ({
        title: faq.question,
        desc: faq.answer
    }));

    return (
        <div className="cyber-security-wrapper">
            <FullScreenHero
                title={title}
                text={desc}
                breadcrums={breadcrums}
                image={img4 || img}
            />

            {/* Overview Section */}
            <section className="section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="overview-content">
                                <h3 className="section-title text-primary mb-4">{catchyTitle || 'Overview'}</h3>
                                <div className="overview-text">
                                    {overview && overview.split('\n').map((paragraph, index) => (
                                        paragraph.trim() && <p key={index} className="mb-4 text-lg">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            {approachItems && (
                <ApproachSection
                    approach={{
                        title: "Challenges We Solve",
                        desc: "We identify and overcome the critical obstacles standing in the way of your success.",
                        items: approachItems
                    }}
                />
            )}

            {/* Key Benefits Section */}
            {productUseCaseItems && (
                <ProductUseCaseSection
                    title="Key Benefits"
                    items={productUseCaseItems}
                />
            )}

            {/* Why Us Section */}
            {whyUsItems && <WhyUsSection items={whyUsItems} />}

            {/* Related Blogs Section */}
            <Blogs2
                categoryName={categoryId} // Uses the category ID to fetch relevant blogs
                title="Related Insights"
                description={`Stay updated with the latest trends in ${category || 'our services'}.`}
            />

            {/* FAQ Section */}
            {mappedFaqs && (
                <Faq2
                    data={mappedFaqs}
                    type={2}
                    title="Frequently Asked Questions"
                    rightTitle="Common Questions"
                />
            )}
        </div>
    );
};

export default ModernServiceTemplate;

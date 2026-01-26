import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import IndustrySplitSection from "@/components/shared/sections/IndustrySplitSection";
import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

import { csrData } from "@/data/csrData";

export const metadata = {
    title: "CSR - Corporate Social Responsibility | Enfycon",
    description: "Sustainable Impact, Transforming Lives through our CSR initiatives.",
};

import CsrProjects from "@/components/sections/csr/CsrProjects";
import CsrImpact from "@/components/sections/csr/CsrImpact";
import CsrApproach from "@/components/sections/csr/CsrApproach";

const CsrFeatured = ({ data }) => {
    return (
        <section className="csr-featured-section section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="sec-heading text-center">
                            <h2 className="sec-title uppercase">{data.title}</h2>
                            <p className="desc">{data.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    {data.items.map((item, idx) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                            <div className="csr-featured-item d-flex gap-4 p-4" style={{
                                background: 'white',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease'
                            }}>
                                <div className="icon-box" style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'var(--tj-color-theme-bg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    color: item.color
                                }}>
                                    <i className={item.icon} style={{ fontSize: '24px' }}></i>
                                </div>
                                <div className="content">
                                    <h5 className="title text-uppercase mb-2" style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>{item.title}</h5>
                                    <p className="desc" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function CsrPage() {
    return (
        <div>
            <BackToTop />
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* Hero */}
                        <FullScreenHero
                            title={csrData.hero.title}
                            text={csrData.hero.text}
                            breadcrums={csrData.hero.breadcrums}
                            image={csrData.hero.image}
                        />

                        {/* Our Approach - White BG */}
                        <CsrApproach data={csrData.approach} />

                        {/* Impact Stats - Blue BG */}
                        <CsrImpact data={csrData.impactStats} />

                        {/* Projects - White BG */}
                        <CsrProjects data={csrData.projects} />

                        {/* Impact - Gray BG */}
                        <div className="bg-gray-1">
                            <IndustrySplitSection
                                item={{
                                    title: csrData.impact.title,
                                    desc: csrData.impact.desc,
                                    image: csrData.impact.image
                                }}
                                sectionClass="csr-impact-section"
                            />
                        </div>

                        {/* Featured - White BG */}
                        <CsrFeatured data={csrData.featured} />



                    </main>
                    <Footer2 />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeroInner from "@/components/sections/hero/HeroInner";
import ProductsPage from "@/components/sections/products/ProductsPage";
import Contact2 from "@/components/sections/contacts/Contact2";
import Brands2 from "@/components/sections/brands/Brands2";
import { constructMetadata } from "@/libs/seo";

export const metadata = constructMetadata({
    title: "Our Products - AI-Powered Solutions | enfycon",
    description: "Explore enfycon's suite of AI-powered products including iCognito.ai, iDental.ai, lexGenie.ai, quantfin.ai, PerformanceEdge.ai, and iWac.ai.",
    image: "/images/product/icognito.jpg",
});

export default function Products() {
    return (
        <div>
            <BackToTop />
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeroInner title={"Products"} text={"Products"} />
                        <ProductsPage />
                        <Contact2 />
                       
                    </main>
                    <Footer2 />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}

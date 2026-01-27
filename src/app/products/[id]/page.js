import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { productsData } from "@/data/productsData";
import { notFound } from "next/navigation";

const items = productsData;

import { constructMetadata, generateDynamicMetadata } from "@/libs/seo";
import HeaderSpace from "@/components/shared/others/HeaderSpace";

export async function generateMetadata({ params }) {
    return generateDynamicMetadata({
        params,
        items,
        resourceName: "Product",
        keywordContext: (item) => {
            const benefits = item.benefits?.map(b => `${b.title} ${b.desc}`).join(" ") || "";
            const howItWorks = item.howItWorks?.map(h => `${h.title} ${h.desc}`).join(" ") || "";
            const useCases = item.useCases?.map(u => `${u.title} ${u.items?.join(" ")}`).join(" ") || "";
            return `${item.title} ${item.tagline} ${item.desc} ${benefits} ${howItWorks} ${useCases}`;
        }
    });
}

export default async function ProductDetails({ params }) {
    const { id } = await params;

    // Check using string comparison
    const isExistItem = items?.find(({ id: id1 }) => id1 === id);

    if (!isExistItem) {
        notFound();
    }

    return (
        <div>
            <BackToTop />
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeaderSpace />
                    <main>
                        <ProductDetailsMain currentItemId={id} />
                    </main>
                    <Footer2 />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}

export async function generateStaticParams() {
    return items?.map(({ id }) => ({ id: id.toString() }));
}

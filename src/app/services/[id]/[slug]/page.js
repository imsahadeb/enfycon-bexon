
import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { serviceCategories } from "@/data/servicesData";
import { notFound } from "next/navigation";
import { generateDynamicMetadata } from "@/libs/seo";
import getALlServices from "@/libs/getALlServices";

// Import Templates
import AIServiceTemplate from "@/components/templates/services/AIServiceTemplate";
import StaffingServiceTemplate from "@/components/templates/services/StaffingServiceTemplate";
import DefaultServiceTemplate from "@/components/templates/services/DefaultServiceTemplate";
import CyberSecurityServiceTemplate from "@/components/templates/services/CyberSecurityServiceTemplate";
import ModernServiceTemplate from "@/components/templates/services/ModernServiceTemplate";

const items = getALlServices();

// Map category IDs to their specific template components
const TEMPLATE_MAP = {
    'ai-allied-services': ModernServiceTemplate,
    'it-professional-staffing': StaffingServiceTemplate,
    'cybersecurity-services': CyberSecurityServiceTemplate,
    'data-analytics': ModernServiceTemplate,
    // Add more mappings here as needed
};

export async function generateMetadata({ params }) {
    return generateDynamicMetadata({
        params,
        items,
        resourceName: "Service",
        keywordContext: (item) => {
            const challenges = item.challenges?.map(c => `${c.title} ${c.desc}`).join(" ") || "";
            const keyBenefits = item.keyBenefits?.map(b => `${b.title} ${b.desc}`).join(" ") || "";
            const faqs = item.faqs?.map(f => `${f.question} ${f.answer}`).join(" ") || "";
            const whyenfycon = item.whyenfycon?.join(" ") || "";
            return `${item.title} ${item.desc} ${item.overview || ""} ${challenges} ${keyBenefits} ${faqs} ${whyenfycon}`;
        },
        idParamName: "slug"
    });
}

export default async function ServiceDetails({ params }) {
    // 'id' here corresponds to the Category ID (first segment)
    // 'slug' corresponds to the Service ID (second segment)
    const { id, slug } = await params;
    console.log(`[DEBUG] ServiceDetails - ID: ${id}, Slug: ${slug}`);

    // Validate Category (id)
    const categoryData = serviceCategories.find(c => c.id === id);
    console.log(`[DEBUG] categoryData found: ${!!categoryData}`);

    if (!categoryData) {
        console.log(`[DEBUG] Category not found: ${id}`);
        notFound();
    }

    // Validate Service within Category
    const serviceData = categoryData.services.find(s => s.id === slug);
    console.log(`[DEBUG] serviceData found: ${!!serviceData}`);

    if (!serviceData) {
        console.log(`[DEBUG] Service not found: ${slug} in category ${id}`);
        notFound();
    }

    // Select the appropriate template based on the category ID
    // If no specific template is found, fallback to DefaultServiceTemplate
    const TemplateComponent = TEMPLATE_MAP[id] || DefaultServiceTemplate;

    return (
        <div>
            <BackToTop />
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        {/* Render the selected template, passing the service slug */}
                        <TemplateComponent serviceSlug={slug} />
                    </main>
                    <Footer2 />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}

export async function generateStaticParams() {
    const params = [];
    serviceCategories.forEach(category => {
        category.services.forEach(service => {
            params.push({
                id: category.id,
                slug: service.id
            });
        });
    });
    return params;
}

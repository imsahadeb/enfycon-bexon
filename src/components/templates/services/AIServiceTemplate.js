import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";

const AIServiceTemplate = ({ serviceSlug }) => {
    // This can be customized later with specific AI-themed layout/hero
    return (
        <>
            {/* Example of a custom wrapper or class for AI specific styling */}
            <div className="ai-service-template">
                <ServiceDetailsMain currentItemId={serviceSlug} />
            </div>
        </>
    );
};

export default AIServiceTemplate;

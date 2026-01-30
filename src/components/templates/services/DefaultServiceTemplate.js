import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";

const DefaultServiceTemplate = ({ serviceSlug }) => {
    return <ServiceDetailsMain currentItemId={serviceSlug} />;
};

export default DefaultServiceTemplate;

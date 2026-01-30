import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";

const StaffingServiceTemplate = ({ serviceSlug }) => {
    // This can be customized later with specific Staffing-themed layout/hero
    return (
        <div className="staffing-service-template">
            <ServiceDetailsMain currentItemId={serviceSlug} />
        </div>
    );
};

export default StaffingServiceTemplate;

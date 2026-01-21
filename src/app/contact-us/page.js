import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import LocationSection from "@/components/sections/contacts/LocationSection";
import ContactFormCustom from "@/components/sections/contacts/ContactFormCustom";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
    title: "Contact Us - enfycon",
    description: "Get in touch with enfycon. Our global presence ensures local excellence in delivering top-notch solutions.",
};

export default function ContactUs() {
    return (
        <div>
            <BackToTop />
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>

                        <HeroInner title={"Contact Us"} text={"Contact Us"} />
                        <LocationSection />
                        <ContactFormCustom />
                    </main>
                    <Footer />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}

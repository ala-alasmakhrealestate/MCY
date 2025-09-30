
import {getMessages} from "next-intl/server";
import HeroSection from "@/app/components/remark/HeroSectionVideo";
import MarketingCatchySection from "@/app/components/MarketingCatchySection";
import AmenitiesSection from "@/app/components/amenities-section";
import MapWrapper from "@/app/components/MapWrapper";
import LeadForm from "@/app/components/lead-form-section";
import Footer from "@/app/components/Footer";
import PropertySection from "@/app/components/property-section1";
import CityNearby from "@/app/components/city-nearby-section1";
import Carousel from "@/app/components/visual-symphony-test";
import Providers from "@/app/providers";
import PropertyManagement from "@/app/components/property-management";
import GeneralInfoSection from "@/app/components/remark/generalInfoSection";
import AccessibilitySection from "@/app/components/remark/AccessibilitySection";
import PropertyManagementSection from "@/app/components/remark/PropertyManagementSection";
import CityNearbySection from "@/app/components/remark/CityNearbySection";

export async function generateMetadata({
                                           params: {locale},
                                       }: {
    params: { locale: string };
}) {
    const messages: any = await getMessages({locale});
    const title = messages.NavbarLinks.homeTitle;

    return {
        title,
    };
}

export default function Home() {
    return (
        <>
            {/*<div className="text-3xl font-bold mt-20">{t("title")}</div>*/}
            <Providers>
                {/*<HeroSection/>*/}
                <HeroSection/>
                <MarketingCatchySection/>
                <GeneralInfoSection/>
                {/*<PropertySection/>*/}
                <AccessibilitySection/>
                {/*<PropertySection/>*/}
                <PropertyManagementSection/>
                {/*<VisualSymphonyCarousel/>*/}
                <Carousel/>
                <MapWrapper/>
                {/*<CityNearby/>*/}
                <CityNearbySection/>
                <LeadForm/>
                {/*<Highlights/>*/}
                <Footer/>
            </Providers>
        </>
    );
}

"use client"



import {useTranslations} from "next-intl";

export default function MarketingCatchySection() {
    const common = useTranslations("Common");

    return (
        <section
            className="min-h-[20vh] relative w-full py-16 flex justify-center items-center overflow-hidden"
            style={{
                backgroundImage: "url(/images/bg/BG_Blog.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {/* Centered Text */}
            <div className="relative text-center px-4 z-10">
                <p
                    className="text-gray-800 text-3xl md:text-5xl font-avenirRoman capitalize"
                >
                    {common("welcoming")}
                </p>
            </div>
        </section>
    )
}

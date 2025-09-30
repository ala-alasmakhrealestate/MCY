"use client"

import Image from "next/image"
import {useTranslations} from "next-intl";

// maisameer.mov

export default function HeroSection() {
    const t = useTranslations("HomePage");
    const common = useTranslations("Common");
    return (
        <section
            className="w-full min-h-screen bg-cover bg-top bg-no-repeat flex flex-col"
            style={{
                backgroundImage: "url('/images/hero-section.jpg')",
            }}
        >
            {/* Logo Row */}
            <div className="p-6 md:p-10">
                <div className="">
                    <Image
                        src="/images/logo/MCY_AREDC_logo.png"
                        alt="MCY Logo"
                        width={1200}
                        height={1200}
                        className={"w-52"}
                    />
                </div>
            </div>

            {/* Hero Content (Grid Centered) */}
            <div
                className="flex items-center mt-24 md:items-center justify-center gap-8 px-8 sm:px-12 w-full">
                {/* Left: Heading + Paragraph */}
                <div className="flex flex-col gap-6 max-w-4xl text-center">
                    <h1 className="text-4xl font-avenirMedium md:text-6xl leading-tight text-[#04264d]">
                        {t("heroSection.welcome")} {" "}
                        <span className="font-avenirHeavy uppercase text-[#04264d]">
                            {common("Messaimeer")}
                          </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 font-avenirLight">
                        {t("heroSection.subTitle")}{" "}
                        <span className="font-avenirHeavy uppercase text-[#04264d]">
                            {common("promotion")}
                          </span>
                    </p>
                </div>

                {/* Right: Promo Card */}
                {/*<div className="bg-[#04264d]/30 rounded-sm shadow-lg p-5 text-white max-w-sm">*/}
                {/*    <h3 className="font-avenirHeavy text-lg mb-2">Mesaimeer City</h3>*/}
                {/*    <p className="text-sm mb-2">*/}
                {/*        2 Bedroom Apartments for rent{" "}*/}
                {/*        <span className="font-avenirHeavy">QAR 6,025 / Month</span>*/}
                {/*    </p>*/}
                {/*    <p className="text-sm">*/}
                {/*        1 Year Contract –{" "}*/}
                {/*        <span className="font-avenirHeavy">2 Months Free</span>*/}
                {/*    </p>*/}
                {/*    <p className="text-sm">*/}
                {/*        2 Year Contract –{" "}*/}
                {/*        <span className="font-avenirHeavy">3 Months Free</span>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>

        </section>
    )
}

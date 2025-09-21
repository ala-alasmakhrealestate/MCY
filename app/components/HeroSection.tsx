"use client"

import Image from "next/image"

export default function HeroSection() {
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
                        src="/images/logo/MCY & AREDC.png"
                        alt="MCY Logo"
                        width={100}
                        height={60}
                        className={"w-32"}
                    />
                </div>
            </div>

            {/* Hero Content (Grid Centered) */}
            <div
                className="flex flex-col md:flex-row items-start mt-28 sm:mt-64 md:items-center justify-between gap-8 px-8 sm:px-12 w-full">
                {/* Left: Heading + Paragraph */}
                <div className="flex flex-col gap-6 max-w-3xl">
                    <h1 className="text-4xl font-avenirMedium md:text-6xl leading-tight text-[#04264d]">
                        Welcome to{" "}
                        <span className="font-avenirHeavy uppercase text-[#04264d]">
                            Mesaimeer
                          </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 font-avenirLight">
                        Experience luxury living with our exclusive promotion:{" "}
                        <span className="font-avenirHeavy uppercase text-[#04264d]">
        up to 3 months free
      </span>{" "}
                        on selected properties.
                    </p>
                </div>

                {/* Right: Promo Card */}
                <div className="bg-[#04264d]/30 rounded-sm shadow-lg p-5 text-white max-w-sm">
                    <h3 className="font-avenirHeavy text-lg mb-2">Mesaimeer</h3>
                    <p className="text-sm mb-2">
                        2 Bedroom Apartments for rent{" "}
                        <span className="font-avenirHeavy">QAR 6,025 / Month</span>
                    </p>
                    <p className="text-sm">
                        1 Year Contract –{" "}
                        <span className="font-avenirHeavy">2 Months Free</span>
                    </p>
                    <p className="text-sm">
                        2 Year Contract –{" "}
                        <span className="font-avenirHeavy">3 Months Free</span>
                    </p>
                </div>
            </div>

        </section>
    )
}

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/hero-section.jpg"
                alt="Barwa City"
                fill
                className="object-cover object-top"
                priority
            />

            {/* Gradient Overlay */}
            {/*<div className="absolute inset-0 bg-black/40"></div>*/}

            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-gray-600 space-y-6 z-10">
                <h1 className="text-4xl font-avenirMedium md:text-6xl leading-tight">
                    Welcome to <span className="font-avenirHeavy uppercase text-[#04264d]">Barwa City</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-600 font-avenirLight max-w-lg">
                    Experience luxury living with our exclusive promotion:{" "}
                    <span className="font-avenirHeavy uppercase text-[#04264d]">up to 3 months free</span> on selected properties.
                </p>

                {/*<div className="flex flex-col sm:flex-row gap-4 mt-4">*/}
                {/*    <Button asChild size="lg">*/}
                {/*        <a href="#properties">Explore Properties</a>*/}
                {/*    </Button>*/}
                {/*    <Button*/}
                {/*        asChild*/}
                {/*        variant="outline"*/}
                {/*        size="lg"*/}
                {/*    >*/}
                {/*        <a href="#form-section" className="scroll-smooth">*/}
                {/*            Get Your Offer*/}
                {/*        </a>*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>

            {/* Floating Cards */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {/* MCY Logo */}
                <div className="absolute top-10 left-10 bg-white backdrop-blur rounded-xl shadow-lg p-4 flex flex-col items-center gap-2 w-44 animate-float">
                    <Image src="/images/logo/mcy-logo.jpg" alt="MCY Logo" width={60} height={60} />
                    {/*<span className="text-sm font-avenirMedium uppercase text-gray-800 text-center">*/}
                    {/*    Barwa City MCY*/}
                    {/*  </span>*/}
                </div>

                {/* Mesaimeer Promo Card */}
                <div className="absolute top-36 right-20 bg-[#04264d]/30 rounded-xl shadow-lg p-5 text-white max-w-xs animate-float delay-200">
                    <h3 className="font-avenirHeavy text-lg mb-2">Mesaimeer</h3>
                    <p className="text-sm mb-2">2 Bedroom Apartments for rent <span className="font-avenirHeavy">QAR 6,025 / Month</span></p>
                    <p className="text-sm">1 Year Contract – <span className="font-avenirHeavy">2 Months Free</span></p>
                    <p className="text-sm">2 Year Contract – <span className="font-avenirHeavy">3 Months Free</span></p>
                </div>

                {/* AREDC Logo */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white backdrop-blur rounded-xl shadow-lg p-4 flex flex-col items-center gap-2 w-36 animate-float delay-400">
                    <Image src="/images/logo/AREDC Square Logo-02.png" alt="AREDC Logo" width={50} height={50} />
                    {/*<span className="text-sm font-avenirHeavy text-gray-800 text-center">AREDC</span>*/}
                </div>
            </div>

            {/* Floating animation */}
            <style jsx>{`
                .animate-float {
                    animation: float 3s ease-in-out infinite alternate;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .delay-400 {
                    animation-delay: 0.4s;
                }
                @keyframes float {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-15px);
                    }
                }
            `}</style>
        </section>
    )
}

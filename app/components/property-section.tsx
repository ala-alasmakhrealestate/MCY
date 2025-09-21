"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import {useRef} from "react"

export default function PropertySection() {
    const images = [
        "/images/MCY/MCY1.jpg",
        "/images/MCY/MCY2.jpg",
        "/images/MCY/MCY3.jpg",
        "/images/MCY/MCY4.jpg",
        "/images/MCY/MCY5.jpg",
        "/images/MCY/MCY6.jpg",
        "/images/MCY/MCY7.jpg",
        "/images/MCY/MCY8.jpg",
        "/images/MCY/MCY9.jpg",
    ]

    const swiperRef = useRef<any>(null)

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Swiper Slider */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation
                            loop
                            slidesPerView={1}
                            spaceBetween={0}
                            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                            autoplay={{delay: 4000, disableOnInteraction: false}}
                            className="rounded-2xl overflow-hidden shadow-lg"
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={src}
                                        alt={`Skyvue Stellar ${index + 1}`}
                                        width={600}
                                        height={400}
                                        className="rounded-2xl object-cover w-full aspect-auto"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Pause/Resume on hover */}
                        <div
                            className="absolute inset-0"
                            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                            onMouseLeave={() => swiperRef.current?.autoplay.start()}
                        />
                    </div>

                    {/* Right: Info Section */}
                    <div className="space-y-5">
                        <h5 className="text-2xl font-bold text-gray-900">
                            <a href="https://sobharealty.com/properties-in-dubai/skyvue-stellar/">
                                MCY - Barwa City
                            </a>
                        </h5>
                        <p className="text-gray-700 text-lg">
                            2 Bedroom Apartments
                        </p>
                        <p className="font-avenirLight text-gray-600">
                            Amazing Unfurnished 2-Bedroom Apartment in Mesaimeer City – AC & Gas Included.
                        </p>
                        <p className="font-avenirLight text-gray-600">
                            Enjoy life in a vibrant, fully serviced community surrounded by expansive green areas,
                            offering schools, sports courts, parks, a bank, a hypermarket, a medical center, and much
                            more — all within easy reach.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li>
                                <span className="font-avenirHeavy">Square Meter:</span>
                                {/*<div>AED 1.87 M | USD 511 K | EUR 505 K | GBP 415 K</div>*/}
                                <div className="text-sm text-gray-500">
                                    101 sqm
                                </div>
                            </li>
                            <li>
                                <span className="font-avenirHeavy">Price:</span>
                                {/*<div>AED 8.69 M | USD 2.38 M | EUR 2.36 M | GBP 1.94 M</div>*/}
                                <div className="text-sm text-gray-500">
                                    6,025 QAR
                                </div>
                            </li>
                        </ul>

                        <h4 className="text-lg font-semibold text-gray-900">Handover: March 2029</h4>
                        <p className="text-sm text-gray-500">*Subject to Availability</p>

                        <div className="flex gap-4">
                            <Button asChild>
                                <a
                                    href="/docs/Skyvue-Stellar.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download Brochure
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="https://sobharealty.com/properties-in-dubai/skyvue-stellar/">
                                    Learn More
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

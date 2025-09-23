"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"
import {useRef, useState} from "react"
import {NavigationOptions} from "swiper/types";
import {BiVideo} from "react-icons/bi";
import {Button} from "@/components/ui/button";
import {IoIosPricetag} from "react-icons/io";
import {RxSize} from "react-icons/rx";


export default function PropertySection() {

    const [showVideo, setShowVideo] = useState(false)

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
            <div className="w-screen mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    {/* Left: Swiper Slider */}
                    <div className="relative col-span-8">
                        {/* Custom navigation buttons */}
                        <div
                            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer"
                            id="custom-prev"
                        >
                            {/* Replace with your icon, e.g., an SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </div>
                        <div
                            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer"
                            id="custom-next"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop
                            slidesPerView={1}
                            spaceBetween={0}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                                // Link custom navigation
                                // TypeScript-safe way to set custom navigation
                                if (typeof swiper.params.navigation !== "boolean") {
                                    const nav = swiper.params.navigation as NavigationOptions
                                    nav.prevEl = "#custom-prev"
                                    nav.nextEl = "#custom-next"
                                }
                            }}
                            autoplay={{delay: 4000, disableOnInteraction: false}}
                            className="rounded-none overflow-hidden"
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={src}
                                        alt={`Mesaimeer ${index + 1}`}
                                        width={600}
                                        height={400}
                                        className="rounded-none object-cover object-center w-full aspect-video"
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
                    <div className="space-y-5 col-span-4">
                        <div>
                            {/*<h5 className="text-2xl uppercase font-avenirHeavy text-gray-900">*/}
                            {/*    Mesaimeer city*/}
                            {/*</h5>*/}
                            <p className="text-gray-700 font-avenirHeavy uppercase text-2xl">
                                2 Bedroom Apartments
                            </p>
                            <p className="text-gray-700 font-avenirMedium uppercase text-sm">
                                2 Months free for 1 Year
                            </p><p className="text-gray-700 font-avenirMedium uppercase text-sm">
                                3 Months free for 2 Years
                            </p>
                        </div>

                        <p className="font-avenirLight text-md text-gray-600">
                            Amazing Unfurnished 2-Bedroom Apartment in Mesaimeer City – AC & Gas Included.
                        </p>
                        <p className="font-avenirLight text-md text-gray-600">
                            Enjoy life in a vibrant, fully serviced community surrounded by expansive green areas,
                            offering schools, sports courts, parks, a bank, a hypermarket, a medical center, and much
                            more — all within easy reach.
                        </p>
                        <div className="flex text-gray-700">
                            {/* Item */}
                            <div className="flex-0 pr-4 border-r border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center font-avenirHeavy mr-1">
                                        <RxSize className="mr-2 text-gray-600"/>
                                        {/*<span>Size:</span>*/}
                                    </div>
                                    <div className="text-gray-500">101 sqm</div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="flex-0 px-4  border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center font-avenirHeavy mr-1">
                                        <IoIosPricetag className="mr-2 text-gray-600"/>
                                        {/*<span>Rent:</span>*/}
                                    </div>
                                    <div className="text-sm text-gray-500">6,025 QAR</div>
                                </div>
                            </div>

                            {/* Item */}
                            {/*<div className="flex-0 pl-4">*/}
                            {/*    <div className="flex items-start justify-between">*/}
                            {/*        <div className="flex items-center font-avenirHeavy mr-1">*/}
                            {/*            /!*<IoIosPricetag className="mr-2 text-gray-600"/>*!/*/}
                            {/*            <span>Offers:</span>*/}
                            {/*        </div>*/}
                            {/*        <div className={"block"}>*/}
                            {/*            <div className="text-sm text-gray-500">1 Year - 2 Months free</div>*/}
                            {/*            <div className="text-sm text-gray-500">2 Years - 3 Months free</div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="font-avenirLight text-md text-gray-600">
                            Property Layout:
                            <br/>• 1 Master Bedroom with attached bathroom
                            <br/>• 1 Additional Bedroom
                            <br/>• 1 Shared Bathroom
                            <br/>• 1 Guest Toilet
                            <br/>• Living and Dining Room
                            <br/>• Kitchen
                        </div>

                        {/*<div className="flex text-gray-700">*/}
                        {/*    /!* Item *!/*/}
                        {/*    <div className="flex-0 pr-4 border-r border-gray-200">*/}
                        {/*        <div className="flex items-center justify-between">*/}
                        {/*            <div className="flex items-center font-avenirHeavy mr-1">*/}
                        {/*                <RxSize className="mr-2 text-gray-600"/>*/}
                        {/*                /!*<span>Size:</span>*!/*/}
                        {/*            </div>*/}
                        {/*            <div className="text-gray-500">101 sqm</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    /!* Item *!/*/}
                        {/*    <div className="flex-0 px-4 border-r border-gray-200">*/}
                        {/*        <div className="flex items-center justify-between">*/}
                        {/*            <div className="flex items-center font-avenirHeavy mr-1">*/}
                        {/*                <IoIosPricetag className="mr-2 text-gray-600"/>*/}
                        {/*                /!*<span>Rent:</span>*!/*/}
                        {/*            </div>*/}
                        {/*            <div className="text-sm text-gray-500">6,025 QAR</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    /!* Item *!/*/}
                        {/*    /!*<div className="flex-0 pl-4">*!/*/}
                        {/*    /!*    <div className="flex items-start justify-between">*!/*/}
                        {/*    /!*        <div className="flex items-center font-avenirHeavy mr-1">*!/*/}
                        {/*    /!*            /!*<IoIosPricetag className="mr-2 text-gray-600"/>*!/*!/*/}
                        {/*    /!*            <span>Offers:</span>*!/*/}
                        {/*    /!*        </div>*!/*/}
                        {/*    /!*        <div className={"block"}>*!/*/}
                        {/*    /!*            <div className="text-sm text-gray-500">1 Year - 2 Months free</div>*!/*/}
                        {/*    /!*            <div className="text-sm text-gray-500">2 Years - 3 Months free</div>*!/*/}
                        {/*    /!*        </div>*!/*/}
                        {/*    /!*    </div>*!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*</div>*/}


                        {/*<h4 className="text-lg font-semibold text-gray-900">Handover: March 2029</h4>*/}
                        {/*<p className="text-sm text-gray-500">*Subject to Availability</p>*/}

                        <div className="flex gap-4">
                            {/*<Button variant={"outline"} onClick={() => setShowVideo(true)}*/}
                            {/*        className={"rounded-sm font-avenirMedium text-gray-500 w-14 h-14"}>*/}
                            {/*</Button>*/}
                            <Button variant={"outline"} size={"lg"} className={"bg-gray-50 rounded-sm font-avenirLight text-sm uppercase"} onClick={() => setShowVideo(true)}>
                                <BiVideo  className={"h-8 w-8 text-[#04264d]"}/> Video
                            </Button>
                            {showVideo && (
                                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                                    <button
                                        className="absolute top-5 right-5 text-white text-xl"
                                        onClick={() => setShowVideo(false)}
                                    >
                                        ✕
                                    </button>
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/8tTpGdYW3Ys?autoplay=1"
                                        title="YouTube video"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                            {/*<Button asChild variant="outline">*/}
                            {/*    <a href="https://sobharealty.com/properties-in-dubai/skyvue-stellar/">*/}
                            {/*        Learn More*/}
                            {/*    </a>*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

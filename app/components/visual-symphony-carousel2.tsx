"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useRef, useState } from "react"

const slides = [
    "/images/exterior/1-ARE02365-Enhanced-NR.jpg",
    "/images/exterior/2-ARE02346-Enhanced-NR-2.jpg",
    "/images/exterior/3-ARE02332-Enhanced-NR-2.jpg",
    "/images/exterior/5-ARE02302-Enhanced-NR-2.jpg",
    "/images/exterior/6-ARE02231-Enhanced-NR-2.jpg",
]

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef<any>(null)

    return (
        <section className="visual-symphony-wrapper py-12 bg-white">
            <div className="w-screen mx-auto px-4 relative">
                <h2 className="text-3xl md:text-4xl font-avenirMedium uppercase text-center mb-8">
                    A Visual Symphony
                </h2>

                {/* Custom Navigation Buttons */}
                <div
                    className="absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer"
                    id="custom-prev"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-800 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div
                    className="absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer"
                    id="custom-next"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-800 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    autoHeight
                    centeredSlides
                    slidesPerView={3}
                    spaceBetween={40}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                        // TypeScript-safe assignment of custom navigation
                        if (swiper.params.navigation) {
                            ;(swiper.params.navigation.prevEl as HTMLElement | string) = "#custom-prev"
                            ;(swiper.params.navigation.nextEl as HTMLElement | string) = "#custom-next"
                        }
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 60 },
                    }}
                    className="rounded-sm group"
                >
                    {slides.map((src, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex justify-center transition-transform duration-500"
                        >
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className={`object-cover w-full
                                    transition-all duration-500
                                    ${index === activeIndex ? "w-[70vw] scale-125 z-20" : "w-[50vw] scale-90 z-10 opacity-70"}
                                    aspect-[16/9] md:aspect-[4/3]`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pause/Resume autoplay on hover */}
                <div
                    className="absolute inset-0"
                    onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay.start()}
                />
            </div>
        </section>
    )
}

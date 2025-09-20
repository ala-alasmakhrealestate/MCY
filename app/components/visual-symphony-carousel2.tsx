"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import {useRef, useState} from "react"

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

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    loop
                    autoHeight={true}
                    centeredSlides
                    slidesPerView={3}
                    spaceBetween={40} // space between slides
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    breakpoints={{
                        320: {slidesPerView: 1, spaceBetween: 20},
                        768: {slidesPerView: 2, spaceBetween: 30},
                        1024: {slidesPerView: 3, spaceBetween: 60},
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
                                className={`rounded-sm object-cover w-full
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

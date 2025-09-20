"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
]

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "center", skipSnaps: false },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    )
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [ready, setReady] = useState(false)

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", () => onSelect(emblaApi))
        emblaApi.on("reInit", () => onSelect(emblaApi))
        onSelect(emblaApi)
        setReady(true)
    }, [emblaApi, onSelect])

    return (
        <div className="relative w-screen mx-auto">
            {/* Carousel Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((src, index) => {
                        if (!ready) {
                            // prevent initial "all big" flash
                            return (
                                <div
                                    key={index}
                                    className="flex-[0_0_70%] md:flex-[0_0_50%] sm:flex-[0_0_100%] px-2"
                                >
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                                    />
                                </div>
                            )
                        }

                        // Calculate relative position to the selected index
                        let distance =
                            (index - selectedIndex + slides.length) % slides.length
                        if (distance > slides.length / 2) {
                            distance -= slides.length
                        }

                        const isCenter = distance === 0
                        const scale = isCenter ? 1 : 0.8
                        const opacity = isCenter ? 1 : 0.6

                        return (
                            <div
                                key={index}
                                className="flex-[0_0_70%] md:flex-[0_0_50%] sm:flex-[0_0_100%] px-2 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `scale(${scale})`,
                                    opacity,
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Arrows */}
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                onClick={() => emblaApi?.scrollPrev()}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                onClick={() => emblaApi?.scrollNext()}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}

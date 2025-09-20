"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"

/**
 * VisualSymphonyCarousel
 *
 * Desktop (coverflow): center slide ~70vw, sides partially visible (split),
 * Tablet: 2 slides side-by-side (no coverflow),
 * Mobile: 1 slide visible.
 *
 * Infinite loop via modular arithmetic (no DOM cloning).
 */

export default function VisualSymphonyCarousel() {
    // Put your images under /public/images/...
    const images = [
        "/images/gallery1.jpg",
        "/images/gallery2.jpg",
        "/images/gallery3.jpg",
        "/images/gallery4.jpg",
        "/images/gallery5.jpg",
    ]

    const containerRef = useRef<HTMLDivElement | null>(null)
    const slidesRef = useRef<HTMLDivElement[]>([])
    const intervalRef = useRef<number | null>(null)
    const [current, setCurrent] = useState(0) // index of center slide
    const total = images.length

    // responsive mode: "desktop" | "tablet" | "mobile"
    const getMode = (w: number) => {
        if (w >= 1024) return "desktop"
        if (w >= 640) return "tablet"
        return "mobile"
    }
    const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">(
        typeof window !== "undefined" ? getMode(window.innerWidth) : "desktop"
    )

    // Update mode + container size on resize
    useEffect(() => {
        const onResize = () => {
            setMode(getMode(window.innerWidth))
            // re-run animation positions after resize
            requestAnimationFrame(() => applyPositions(current))
        }
        window.addEventListener("resize", onResize)
        onResize()
        return () => window.removeEventListener("resize", onResize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // autoplay
    useEffect(() => {
        startAutoPlay()
        return () => stopAutoPlay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // animate whenever current or mode changes
    useEffect(() => {
        applyPositions(current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, mode])

    // helpers to start/stop autoplay
    function startAutoPlay() {
        stopAutoPlay()
        intervalRef.current = window.setInterval(() => {
            next()
        }, 3000)
    }
    function stopAutoPlay() {
        if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    // Next/Prev handlers (infinite wrap)
    const next = () => setCurrent((s) => (s + 1) % total)
    const prev = () => setCurrent((s) => (s - 1 + total) % total)

    // core function: compute and apply positions with GSAP
    function applyPositions(centerIndex: number) {
        const container = containerRef.current
        if (!container) return
        const containerRect = container.getBoundingClientRect()
        const cw = containerRect.width

        // layout parameters per mode
        if (mode === "desktop") {
            // center slide width approx 70vw (70% of container)
            const centerW = Math.round(Math.min(window.innerWidth * 0.7, cw * 0.9))
            // distance from center to show partial sides (tweak this to taste)
            const sideGap = Math.round(centerW * 0.28) // how far side slides appear
            // vertical size (calculate using 16:9 aspect ratio)
            const slideH = Math.round(centerW * 9 / 16)

            slidesRef.current.forEach((el, i) => {
                if (!el) return
                // set base dims (all slides same base width; scale will adjust visual size)
                el.style.width = `${centerW}px`
                el.style.height = `${slideH}px`

                // compute modular relative index 0..total-1 where 0 is center
                const rel = (i - centerIndex + total) % total

                let x = 0
                let scale = 0.8
                let opacity = 0
                let zIndex = 1

                if (rel === 0) {
                    // center
                    x = 0
                    scale = 1
                    opacity = 1
                    zIndex = 30
                } else if (rel === 1) {
                    // right
                    x = sideGap
                    scale = 0.86
                    opacity = 0.9
                    zIndex = 20
                } else if (rel === total - 1) {
                    // left
                    x = -sideGap
                    scale = 0.86
                    opacity = 0.9
                    zIndex = 20
                } else if (rel === 2) {
                    // right-far (slightly visible or hidden)
                    x = sideGap * 2
                    scale = 0.78
                    opacity = 0
                    zIndex = 10
                } else if (rel === total - 2) {
                    // left-far
                    x = -sideGap * 2
                    scale = 0.78
                    opacity = 0
                    zIndex = 10
                } else {
                    // offscreen
                    x = (rel < total / 2 ? sideGap * 3 : -sideGap * 3)
                    scale = 0.7
                    opacity = 0
                    zIndex = 1
                }

                // animate to computed values
                gsap.to(el, {
                    x,
                    scale,
                    opacity,
                    duration: 0.8,
                    ease: "power3.out",
                    zIndex,
                    overwrite: true,
                })
            })
        } else if (mode === "tablet") {
            // 2 slides side-by-side, each occupies roughly 50% container
            const slideW = Math.round(cw * 0.5)
            const slideH = Math.round(slideW * 9 / 16) // maintain aspect ratio

            slidesRef.current.forEach((el, i) => {
                if (!el) return
                el.style.width = `${slideW}px`
                el.style.height = `${slideH}px`

                const rel = (i - centerIndex + total) % total
                let x = 0
                let scale = 1
                let opacity = 0
                let zIndex = 1

                if (rel === 0) {
                    // left visible slide
                    x = -slideW / 2
                    opacity = 1
                    zIndex = 20
                } else if (rel === 1) {
                    // right visible slide
                    x = slideW / 2
                    opacity = 1
                    zIndex = 20
                } else {
                    // hidden (position them far right/left)
                    x = rel < total / 2 ? slideW * 2 + (rel - 2) * 50 : -slideW * 2 + (rel - total + 2) * -50
                    opacity = 0
                    zIndex = 1
                }

                gsap.to(el, {
                    x,
                    scale,
                    opacity,
                    duration: 0.7,
                    ease: "power3.out",
                    zIndex,
                    overwrite: true,
                })
            })
        } else {
            // mobile: single slide visible (full width)
            const slideW = Math.round(cw) // full container width
            const slideH = Math.round(slideW * 9 / 16)

            slidesRef.current.forEach((el, i) => {
                if (!el) return
                el.style.width = `${slideW}px`
                el.style.height = `${slideH}px`

                const rel = (i - centerIndex + total) % total
                let x = 0
                let opacity = 0
                let zIndex = 1

                if (rel === 0) {
                    x = 0
                    opacity = 1
                    zIndex = 20
                } else {
                    // position left or right offscreen
                    x = rel < total / 2 ? slideW * 2 : -slideW * 2
                    opacity = 0
                    zIndex = 1
                }

                gsap.to(el, {
                    x,
                    opacity,
                    duration: 0.6,
                    ease: "power3.out",
                    zIndex,
                    overwrite: true,
                })
            })
        }
    }

    // pause on pointer interactions
    const onPointerEnter = () => stopAutoPlay()
    const onPointerLeave = () => startAutoPlay()

    // helper to set slide refs
    const setSlideRef = (el: HTMLDivElement | null, idx: number) => {
        if (!el) return
        slidesRef.current[idx] = el
    }

    return (
        <section className="visual-symphony-wrapper py-12 bg-white">
            <div className="container mx-auto px-4 relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">A Visual Symphony</h2>

                <div
                    ref={containerRef}
                    className="relative w-full flex justify-center items-center"
                    onMouseEnter={onPointerEnter}
                    onMouseLeave={onPointerLeave}
                    onTouchStart={onPointerEnter}
                    onTouchEnd={onPointerLeave}
                >
                    {/* Slides (absolutely centered then moved by GSAP) */}
                    {images.map((src, i) => (
                        <div
                            key={i}
                            ref={(el) => el && setSlideRef(el, i)}
                            className="slide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-lg"
                            style={{
                                willChange: "transform, opacity",
                                transformOrigin: "center center",
                                // width/height are set dynamically by applyPositions()
                            }}
                            aria-hidden={((i - current + total) % total) !== 0}
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${i + 1}`}
                                fill
                                sizes="(min-width:1024px) 70vw, (min-width:640px) 50vw, 100vw"
                                style={{ objectFit: "cover" }}
                                priority={i === current} // center slide priority
                            />
                        </div>
                    ))}

                    {/* Arrows */}
                    <button
                        aria-label="Previous"
                        onClick={() => {
                            prev()
                            startAutoPlay()
                        }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow hover:bg-gray-100"
                    >
                        {/* simple SVG arrow */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M15 6 L9 12 L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        aria-label="Next"
                        onClick={() => {
                            next()
                            startAutoPlay()
                        }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow hover:bg-gray-100"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M9 6 L15 12 L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
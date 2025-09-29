"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const videoEl = videoRef.current
        if (videoEl) {
            videoEl.volume = 0.3 // optional: lower volume
            // videoEl.muted = false   // keep muted for autoplay
            videoEl.play().catch(() => {})
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!videoEl) return

                    // Play/pause only
                    if (entry.isIntersecting) {
                        videoEl.play().catch(() => {})
                    } else {
                        videoEl.pause()
                    }
                })
            },
            { threshold: 0.3 }
        )

        const section = document.getElementById("hero-section")
        if (section) observer.observe(section)

        return () => {
            if (section) observer.unobserve(section)
        }
    }, [])

    return (
        <section
            id="hero-section"
            className="relative w-full min-h-screen flex flex-col overflow-hidden"
        >
            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/maisameer.mov"
                autoPlay
                loop
                muted // keep muted for autoplay
                playsInline
            />

            {/* Logo Row */}
            <div className="relative z-10 p-6 md:p-10">
                <Image
                    src="/images/logo/MCY_AREDC_logo.png"
                    alt="MCY Logo"
                    width={1200}
                    height={1200}
                    className="w-36 sm:w-52 "
                />
            </div>
        </section>
    )
}

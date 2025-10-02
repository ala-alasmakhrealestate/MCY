"use client"

import Image from "next/image"
import {useEffect, useRef, useState} from "react"

export default function HeroVideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null)

    const [videoSrc, setVideoSrc] = useState(null)

    useEffect(() => {
        // Function to switch video based on screen size
        const updateVideoSrc = () => {
            if (window.innerWidth < 768) {
                setVideoSrc("/videos/maisameer-mobile.mov") // ✅ mobile version
            } else {
                setVideoSrc("/videos/maisameer.mov") // ✅ desktop version
            }
        }

        updateVideoSrc()
        window.addEventListener("resize", updateVideoSrc)

        return () => {
            window.removeEventListener("resize", updateVideoSrc)
        }
    }, [])

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
                // key={videoSrc} // force reload when src changes
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={videoSrc}
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
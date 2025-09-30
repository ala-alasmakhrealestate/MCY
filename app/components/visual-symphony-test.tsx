// "use client"
//
// import { Swiper, SwiperSlide } from "swiper/react"
// import {Autoplay, EffectCoverflow, Navigation} from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import { useRef, useState } from "react"
// import {NavigationOptions} from "swiper/types";
// import Image from "next/image";
//
// // const slides = [
// //     "/images/exterior/1-ARE02365-Enhanced-NR.jpg",
// //     "/images/exterior/2-ARE02346-Enhanced-NR-2.jpg",
// //     "/images/exterior/3-ARE02332-Enhanced-NR-2.jpg",
// //     "/images/exterior/5-ARE02302-Enhanced-NR-2.jpg",
// //     "/images/exterior/6-ARE02231-Enhanced-NR-2.jpg",
// // ]
//
// const slides = [
//     "/images/new_pictures/exterior/DSC04775-Edit-Edit.jpg",
//     "/images/new_pictures/exterior/ARE02343-Enhanced-NR.jpg",
//     "/images/new_pictures/exterior/ARE02231-Enhanced-NR.jpg",
//     "/images/new_pictures/exterior/DSC04790-Edit.jpg",
//     "/images/new_pictures/exterior/DSC04875.jpg",
//     "/images/new_pictures/exterior/DSC04993.jpg",
//     "/images/new_pictures/exterior/DSC05163-Edit.jpg",
// ]
//
// export default function Carousel() {
//     return (
//         <Swiper
//             modules={[EffectCoverflow, Navigation, Autoplay]}
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={2} // Show 3 slides at once
//             loop={true}
//             autoplay={{ delay: 3000 }}
//             navigation
//             coverflowEffect={{
//                 rotate: 0,       // No rotation
//                 stretch: 0,      // Adjust spacing
//                 depth: 200,      // Depth effect
//                 modifier: 1,
//                 slideShadows: false,
//             }}
//             className="mySwiper"
//         >
//             {slides.map((src, index) => (
//                 <SwiperSlide key={index}>
//                     <div className="relative w-full h-64 md:h-96">
//                         <Image
//                             src={src}
//                             alt={`Slide ${index + 1}`}
//                             fill
//                             style={{ objectFit: "cover" }}
//                         />
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// }


//


"use client"

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"
import "swiper/css"
import Image from "next/image"
import {useEffect, useRef, useState} from "react"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import {useTranslations} from "next-intl";
import {usePathname} from "next/navigation";

const slides = [
    "/images/new_pictures/exterior/DSC04775-Edit-Edit.jpg",
    "/images/new_pictures/exterior/ARE02343-Enhanced-NR.jpg",
    "/images/new_pictures/exterior/ARE02231-Enhanced-NR.jpg",
    "/images/new_pictures/exterior/DSC04790-Edit.jpg",
    "/images/new_pictures/exterior/DSC04875.jpg",
    "/images/new_pictures/exterior/DSC04993.jpg",
    "/images/new_pictures/exterior/DSC05163-Edit.jpg",
]

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef<any>(null)
    const [isRtl, setIsRtl] = useState(false);
    const pathname = usePathname(); // e.g., "/ar" or "/en"

    useEffect(() => {
        // Detect from URL path
        if (pathname?.startsWith("/en")) {
            setIsRtl(true);
        } else {
            setIsRtl(false);
        }

        // OR detect from HTML lang attribute
        // const htmlLang = document.documentElement.lang;
        // setIsRtl(htmlLang === "ar");
    }, [pathname]);

    const t = useTranslations("HomePage.carouselSection");

    return (
        <section className="visual-symphony-wrapper py-12 bg-white">
            <div className="w-screen mx-auto px-0 relative">
                <h2 className="text-3xl md:text-4xl font-avenirMedium uppercase text-center mb-8">
                    {t("title")}
                </h2>
                {/* Swiper */}
                {isRtl && (
                <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    dir={"rtl"}
                    autoplay={{delay: 3000}}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    style={{paddingTop: "50px", paddingBottom: "50px"}}
                >
                    {slides.map((src, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                width: "60vw",
                                transition: "transform 0.3s",
                                transform: activeIndex === index ? "scale(1.1)" : "scale(0.8)",
                                margin: "0 10px",
                            }}
                        >
                            <div className="relative w-full" style={{aspectRatio: "16/9"}}>
                                <Image
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    style={{objectFit: "cover", borderRadius: "2px"}}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                )}

                {!isRtl && (
                    <Swiper
                        modules={[Autoplay]}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        dir={"ltr"}
                        autoplay={{delay: 3000}}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        style={{paddingTop: "50px", paddingBottom: "50px"}}
                    >
                        {slides.map((src, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    width: "60vw",
                                    transition: "transform 0.3s",
                                    transform: activeIndex === index ? "scale(1.1)" : "scale(0.8)",
                                    margin: "0 10px",
                                }}
                            >
                                <div className="relative w-full" style={{aspectRatio: "16/9"}}>
                                    <Image
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        style={{objectFit: "cover", borderRadius: "2px"}}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Custom Navigation */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl z-10"
                >
                    <FiChevronLeft/>
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl z-10"
                >
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    )
}

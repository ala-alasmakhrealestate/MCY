"use client"

import {CiHospital1} from "react-icons/ci";
import {PiAirplaneLight, PiMosqueLight, PiStorefrontLight} from "react-icons/pi";
import {IoSchoolOutline} from "react-icons/io5";

const locations = [
    {
        icon: <IoSchoolOutline className="h-10 w-10 mb-4" />,
        title: "International Academy",
        time: "1 MINUTE",
    },
    {
        icon: <CiHospital1 className="h-10 w-10 mb-4" />,
        title: "Medical Center",
        time: "2 MINUTES",
    },
    {
        icon: <PiStorefrontLight className="h-10 w-10 mb-4" />,
        title: "Store Shop",
        time: "2 MINUTES",
    },
    {
        icon: <PiMosqueLight className="h-10 w-10 mb-4" />,
        title: "Mosque",
        time: "2 MINUTES",
    },
    {
        icon: <PiAirplaneLight className="h-10 w-10 mb-4" />,
        title: "Airport",
        time: "11 MINUTES",
    },
    // {
    //     img: "/images/ras-al-khor.svg",
    //     title: "RAS AL KHOR WILDLIFE SANCTUARY",
    //     time: "5 MINUTES",
    // },
    // {
    //     img: "/images/meydan-race-course.svg",
    //     title: "MEYDAN RACE COURSE",
    //     time: "10 MINUTES",
    // },
    // {
    //     img: "/images/dubai-frame.svg",
    //     title: "DUBAI FRAME",
    //     time: "15 MINUTES",
    // },
    // {
    //     img: "/images/dubai-opera.svg",
    //     title: "DUBAI OPERA",
    //     time: "15 MINUTES",
    // },
    // {
    //     img: "/images/palm-jumeirah.svg",
    //     title: "PALM JUMEIRAH",
    //     time: "25 MINUTES",
    // },
]

export default function CityNearby() {
    return (
        <section className="vibrant-living-wrapper py-24 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-avenirMedium uppercase text-center mb-14">
                    The Best of City, All within Minutes
                </h2>

                <div className="bg-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6">
                    {locations.map((loc, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center rounded-sm p-4 text-center transition"
                        >
                            <div className="mb-3 w-10 h-10 relative">
                                {loc.icon}
                            </div>
                            <p className="text-sm uppercase font-avenirMedium text-gray-800 mb-1">{loc.title}</p>
                            <span className="text-sm uppercase font-avenirLight text-gray-500">{loc.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

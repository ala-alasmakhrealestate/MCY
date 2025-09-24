"use client"

import {CiDumbbell, CiHospital1} from "react-icons/ci";
import {
    PiAirplaneInFlightThin,
    PiAirplaneLight,
    PiBowlFood, PiBowlFoodThin, PiForkKnife, PiForkKnifeThin, PiHospitalThin,
    PiMosque,
    PiMosqueLight,
    PiMosqueThin,
    PiStorefrontLight, PiStorefrontThin, PiStudentThin,
    PiTreeThin
} from "react-icons/pi";
import {IoFastFoodOutline, IoSchoolOutline} from "react-icons/io5";
import Image from "next/image";

const locations = [
    {
        icon: <PiStudentThin className="h-10 w-10 mb-4" />,
        image: <Image src={"/images/icons/school.png"} width={30} height={30} alt={"logo"}/>,
        title: "Schools and Nursery",
        time: "1 MINUTE",
    },
    {
        icon: <CiDumbbell className="h-10 w-10 mb-4"/>,
        image: <Image src={"/images/icons/gym.png"} width={30} height={30} alt={"logo"}/>,
        title: "Gym",
        time: "1 MINUTE",
    },
    {
        icon: <PiHospitalThin className="h-10 w-10 mb-4" />,
        image: <Image src={"/images/icons/health.png"} width={30} height={30} alt={"logo"}/>,
        title: "Health Medical Center",
        time: "2 MINUTES",
    },
    {
        icon: <PiStorefrontThin className="h-10 w-10 mb-4" />,
        image: <Image src={"/images/icons/shopping.png"} width={30} height={30} alt={"logo"}/>,
        title: "Shopping Center",
        time: "2 MINUTES",
    },
    {
        image: <PiBowlFoodThin className="h-10 w-10 mb-4" />,
        icon: <Image src={"/images/icons/restaurant_flaticon.png"} width={30} height={30} alt={"logo"}/>,
        title: "Restaurants",
        time: "2 MINUTES",
    },
    {
        icon: <PiTreeThin className="h-10 w-10 mb-4" />,
        image: <Image src={"/images/icons/family_park.png"} width={30} height={30} alt={"logo"}/>,
        title: "Family Park",
        time: "2 MINUTES",
    },
    {
        icon: <PiMosqueThin className="h-10 w-10 mb-4" />,
        image: <Image src={"/images/icons/mosque.png"} width={30} height={30} alt={"logo"}/>,
        title: "Mosque",
        time: "3 MINUTES",
    },
    {
        icon: <PiAirplaneInFlightThin className="h-10 w-10 mb-4" />,
        image: <PiAirplaneLight className="h-10 w-10 mb-4" />,
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

                <div className="bg-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
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

"use client"

import {PiBusLight, PiCityLight, PiTreeEvergreen} from "react-icons/pi";
import {useTranslations} from "next-intl";
import {CiLocationOn, CiStar} from "react-icons/ci";

const amenities = [
    {
        icon: <CiLocationOn className={"w-14 h-14 text-[#a27a35]"}/>,
        label: <p className={"font-avenirLight"}>
            <span className={"font-avenirMedium"}>Situated in Mesaimeer</span> (formerly Barwa
            City) with excellent access to Doha and key
            highways
        </p>,
    },
    {
        icon: <PiBusLight className={"w-14 h-14 text-[#a27a35]"}/>,
        label: <p className={"font-avenirLight"}>14 Bus stops with 9 Metro links
            transporting back and forth to the Metro
            station
        </p>,
    },
    {
        icon: <CiStar className={"w-14 h-14 text-[#a27a35]"}/>,
        label: <p className={"font-avenirLight"}>
            <span className={"font-avenirMedium"}>Proximity to</span> schools, Lulu Hypermarket,
            parks, medical clinic, restaurants, fast food
            chains, health and fitness center, coffee
            shops, salons, ATM, pharmacy, laundry
            shops, grand mosque and small mosques,
            football fields and tennis courts
        </p>,
    },
    {
        icon: <PiCityLight className={"w-14 h-14 text-[#a27a35]"}/>,
        label: <p className={"font-avenirLight"}>Growing demand in the Mesaimeer/Al
            Wakrah corridor due to new infrastructure
            and urban expansion
        </p>,
    },
    // {
    //     icon: "/images/open-seating.svg",
    //     label: "OPEN SEATING AREA",
    // },
    // {
    //     icon: "/images/open-gathering.svg",
    //     label: "OPEN GATHERING",
    // },
]

export default function AccessibilitySection() {
    const t = useTranslations("HomePage.amenitiesSection");
    const common = useTranslations("Common");

    return (
        <section className="py-16 bg-white">
            <div className="w-screen mx-auto px-12">
                <h2 className="text-3xl md:text-4xl font-avenirMedium uppercase text-center mb-14 text-[#a27a35]">
                    Strategic Location Advantages
                </h2>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-center text-center sm:text-start"
                    data-aos="fade-up"
                >
                    {amenities.map((item, index) => (
                        <div
                            key={index}
                            className="py-6 h-full block xl:flex items-center justify-center xl:justify-start px-12 hover:shadow-lg transition-shadow rounded-none bg-gray-100 "
                        >
                            {/* If you want icons/images */}
                            {/* <img
        src={item.icon}
        alt={item.label}
        className="w-16 h-16 mb-3 object-contain"
      /> */}
                            <div className="text-4xl xl:mr-12 flex justify-center xl:block">{item.icon}</div>
                            <p className="text-sm md:text-base">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

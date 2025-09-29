"use client"

import {PiSwimmingPoolLight, PiTreeEvergreen} from "react-icons/pi";
import {GiKidSlide} from "react-icons/gi";
import {RiMovie2Line} from "react-icons/ri";
import {useTranslations} from "next-intl";

const amenities = [
    {
        icon: <PiSwimmingPoolLight className={"w-12 h-12 mb-4"}/>,
        label: "swim",
    },
    {
        icon: <GiKidSlide className={"w-10 h-10 mb-4"}/>,
        label: "kids",
    },
    {
        icon: <RiMovie2Line className={"w-10 h-10 mb-4"}/>,
        label: "cinema",
    },
    {
        icon: <PiTreeEvergreen className={"w-10 h-10 mb-4"}/>,
        label: "park",
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

export default function AmenitiesSection() {
    const t = useTranslations("HomePage.amenitiesSection");
    const common = useTranslations("Common");

    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-avenirMedium uppercase text-center mb-14">
                    {t("title")}
                </h2>

                <div
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center"
                    data-aos="fade-up"
                >
                    {amenities.map((item, index) => (
                        <div
                            key={index}
                            className="py-6 flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition-shadow rounded-none bg-gray-100 "
                        >
                            {/* If you want icons/images */}
                            {/* <img
        src={item.icon}
        alt={item.label}
        className="w-16 h-16 mb-3 object-contain"
      /> */}
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <p className="text-sm md:text-base uppercase font-avenirLight">{t("items."+item.label)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

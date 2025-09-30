"use client"

import {CiDumbbell} from "react-icons/ci";
import {
    PiAirplaneInFlightThin,
    PiAirplaneLight,
    PiBowlFoodThin,
    PiHospitalThin,
    PiMosqueThin, PiSecurityCameraLight,
    PiStorefrontThin,
    PiStudentThin,
    PiTreeThin
} from "react-icons/pi";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {BiSupport} from "react-icons/bi";
import {GiVacuumCleaner} from "react-icons/gi";
import {TbParking} from "react-icons/tb";

const locations = [
    {
        icon: <PiSecurityCameraLight className="h-10 w-10 mb-4"/>,
        image: <Image src={"/images/icons/school.png"} width={30} height={30} alt={"logo"}/>,
        title: "security",
        time: 1,
    },
    {
        icon: <BiSupport className="h-10 w-10 mb-4"/>,
        image: <Image src={"/images/icons/gym.png"} width={30} height={30} alt={"logo"}/>,
        title: "helpDesk",
        time: 1,
    },
    {
        icon: <GiVacuumCleaner className="h-10 w-10 mb-4"/>,
        image: <Image src={"/images/icons/health.png"} width={30} height={30} alt={"logo"}/>,
        title: "clean",
        time: 2,
    },
    {
        icon: <TbParking className="h-10 w-10 mb-4"/>,
        image: <Image src={"/images/icons/shopping.png"} width={30} height={30} alt={"logo"}/>,
        title: "park",
        time: 2,
    }
]

export default function PropertyManagement() {
    const t = useTranslations("HomePage.propertyManagementSection");
    const common = useTranslations("Common");

    return (
        <section className="vibrant-living-wrapper py-24 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-avenirMedium uppercase text-center mb-14">
                    {t("title")}
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
                            <p className="text-sm uppercase font-avenirMedium text-gray-800 mb-1">{t("items." + loc.title)}</p>
                            {/*<span*/}
                            {/*    className="text-sm uppercase font-avenirLight text-gray-500">{loc.time == 1 ? common("minute") : loc.time + " " + common("minutes")}</span>*/}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import {PiSwimmingPoolLight} from "react-icons/pi";
import {GiKidSlide} from "react-icons/gi";
import {BiCameraMovie} from "react-icons/bi";
import {MdOutlinePark} from "react-icons/md";

const amenities = [
    {
        icon: <PiSwimmingPoolLight className={"w-10 h-10 mb-4"}/>,
        label: "SWIMMING POOL",
    },
    {
        icon: <GiKidSlide className={"w-10 h-10 mb-4"}/>,
        label: "KIDS PLAY AREA",
    },
    {
        icon: <BiCameraMovie className={"w-10 h-10 mb-4"}/>,
        label: "CINEMA",
    },
    {
        icon: <MdOutlinePark className={"w-10 h-10 mb-4"}/>,
        label: "Green PARK",
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
    return (
        <section className=" py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-avenirMedium uppercase text-center mb-14">
                    DESIGNED FOR EVERY PASSION
                </h2>

                <div
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center"
                    data-aos="fade-up"
                >
                    {amenities.map((item, index) => (
                        <div
                            key={index}
                            className="py-6 flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition-shadow rounded-lg bg-gray-100 "
                        >
                            {/* If you want icons/images */}
                            {/* <img
        src={item.icon}
        alt={item.label}
        className="w-16 h-16 mb-3 object-contain"
      /> */}
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <p className="text-sm md:text-base uppercase font-avenirLight">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

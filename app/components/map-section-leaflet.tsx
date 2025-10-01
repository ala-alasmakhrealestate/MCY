"use client"

import {useEffect, useState} from "react"
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import {useTranslations} from "next-intl";

// Default center (Doha example)
const center: [number, number] = [25.19556, 51.50403]

const categories: Record<string, { type: string; places: { name: string; lat: number; lng: number }[] }> = {
    Hospitals: {
        type: "hospital",
        places: [
            {
                name: "KIMSHEALTH MEDICAL CENTRE",
                lat: 25.195409,
                lng: 51.500101,
            },
            {
                name: "Workers Health Center Mesaimeer - Qatar Red Crescent",
                lat: 25.216545,
                lng: 51.529027,
            },
            {
                name: "Naufar Hospital",
                lat: 25.206173,
                lng: 51.525063,
            },
            {
                name: "Hazm Mebaireek General Hospital",
                lat: 25.180246,
                lng: 51.428859,
            },
        ],
    },
    SuperMarket: {
        type: "supermarket",
        places: [
            {name: "Lulu Hypermarket", lat: 25.1958425, lng: 51.5070273},
            {name: "Grand Mall Hypermarket", lat: 25.1923546, lng: 51.4896023},
        ],
    },
    Schools: {
        type: "school",
        places: [
            {name: "Mesaimeer School", lat: 25.1905, lng: 51.502},
            {name: "Doha International School", lat: 25.2001, lng: 51.507},
        ],
    },
    Mall: {
        type: "mall",
        places: [
            {name: "PLaza Mall", lat: 25.1876306, lng: 51.4649691},
            {name: "Safari Mall", lat: 25.2341491, lng: 51.5012189},
        ],
    },
    Park: {
        type: "Green park",
        places: [{name: "Barwa City Central Park", lat: 25.195591, lng: 51.503688}],
    },
    Mosque: {
        type: "mosque",
        places: [
            {name: "Barwa City Mosque", lat: 25.191844, lng: 51.498632},
            {name: "Barwa City Grand Mosque", lat: 25.195793, lng: 51.499748}
        ],
    },
    Gym: {
        type: "gym",
        places: [
            {name: "Mr Gym Fitness Clubs", lat: 25.188686, lng: 51.460919},
            {name: "M Active Club", lat: 25.195872, lng: 51.500886},
            {name: "The Box", lat: 25.195647, lng: 51.500708}
        ],
    },
    busStop: {
        type: "busStop",
        places: [
            {name: "Bus Stop 56678", lat: 25.194524, lng: 51.496870},
            {name: "Bus Stop 56680", lat: 25.192964, lng: 51.500365},
            {name: "Bus Stop 56007", lat: 25.193534, lng: 51.500168},
            {name: "Bus Stop Street 1131", lat: 25.191887, lng: 51.502446},
            {name: "Bus Stop Mesaimeer City", lat: 25.196323, lng: 51.499692},
            {name: "Bus Stop 56679", lat: 25.191005, lng: 51.504014},
            {name: "Bus Stop 56682", lat: 25.195362, lng: 51.501973},
            {name: "Bus Stop 56683", lat: 25.197988, lng: 51.499313},
            {name: "Bus Stop 56681", lat: 25.196257, lng: 51.501595},
            {name: "Bus Stop 1124", lat: 25.194555, lng: 51.506862},
            {name: "Bus Stop 56002", lat: 25.196559, lng: 51.507094},
            {name: "Bus Stop 56002", lat: 25.196795, lng: 51.506818},
            {name: "Bus Stop Newton British Academy", lat: 25.199334, lng: 51.506653},
            {name: "Bus Stop 56684", lat: 25.200308, lng: 51.505382},
            {name: "Bus Stop 1138 East", lat: 25.201138, lng: 51.507361},
            {name: "Bus Stop 56687", lat: 25.198502, lng: 51.508944},
            {name: "Bus Stop 56686", lat: 25.194964, lng: 51.509196},
        ],
    },
    Airport: {
        type: "airport",
        places: [{name: "Hamad International Airport", lat: 25.273, lng: 51.608}],
    },
}

// Component to recenter map
function RecenterMap({lat, lng}: { lat: number; lng: number }) {
    const map = useMap()
    useEffect(() => {
        map.setView([lat, lng], 14, {animate: true})
    }, [lat, lng, map])
    return null
}

export default function LeafletMapSection() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Schools")
    const [selectedPlace, setSelectedPlace] = useState<{ lat: number; lng: number } | null>(null)

    const t = useTranslations("HomePage.mapSection");

    const currentPlaces = categories[activeCategory].places

    return (
        <section className="bg-white pt-16">
            <div className="w-screen mx-auto">
                {/* Category Buttons */}
                <div className="flex flex-wrap gap-4 mb-6 justify-center">
                    {Object.keys(categories).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat as keyof typeof categories)
                                setSelectedPlace(null)
                            }}
                            className={`px-4 py-2 rounded-none transition ${
                                activeCategory === cat ? "bg-[#04264d] text-white" : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {t("items." + cat.toLowerCase())}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-6 space-y-3 sm:space-y-0">
                    {/* Left panel with list */}
                    {/*<div className="bg-gray-50 rounded-sm shadow p-4 max-h-[60vh] overflow-y-auto">*/}
                    {/*    <h3 className="text-lg font-avenirHeavy mb-3">{activeCategory}</h3>*/}
                    {/*    <ul className="space-y-2">*/}
                    {/*        {currentPlaces.map((place, idx) => (*/}
                    {/*            <li key={idx}>*/}
                    {/*                <button*/}
                    {/*                    onClick={() => setSelectedPlace({ lat: place.lat, lng: place.lng })}*/}
                    {/*                    className="w-full text-left px-3 py-2 rounded-sm hover:bg-gray-200 transition"*/}
                    {/*                >*/}
                    {/*                    {place.name}*/}
                    {/*                </button>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/* Map */}
                    <div className="col-span-3 rounded-sm">
                        <MapContainer
                            center={center}
                            zoom={13}
                            style={{height: "60vh", width: "100%"}}
                            className={"rounded-sm"}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            {currentPlaces.map((place, idx) => (
                                <Marker
                                    key={idx}
                                    position={[place.lat, place.lng]}
                                    icon={L.icon({
                                        iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // custom marker icon
                                        iconSize: [32, 32],
                                    })}
                                >
                                    <Popup>{place.name}</Popup>
                                </Marker>
                            ))}

                            {selectedPlace && <RecenterMap lat={selectedPlace.lat} lng={selectedPlace.lng}/>}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}
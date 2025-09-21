"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Default center (Doha example)
const center: [number, number] = [25.19556, 51.50403]

const categories: Record<string, { type: string; places: { name: string; lat: number; lng: number }[] }> = {
    Schools: {
        type: "school",
        places: [
            { name: "Mesaimeer School", lat: 25.1905, lng: 51.502 },
            { name: "Doha International School", lat: 25.2001, lng: 51.507 },
        ],
    },
    Grocery: {
        type: "supermarket",
        places: [
            { name: "Lulu Hypermarket", lat: 25.1958425, lng: 51.5070273 },
            { name: "Grand Mall Hypermarket", lat: 25.1923546, lng: 51.4896023 },
        ],
    },
    Restaurant: {
        type: "restaurant",
        places: [
            { name: "Al Tazaj", lat: 25.197, lng: 51.506 },
            { name: "Nando’s", lat: 25.202, lng: 51.509 },
        ],
    },
    Mall: {
        type: "mall",
        places: [
            { name: "PLaza Mall", lat: 25.1876306, lng: 51.4649691 },
            { name: "Safari Mall", lat: 25.2341491, lng: 51.5012189 },
        ],
    },
    Airport: {
        type: "airport",
        places: [{ name: "Hamad International Airport", lat: 25.273, lng: 51.608 }],
    },
}

// Component to recenter map
function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap()
    useEffect(() => {
        map.setView([lat, lng], 14, { animate: true })
    }, [lat, lng, map])
    return null
}

export default function LeafletMapSection() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Schools")
    const [selectedPlace, setSelectedPlace] = useState<{ lat: number; lng: number } | null>(null)

    const currentPlaces = categories[activeCategory].places

    return (
        <section className="bg-white py-16">
            <div className="w-screen mx-auto px-4">
                {/* Category Buttons */}
                <div className="flex flex-wrap gap-4 mb-6 justify-center">
                    {Object.keys(categories).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat as keyof typeof categories)
                                setSelectedPlace(null)
                            }}
                            className={`px-4 py-2 rounded transition ${
                                activeCategory === cat ? "bg-[#04264d] text-white" : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {cat}
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
                            style={{ height: "60vh", width: "100%" }}
                            className={"rounded-sm"}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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

                            {selectedPlace && <RecenterMap lat={selectedPlace.lat} lng={selectedPlace.lng} />}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}
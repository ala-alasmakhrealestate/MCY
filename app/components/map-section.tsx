"use client"

import { useState, useCallback } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

// Replace with your Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyBmlvQf8a2sCSfktqfPWo3DkzSYDwJ8Rk8"

const centerCoords = { lat: 25.1756690, lng: 55.3242951 }

const categories = {
    Schools: [
        { lat: 25.1805, lng: 55.3292, name: "International School" },
        { lat: 25.1701, lng: 55.3198, name: "Primary School" },
    ],
    Airport: [
        { lat: 25.2485, lng: 55.3529, name: "DXB Airport" },
    ],
    Grocery: [
        { lat: 25.1822, lng: 55.3185, name: "Supermarket" },
    ],
    Restaurants: [
        { lat: 25.1789, lng: 55.3266, name: "Restaurant" },
    ],
}

const categoryIcons: Record<string, string> = {
    Schools: "/images/school.svg",
    Airport: "/images/airport.svg",
    Grocery: "/images/grocery.svg",
    Restaurants: "/images/dine.svg",
}

export default function MapSection() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    })

    const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Schools")

    const onLoad = useCallback((map: google.maps.Map) => {
        // Optional: fit bounds to markers
        const bounds = new window.google.maps.LatLngBounds()
        categories[activeCategory].forEach((loc) => bounds.extend(loc))
        map.fitBounds(bounds)
    }, [activeCategory])

    if (!isLoaded) return <p>Loading map...</p>

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-4 mb-6 justify-center">
                    {Object.keys(categories).map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-sm font-avenirMedium transition ${
                                activeCategory === cat
                                    ? "bg-[#C7A386] text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setActiveCategory(cat as keyof typeof categories)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Map */}
                <div className="w-full min-h-[60vh] rounded-lg overflow-hidden">
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "60vh" }}
                        center={centerCoords}
                        zoom={12}
                        onLoad={onLoad}
                    >
                        {categories[activeCategory].map((loc, idx) => (
                            <Marker
                                key={idx}
                                position={{ lat: loc.lat, lng: loc.lng }}
                                title={loc.name}
                                icon={{
                                    url: categoryIcons[activeCategory],
                                    scaledSize: new window.google.maps.Size(40, 40),
                                }}
                            />
                        ))}
                    </GoogleMap>
                </div>
            </div>
        </section>
    )
}
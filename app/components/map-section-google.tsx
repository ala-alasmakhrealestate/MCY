"use client"

import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { useEffect, useRef, useState } from "react"

const center = { lat: 25.19556, lng: 51.50403 } // your location

const categories: Record<string, google.maps.PlaceType> = {
    Schools: "school",
    Grocery: "supermarket",
    Dine: "restaurant",
    Attractions: "tourist_attraction",
    Airport: "airport",
}

const containerStyle = {
    width: "100%",
    height: "60vh",
    borderRadius: "12px",
}

export default function MapSection() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        libraries: ["places"],
    })

    const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Schools")
    const mapRef = useRef<google.maps.Map | null>(null)
    const serviceRef = useRef<google.maps.places.PlacesService | null>(null)

    // Fetch places dynamically
    useEffect(() => {
        if (!mapRef.current) return
        if (!serviceRef.current) {
            serviceRef.current = new google.maps.places.PlacesService(mapRef.current)
        }

        const request: google.maps.places.PlaceSearchRequest = {
            location: center,
            radius: 5000, // in meters
            type: categories[activeCategory],
        }

        serviceRef.current.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                // Automatically shows Google's default markers
                results.forEach((place) => {
                    if (place.geometry?.location) {
                        new google.maps.Marker({
                            map: mapRef.current!,
                            position: place.geometry.location,
                            title: place.name,
                        })
                    }
                })
            }
        })
    }, [activeCategory, isLoaded])

    if (!isLoaded) return <p>Loading Map...</p>

    return (
        <section className="bg-white py-16">
            <div className="container z-50 mx-auto px-4">
                {/* Category Buttons */}
                <div className="flex flex-wrap gap-4 mb-6 justify-center">
                    {Object.keys(categories).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat as keyof typeof categories)}
                            className={`px-4 py-2 rounded font-semibold transition ${
                                activeCategory === cat ? "bg-[#C7A386] text-white" : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Google Map */}
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                    onLoad={(map) => {
                        mapRef.current = map
                    }}
                />
            </div>
            <div className="relative -top-[30vh] w-screen h-[30vh] bg-gray-100"></div>
        </section>
    )
}

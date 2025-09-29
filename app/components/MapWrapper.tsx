// app/components/MapWrapper.tsx
"use client"
import dynamic from "next/dynamic"

const MapSectionLeaflet = dynamic(() => import("./map-section-leaflet"), { ssr: false })

export default function MapWrapper() {
  return <MapSectionLeaflet />
}

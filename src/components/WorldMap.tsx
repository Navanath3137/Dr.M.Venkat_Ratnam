import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -15, name: "India (NARL)", coordinates: [79.2, 13.5] },
  { markerOffset: -15, name: "Japan (Kyoto)", coordinates: [135.7, 35.0] },
  { markerOffset: 25, name: "USA (NASA/UCAR)", coordinates: [-105.2, 40.0] },
  { markerOffset: -15, name: "Germany (Leipzig)", coordinates: [12.3, 51.3] },
  { markerOffset: 25, name: "France (CNRS)", coordinates: [2.3, 48.8] },
  { markerOffset: 25, name: "Taiwan (NCU)", coordinates: [121.2, 24.9] },
  { markerOffset: 25, name: "Saudi Arabia (KAUST)", coordinates: [39.1, 22.3] },
  { markerOffset: -15, name: "South Korea", coordinates: [127.0, 37.5] },
];

export default function WorldMap() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 p-2 md:p-8">
      <ComposableMap
        projectionConfig={{
          scale: 200,
        }}
        className="w-full h-auto"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="currentColor"
                className="text-gray-300 dark:text-gray-700 hover:text-gray-400 dark:hover:text-gray-600 transition-colors duration-300 outline-none"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <circle r={4} fill="#FACC15" stroke="#fff" strokeWidth={1} className="animate-pulse" />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "currentColor" }}
              className="text-[10px] md:text-[12px] font-bold text-gray-900 dark:text-white"
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Research Centers & Collaborations</span>
        </div>
      </div>
    </div>
  );
}

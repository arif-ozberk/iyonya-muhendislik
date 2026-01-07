import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import trJson from "../../data/tr.json";
import styles from "../../styles/page_styles/Anasayfa.module.scss";

const TURKEY_TOPO_URL = trJson;
const IZMIR_COORDS = [27.14, 38.42];

const DESTINATIONS = [
    { name: "Ankara", coords: [32.85, 39.93] },
    { name: "Van", coords: [43.38, 38.49] },
    { name: "Konya", coords: [32.48, 37.87] },
];

const accentColor = window.getComputedStyle(document.documentElement).getPropertyValue('--accentColor');


// Reusable City Marker Component with Hover Effect
const CityMarker = ({ coordinates, name, isSource = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Marker
            coordinates={coordinates}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: "pointer" }}
        >
            {/* Pulsing effect for the Source (İzmir) or standard dot for others */}
            {isSource && (
                <motion.circle
                    r={8}
                    fill={accentColor}
                    opacity={0.3}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
            <circle r={isSource ? 5 : 4} fill={isSource ? accentColor : "#333"} stroke="#fff" strokeWidth={1.5} />

            {/* Hover Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.g
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: -10 }}
                        exit={{ opacity: 0, y: 5 }}
                    >
                        <rect
                            x="-35"
                            y="-30"
                            width="70"
                            height="22"
                            rx="4"
                            fill="rgba(0,0,0,0.8)"
                        />
                        <text
                            textAnchor="middle"
                            y="-15"
                            style={{
                                fontFamily: "sans-serif",
                                fill: "#fff",
                                fontSize: "11px",
                                fontWeight: "500",
                                pointerEvents: "none"
                            }}
                        >
                            {name}
                        </text>
                    </motion.g>
                )}
            </AnimatePresence>
        </Marker>
    );
};

const MapChartSection = () => {
    return (
        <section className={styles.mapChartSectionContainer}>
            <ComposableMap
                width={800}
                height={400}
                projection="geoMercator"
                projectionConfig={{ scale: 2200, center: [35, 38.5] }}
                style={{ width: "100%", height: "auto" }}
            >
                <Geographies geography={TURKEY_TOPO_URL}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#F5F5F7"
                                stroke="#D1D1D1"
                                strokeWidth={0.5}
                                style={{
                                    default: { outline: "none" },
                                    hover: { fill: "#EAEAEA", outline: "none" },
                                    pressed: { outline: "none" }
                                }}
                            />
                        ))
                    }
                </Geographies>

                {/* Animated Arcs */}
                {DESTINATIONS.map((dest, i) => (
                    <Line key={`line-${i}`} from={IZMIR_COORDS} to={dest.coords}>
                        {({ path }) => {
                            const parts = path.split(/[ML, ]+/).filter(Boolean);
                            if (parts.length < 4) return null;

                            const x1 = parseFloat(parts[0]);
                            const y1 = parseFloat(parts[1]);
                            const x2 = parseFloat(parts[2]);
                            const y2 = parseFloat(parts[3]);

                            const midX = (x1 + x2) / 2;
                            const midY = (y1 + y2) / 2 - 50;

                            return (
                                <motion.path
                                    d={`M ${x1},${y1} Q ${midX},${midY} ${x2},${y2}`}
                                    fill="none"
                                    stroke="#A81D1D"
                                    strokeWidth={2.5}
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.8 }}
                                    transition={{ duration: 1.5, delay: i * 0.4 }}
                                />
                            );
                        }}
                    </Line>
                ))}

                {/* Starting Point Marker */}
                <CityMarker coordinates={IZMIR_COORDS} name="İzmir" isSource={true} />

                {/* Destination Markers */}
                {DESTINATIONS.map((city, idx) => (
                    <CityMarker
                        key={`marker-${idx}`}
                        coordinates={city.coords}
                        name={city.name}
                    />
                ))}
            </ComposableMap>
        </section>
    );
}

export default MapChartSection;
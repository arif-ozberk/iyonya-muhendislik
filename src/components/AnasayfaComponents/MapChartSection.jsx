import React, { useState, useRef } from "react";
import { ComposableMap, Geographies, Geography, Marker, useMapContext } from "react-simple-maps";
import { motion, AnimatePresence, useInView } from "motion/react"
import trJson from "../../data/tr.json";
import styles from "../../styles/page_styles/Anasayfa.module.scss";

const TURKEY_TOPO_URL = trJson;
const IZMIR_COORDS = [27.14, 38.42];

const DESTINATIONS = [
    { name: "Ankara", coords: [32.85, 39.93] },
    { name: "Van", coords: [43.38, 38.49] },
    { name: "Konya", coords: [32.48, 37.87] },
    { name: "Trazbon", coords: [39.79, 40.81] }
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

// Component that has access to the map projection
const AnimatedLines = ({ isInView }) => {
    const { projection } = useMapContext();

    return (
        <>
            {DESTINATIONS.map((dest, i) => {
                // Use the map's projection
                const [x1, y1] = projection(IZMIR_COORDS);
                const [x2, y2] = projection(dest.coords);

                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2 - 30;

                const curvePath = `M ${x1},${y1} Q ${midX},${midY} ${x2},${y2}`;

                return (
                    <motion.path
                        key={`path-${i}`}
                        d={curvePath}
                        fill="none"
                        stroke="black"
                        strokeWidth={2}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}
        </>
    );
};

const MapChartSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // Animation triggers only once
        amount: 0.3 // Trigger when 30% of element is visible
    });

    return (
        <section ref={ref} className={styles.mapChartSectionContainer}>
            <ComposableMap
                width={800}
                height={400}
                projection="geoMercator"
                projectionConfig={{ scale: 2200, center: [35, 39.05] }}
                style={{ width: "100%", height: "auto", display: "flex", alignItems: "center", }}
            >
                <Geographies geography={TURKEY_TOPO_URL}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="transparent"
                                stroke="#000000"
                                strokeWidth={1}
                                style={{
                                    default: { outline: "none" },
                                    hover: { fill: "#e7a62e81", outline: "none" },
                                    pressed: { outline: "none" }
                                }}
                            />
                        ))
                    }
                </Geographies>

                {/* Animated Arcs - using map's projection */}
                <AnimatedLines isInView={isInView} />

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
import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { ComposableMap, Geographies, Geography, Marker, useMapContext } from "react-simple-maps";
import { motion, AnimatePresence, useInView } from "motion/react"
import { ProjectContext } from "../../context/ProjectContext";
import trJson from "../../data/tr.json";
import styles from "../../styles/page_styles/Anasayfa.module.scss";

const TURKEY_TOPO_URL = trJson;
const IZMIR_COORDS = [27.14, 38.42];

const accentColor = typeof window !== 'undefined'
    ? window.getComputedStyle(document.documentElement).getPropertyValue('--accentColor')
    : "#e7a62e";

// --- Reusable City Marker Component ---
const CityMarker = ({ coordinates, name, isSource = false, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { setSelectedCity } = useContext(ProjectContext)

    if (!coordinates) return null;

    return (
        <Link to={"/projeler"}>
            <Marker
                coordinates={coordinates}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setSelectedCity(name)}
                style={{ cursor: "pointer" }}
            >
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
                <AnimatePresence>
                    {isHovered && (
                        <motion.g
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: -10 }}
                            exit={{ opacity: 0, y: 5 }}
                        >
                            <rect x="-35" y="-30" width="70" height="22" rx="4" fill="rgba(0,0,0,0.8)" />
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
        </Link>
    );
};

// --- Animated Lines Component (Receives data as Props) ---
const AnimatedLines = ({ isInView, cityCoordinates }) => {
    const { projection } = useMapContext();

    return (
        <>
            {cityCoordinates?.map((dest, i) => {
                if (!dest.coords) return null;

                const [x1, y1] = projection(IZMIR_COORDS);
                const [x2, y2] = projection(dest.coords);

                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2 - 50;

                const curvePath = `M ${x1},${y1} Q ${midX},${midY} ${x2},${y2}`;

                return (
                    <motion.path
                        key={`path-${dest.name}-${i}`}
                        d={curvePath}
                        fill="none"
                        stroke="black"
                        strokeWidth={2}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}
        </>
    );
};

// --- Main Map Section ---
const MapChartSection = () => {
    const { setSelectedCity, allCities } = useContext(ProjectContext);
    const [cityCoordinates, setCityCoordinates] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3
    });

    useEffect(() => {
        if (!allCities || allCities.length === 0) return;

        const newCityCoordinates = allCities.map(cityObj => {
            const cityName = typeof cityObj === 'string' ? cityObj : cityObj.city;
            if (!cityName) return null;

            const cityFeature = trJson.features.find(
                f => f.properties.name.toLowerCase() === cityName.toLowerCase()
            );

            return {
                name: cityName,
                coords: cityFeature ? cityFeature.geometry.center : null
            };
        }).filter(city =>
            city !== null &&
            city.coords !== null &&
            city.name !== "İzmir")

        setCityCoordinates(newCityCoordinates);
    }, [allCities]);

    return (
        <motion.div ref={ref} className={styles.mapChartSectionContainer}>
            <ComposableMap
                width={800}
                height={400}
                projection="geoMercator"
                projectionConfig={{ scale: 2200, center: [35, 39.05] }}
                style={{ width: "100%", height: "auto", display: "flex", alignItems: "center" }}
            >
                <Link to={"/projeler"}>
                    <Geographies geography={TURKEY_TOPO_URL}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => {
                                        const cityName = geo.properties.name || geo.properties.NM1;
                                        setSelectedCity(cityName);
                                    }}
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
                </Link>

                {/* Data flows into AnimatedLines */}
                <AnimatedLines isInView={isInView} cityCoordinates={cityCoordinates} />

                {/* Static Source Marker */}
                <CityMarker coordinates={IZMIR_COORDS} name="İzmir" isSource={true} />

                {/* Dynamic Destination Markers using the lifted state */}
                {cityCoordinates.map((city, idx) => (
                    <CityMarker
                        key={`marker-${idx}`}
                        coordinates={city.coords}
                        name={city.name}
                    />
                ))}
            </ComposableMap>
        </motion.div>
    );
}

export default MapChartSection;
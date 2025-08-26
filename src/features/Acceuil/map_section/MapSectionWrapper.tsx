'use client';

import dynamic from "next/dynamic";

const MapSection = dynamic(() => import("@/features/Acceuil/map_section/MapSection"), {
    ssr: false,
});

export default function MapSectionWrapper() {
    return <MapSection/>;
}

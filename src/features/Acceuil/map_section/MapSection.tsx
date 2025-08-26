'use client';

import {useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from "next/image";
import Link from "next/link";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/image/marker_full.webp',
    iconUrl: '/image/marker_half.webp',
    shadowUrl: '/image/marker_shadow.webp',
});

type Agency = {
    name: string;
    lat: number;
    lng: number;
    address?: string;
};

const agencies: Agency[] = [
    {name: 'Agence Alger Centre', lat: 36.7525, lng: 3.04197, address: 'Alger, Centre'},
    {name: 'Agence Oran', lat: 35.6971, lng: -0.6308, address: 'Oran'},
    {name: 'Agence Constantine', lat: 36.365, lng: 6.6147, address: 'Constantine'},
    {name: 'Agence Annaba', lat: 36.9, lng: 7.7667, address: 'Annaba'},
    {name: 'Agence Tlemcen', lat: 34.8783, lng: -1.315, address: 'Tlemcen'},
    {name: 'Agence Hydra', lat: 36.743149017736314, lng: 3.02765505582, address: 'Hydra'},
    {name: 'Agence El Biar', lat: 36.7688818, lng: 3.030651, address: 'El Biar'},
    {name: "Kouba", lat: 36.7324436, lng: 3.0875358, address: "Kouba, Hussein Dey, Alger"},
    {name: "Mohamed Belouzdad", lat: 36.7441968, lng: 3.07822, address: "Mohamed Belouzdad, Hussein Dey, Alger"},
    {name: "Ain Taya", lat: 36.7912902, lng: 3.2926194, address: "Ain Taya, Dar El Beida, Alger"},
    {name: "Bab Ezzouar", lat: 36.7220068, lng: 3.1856291, address: "Bab Ezzouar, Dar El Beida, Alger"},
    {name: "Bordj El Kiffan", lat: 36.747273, lng: 3.1908953, address: "Bordj El Kiffan, Dar El Beida, Alger"},

];

function MapConfig({points}: { points: [number, number][] }) {
    const map = useMap();
    map.attributionControl.setPrefix(false);

    useEffect(() => {
        if (!points || points.length === 0) return;
        map.fitBounds(L.latLngBounds(points));
    }, [map, points]);
    return null;
}


export default function MapSection() {
    const points = agencies.map(a => [a.lat, a.lng] as [number, number]);
    const initialCenter: [number, number] = [28.0339, 1.6596];

    return (
        <div
            className="flex flex-row w-[94vw] md:w-[96vw] max-w-full mx-auto relative justify-center overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 mb-3 md:mb-0">
            <div className="hidden md:flex mb-8 ml-4 flex-col items-center justify-center gap-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 text-center">
                    Nos agences
                </h2>
                <p className="text-gray-600 text-[1rem] md:text-xl text-center">
                    Explorez la carte et cliquez sur un point pour les détails.
                </p>
            </div>
            <div className="w-full md:w-full md:max-w-4xl m-4 mb-6 md:m-8 z-0 ">
                <div className="md:hidden mb-8 mt-2 flex flex-col items-center justify-center gap-2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 text-center">
                        Nos agences
                    </h2>
                    <p className="text-gray-600 text-sm md:text-xl text-center">
                        Explorez la carte et cliquez sur un point pour les détails.
                    </p>
                </div>

                {/* Map */}
                <div className="w-full max-w-7xl mx-auto px-3 md:px-6">
                    <MapContainer
                        center={initialCenter}
                        zoom={5}
                        className="w-full h-[360px] md:h-[480px] rounded-2xl border border-orange-200 shadow-sm"
                        scrollWheelZoom
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            detectRetina
                        />

                        {/* Points des agences */}
                        {agencies.map((a) => (
                            <Marker key={`${a.name}-${a.lat}-${a.lng}`} position={[a.lat, a.lng]}>
                                <Popup>
                                    <strong>{a.name}</strong>
                                    <br/>
                                    {a.address ?? ''}
                                </Popup>
                            </Marker>
                        ))}

                        <MapConfig points={points}/>
                    </MapContainer>
                </div>
            </div>
        </div>
    );


}



'use client';
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

const products = [
    {
        title: "Assurance Auto",
        description:
            "Protégez votre véhicule et vos proches avec nos formules adaptées.",
        image: "/image/particuliers.webp",
        tag: "Populaire",
    },
    {
        title: "Assurance Habitation",
        description:
            "Sécurisez votre maison ou appartement contre tous les risques.",
        image: "/image/entreprises.webp",
        tag: "Nouveau",
    },
    {
        title: "Assurance Santé",
        description:
            "Des garanties santé pour toute la famille, à prix compétitif.",
        image: "/image/professionels.webp",
        tag: "Recommandé",
    },
    {
        title: "Assurance Voyage",
        description:
            "Voyagez l’esprit tranquille avec nos couvertures internationales.",
        image: "/image/entreprises.webp",
        tag: "Sérénité",
    },
];

export default function ProductsCarousel() {
    const [current, setCurrent] = useState(0);
    const total = products.length;

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    return (
        <div
            className="flex flex-row w-[94vw] md:w-[96vw] max-w-full mx-auto relative justify-center overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 mb-3 md:mb-0">
            <div className="hidden md:flex mb-8 ml-4 flex-col items-center justify-center gap-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 text-center">
                    Nos produits & Services
                </h2>
                <p className="text-gray-600 text-[1rem] md:text-xl text-center">
                    Découvrez une sélection de nos produits phares, nouveautés et offres incontournables.
                </p>
            </div>
            <div className="w-full md:w-full md:max-w-4xl m-4 mb-6 md:m-8 ">
                <div className="md:hidden mb-8 mt-2 flex flex-col items-center justify-center gap-2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 text-center">
                        Nos produits & Services
                    </h2>
                    <p className="text-gray-600 text-sm md:text-xl text-center">
                        Découvrez une sélection de nos produits phares, nouveautés et offres incontournables.
                    </p>
                </div>
                <div
                    className="relative bg-white rounded-3xl shadow-xs border-orange-600/20 border-2 hover:shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[340px] md:min-h-[320px] transition-all duration-500 group">
                    {/* Image */}
                    <article className="md:w-1/2 w-full h-56 md:h-auto relative flex items-center justify-center">
                        <Image
                            src={products[current].image}
                            alt={products[current].title}
                            fill
                            className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                            priority
                        />
                        <span
                            className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
						{products[current].tag}
					</span>
                    </article>
                    {/* Infos */}
                    <div className="flex-1 flex flex-col justify-center md:ml-4 p-6 animate-fadeInRight md:pr-20">
                        <h3 className="text-xl md:text-3xl font-bold text-gray-800 text-center md:text-left animate-fadeInUp delay-100 line-clamp-2 min-h-[2.7em]">
                            {products[current].title}
                        </h3>
                        <p className="text-gray-600 md:text-lg animate-fadeInUp delay-200 line-clamp-3 mb-4 min-h-[4.5em]">
                            {products[current].description}
                        </p>
                        <Link href="#"
                              className="md:self-start self-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl shadow transition-all duration-200 animate-fadeInUp cursor-pointer">
                            En savoir plus
                        </Link>
                    </div>
                    {/* Flèches navigation */}
                    <button
                        className="absolute left-2 top-1/2 cursor-pointer -translate-y-1/2 bg-white/90 hover:bg-orange-100 text-orange-600 rounded-full p-3 shadow-lg transition-all duration-200 z-10 animate-fadeInLeft"
                        onClick={prev}
                        aria-label="Précédent"
                    >
                        <svg
                            width="28"
                            height="28"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-gray-100/80 hover:bg-orange-100 text-orange-600 rounded-full p-3 shadow-lg transition-all duration-200 z-10 animate-fadeInRight"
                        onClick={next}
                        aria-label="Suivant"
                    >
                        <svg
                            width="28"
                            height="28"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

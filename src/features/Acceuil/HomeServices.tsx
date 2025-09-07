import Image from "next/image";
import Link from "next/link";

const cards = [
    {
        title: "Particuliers",
        image: "/image/particuliers.webp",
        alt: "Particuliers",
        description: "Assurance pour les Particuliers : protégez votre famille et vos biens.",
        link: "/particuliers"
    },
    {
        title: "Professionnels",
        image: "/image/professionels.webp",
        alt: "Professionnels",
        description: "Assurance pour les Professionnels : des solutions adaptées à vos besoins.",
        link: "/professionnels"
    },
    {
        title: "Entreprises",
        image: "/image/entreprises.webp",
        alt: "Entreprises",
        description: "Assurance pour les Entreprises : protégez votre activité avec nos solutions sur mesure.",
        link: "/entreprises"
    },
];

export default function HomeServices() {
    return (
        <section
            className="relative w-[96vw] px-1 py-3 mt-4 md:mt-0 md:w-full flex flex-col items-center justify-center md:py-18 overflow-hidden bg-white md:bg-gradient-to-br from-white via-white to-orange-200/60">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-stretch">
                <div className="flex-10/12 flex flex-col md:flex-col justify-center items-stretch relative ">

                    {/* Titre d'accroche desktop */}
                    <div className="flex items-center justify-center gap-3 mt-0 md:mb-6">
                        <h1
                            className="hidden md:block text-3xl text-right md:text-4xl font-extrabold md:text-center text-gray-600 leading-tight">
                            Sérénité, confiance, mais avant tout...

                        </h1>
                        <span
                            className="hidden md:block text-orange-600 font-black uppercase tracking-wider text-[2.5rem] text-center "
                        >ASSURANCE&nbsp;!</span>

                    </div>
                    {/* Titre d'accroche mobile */}
                    <div className="block md:hidden bg-gray-100/80 border-gray-100 rounded-lg px-2 py-2 text-right">
                        <h1 className="text-3xl font-extrabold mb-2 text-gray-600 leading-tight">
                            Sérénité, confiance, mais avant tout...
                        </h1>
                        <span className="text-[#E94A2C] font-black uppercase tracking-wider text-4xl"
                        >ASSURANCE&nbsp;!</span>
                    </div>
                    <div className="w-full flex justify-center mb-3 md:mb-9">
                        <div
                            className="bg-orange-600/80 text-white px-6 py-2 rounded-lg font-semibold shadow-lg items-center gap-2 md:text-sm hidden md:flex">
                            <svg width="18" height="18" fill="white" viewBox="0 0 32 32" className="inline-block mr-2">
                                <path
                                    d="M17,10c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11S23.1,10,17,10z M19,26h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-4h-1 c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1s1,0.4,1,1v7h1c0.6,0,1,0.4,1,1S19.6,26,19,26z"/>
                                <path
                                    d="M13.4,8.5L13,0H8C7.7,0,7.4,0.1,7.2,0.4S7,0.9,7,1.2l1.8,9.7C10.2,9.8,11.7,9,13.4,8.5z"/>
                                <path d="M17,8c0.6,0,1.1,0,1.7,0.1L19,0H15l0.3,8.1C15.9,8,16.4,8,17,8z"/>
                                <path
                                    d="M25.2,10.9L27,1.2c0.1-0.3,0-0.6-0.2-0.8S26.3,0,26,0h-5l-0.3,8.5C22.3,9,23.8,9.8,25.2,10.9z"/>
                            </svg>
                            La première compagnie d&#39;assurance privée en Algérie
                        </div>
                    </div>
                    {/* Cartes particuliers, professionels et entreprises */}
                    <div
                        className="flex flex-col mx-0 bg-gray-100/80 py-3 md:py-0 md:bg-transparent rounded-lg md:flex-row gap-0 md:gap-6 justify-center items-stretch z-10 md:items-center">
                        {cards.map((card) => (
                            <Link href={card.link} key={card.link}>
                                <div
                                     className="flex flex-col items-center flex-1 group relative justify-center">
                                    <div
                                        className="relative mb-5 w-[88vw] md:w-[360px] cursor-pointer h-[52vw] md:h-[250px] rounded-xl overflow-hidden shadow-xs bg-white group transition-all duration-300 border-orange-600/50 border-2 group-hover:border-[#E94A2C] group-hover:shadow-orange-200 group-hover:scale-105 flex flex-col justify-center hover:-translate-y-1">
                                        <Image
                                            src={card.image}
                                            alt={card.alt}
                                            fill
                                            className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-500"
                                            sizes="320px"
                                            style={{zIndex: 0}}
                                        />
                                        {/* Titre sur la carte pour mobile */}
                                        <div
                                            className="absolute top-0 left-1/2 -translate-x-1/2 md:hidden z-20 pointer-events-none">
                                        <span
                                            className="backdrop-blur-xs bg-orange-600/70 border border-white/15 shadow-sm rounded-b-2xl px-6 py-2 text-white/90 text-md font-extrabold tracking-tight drop-shadow-xs flex items-center justify-center w-fit max-w-[90vw] mx-auto">
                                            {card.title}
                                        </span>
                                        </div>
                                        <div
                                            className="absolute inset-0 flex flex-col justify-end backdrop-blur-sm p-6 bg-orange-600/30 rounded-lg opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350 z-20">

                                            <p className="text-white text-extrabold mb-6 drop-shadow-lg">{card.description}</p>
                                            <p
                                                className="bg-[#E94A2C] text-white hover:bg-[#BD3014] cursor-pointer font-semibold px-6 py-2 rounded-xl transition">
                                                En savoir plus
                                            </p>
                                        </div>
                                        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"/>
                                    </div>
                                    {/* Titre sous la carte pour desktop */}
                                    <h1
                                        className="hidden md:block text-[1.3rem] font-extrabold mb-3 text-orange-600 group-hover:scale-125 transition-all duration-250">
                                        {card.title}
                                    </h1>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
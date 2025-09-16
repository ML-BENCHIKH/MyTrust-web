import Image from "next/image";
import Link from "next/link";

const news = [
    {
        title: "Lancement de notre nouvelle offre Auto+",
        description:
            "Découvrez des garanties renforcées et une assistance 24/7 pour rouler l'esprit tranquille.",
        image: "/image/particuliers.webp",
        date: "15 Août 2024",
        tag: "Produit",
        href: "#",
    },
    {
        title: "Ouverture d'une nouvelle agence à Oran",
        description:
            "Nous nous rapprochons de vous pour mieux vous servir partout en Algérie.",
        image: "/image/entreprises.webp",
        date: "10 Août 2024",
        tag: "Actualité",
        href: "#",
    },
    {
        title: "Conseils prévention habitation",
        description:
            "Adoptez les bons réflexes pour protéger votre logement des sinistres du quotidien.",
        image: "/image/professionels.webp",
        date: "5 Août 2024",
        tag: "Conseil",
        href: "#",
    },
    {
        title: "Nouvelle offre destinée aux particuliers",
        description:
            "Nous nous rapprochons de vous pour mieux vous servir partout en Algérie.",
        image: "/image/particuliers.webp",
        date: "10 Août 2024",
        tag: "Actualité",
        href: "#",
    }
];

export default function NewsSection() {
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-8 md:py-10 mb-2 md:mb-0">
            {/* Titre et sous-titre */}
            <div className="w-full flex flex-col items-center mb-6 md:mb-8 px-4">
                <Link
                    href="/actualites/"
                    className="group flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-600 text-center group-hover:text-orange-700 transition-colors duration-300">
                        Actualités
                    </h2>
                    <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 30 30"
                        className="text-orange-600 group-hover:text-orange-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10"/>
                    </svg>
                </Link>
                <p className="text-gray-600 text-sm md:text-lg text-center mt-2">
                    Dernières nouvelles, annonces et conseils de Trust Assurance.
                </p>
            </div>

            {/* Articles */}
            <div className="w-full max-w-7xl mx-auto px-3 md:px-6">
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 justify-items-center">
                    {news.map((item) => (
                        <article
                            key={item.title}
                            className="relative bg-white rounded-3xl shadow-xs border-2 border-orange-600/20 hover:border-orange-400/60 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer md:cursor-default"
                        >
                            {/* Overlay cliquable pour mobile */}
                            <Link
                                href={item.href}
                                className="absolute inset-0 md:hidden z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                                aria-label={`Voir ${item.title}`}
                            >
                                <span className="sr-only">{`Voir ${item.title}`}</span>
                            </Link>

                            <div className="relative h-48 md:h-56 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                <span
                                    className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow">
                                    {item.tag}
                                </span>
                                <div
                                    className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"/>
                            </div>
                            <div className="flex-1 flex flex-col p-4 md:p-6">
                                <div className="text-xs md:text-sm text-orange-600 font-semibold mb-2">
                                    {item.date}
                                </div>
                                <h3 className="text-sm md:text-base font-bold text-gray-800 line-clamp-2 min-h-[2.4em] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600 line-clamp-3 min-h-[3.6em] mb-4">
                                    {item.description}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href={item.href}
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 md:px-4 md:py-3 rounded-lg shadow transition-colors duration-200 cursor-pointer text-xs md:text-sm text-center block"
                                    >
                                        Lire plus
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

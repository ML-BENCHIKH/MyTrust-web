import Image from "next/image";
import { Button } from "@/components/ui/button";

const cards = [
    {
        title: "Assurance Particuliers",
        image: "/image/beautiful-mother-with-little-kids.jpg",
        alt: "Particuliers",
        description: "Découvrez nos produits et offres d'assurance pour les Particuliers",
    },
    {
        title: "Assurance Professionnels",
        image: "/image/5113.jpg",
        alt: "Professionnels",
        description: "Découvrez nos produits et offres d'assurance pour les Professionnels",
    },
    {
        title: "Assurance Entreprises",
        image: "/image/portrait-engineers-work-hours-job-site.jpg",
        alt: "Entreprises",
        description: "Découvrez nos produits et offres d'assurance pour les Entreprises",
    },
];

export default function NosServices() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            {/* En-tête */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold mb-2">Nos Produits & Services</h2>
                <p className="text-[#E94A2C] text-lg mb-2 font-semibold">Découvrez dans le détail notre gamme de solutions</p>
                <div className="w-60 h-1 bg-black mx-auto mt-1 rounded" />
            </div>
            {/* Cartes */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-start ">
                {cards.map((card, idx) => (
                    <div key={card.title} className="flex flex-col items-center flex-1 min-w-[180px] max-w-[280px] group">
                        {/* Titre au-dessus de la carte, gris par défaut, orange au hover de la carte */}
                        <div
                            className={`
                mb-3 text-lg font-semibold
                text-gray-500
                group-hover:text-[#E94A2C]
                transition-colors duration-300
              `}
                        >
                            {card.title}
                        </div>
                        {/* Carte avec image et overlay */}
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md bg-gray-100 group cursor-pointer transition-all duration-300">
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                className="object-cover w-full h-full"
                                sizes="350px"
                                style={{ zIndex: 0 }}
                            />
                            {/* Overlay animé de bas en haut */}
                            <div
                                className={`
                  absolute inset-0 flex flex-col justify-end p-6
                  bg-[#E94A2C]/50
                  translate-y-full opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 z-20
                `}
                            >
                                <p className="text-white text-base mb-6">{card.description}</p>
                                <Button
                                    className={`
                    bg-[#E94A2C] text-white hover:bg-[#BD3014]
                    font-semibold px-6 py-2 rounded transition
                  `}
                                >
                                    En savoir plus
                                </Button>
                            </div>
                            {/* Overlay léger permanent pour lisibilité */}
                            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function AvantagesSection({pro = false}: { pro?: boolean }) {

    const cartes = [
        {
            titre: "Offres sur mesure",
            description: "Une assurance optimale avec des offres sur mesure en fonction de vos besoins.",
            icon: "M20 7L9 18l-5-5"
        },
        {
            titre: "Réseau d’experts",
            description: "Un réseau d’experts spécialisés mis à votre disposition.",
            icon: "M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7l3-7z"
        },
        {
            titre: "Conseil personnalisé",
            description: "Un conseil personnalisé pour le choix de votre couverture.",
            icon: "M8 11h.01M12 11h.01M16 11h.01 M21 12c0 4.418-4.03 8-9 8 -1.05 0-2.06-.152-3-.436L3 20l1.5-4.5 A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        },
        {
            titre: "Assistance 24/7",
            description: "Une assistance opérationnelle 24h/24 et 7j/7.",
            icon: "M2 12h20M12 2v20"
        },
    ];

    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-8 md:py-10 mb-2 md:mb-0">

            {/* En-tête */}
            <div className="relative z-10 text-center px-4">
                <h3 className={`text-3xl md:text-4xl font-bold tracking-tight bg-clip-text ${pro ? "text-red-600" : "text-orange-600"}`}>Pourquoi
                    choisir Trust ?</h3>
                <p className="mt-3 text-gray-600 text-base md:text-lg font-light">Des garanties claires, une expérience
                    fluide et un accompagnement qui fait la différence.</p>
            </div>

            {/* Grille */}
            <div
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 md:px-8 mt-10">
                {/* Cartes */}
                {cartes.map((c) => (
                    <div key={c.titre}
                         className={`group relative flex flex-col items-start bg-white/80 backdrop-blur-xl rounded-2xl border ${pro ? "border-red-200" : "border-orange-200"}  p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                        <div
                            className={`mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br  ${pro ? "from-red-600 to-red-400" : "from-orange-600 to-orange-400"}  text-white shadow-md`}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                                <path d={c.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg mb-1 text-gray-900">{c.titre}</h4>
                        <p className="text-gray-600 text-base leading-relaxed font-light">{c.description}</p>
                        <div
                            className={`absolute inset-0 rounded-2xl ring-0 ring-transparent group-hover:ring-2 ${pro ? "group-hover:ring-red-400/40" : "group-hover:ring-orange-400/40"} transition-all duration-300`}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
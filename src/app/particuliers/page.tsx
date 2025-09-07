import Image from "next/image";
import Navbar from "@/features/Acceuil/Navbar";
import FooterSection from "@/features/Acceuil/FooterSection";

export default function ParticuliersPage() {
    return (
        <>
            <Navbar/>
            <main
                className="w-full flex flex-col items-center min-h-screen relative overflow-x-hidden">
                <HeroSection/>
                <ParticuliersSection/>
                <AvantagesSection/>
                <TemoignageSection/>
                <StickyHelp/>
                <FooterSection showAbout={false}/>
            </main>
        </>
    );
}

function HeroSection() {
    return (
        <section
            className="relative w-full flex flex-col items-center justify-center py-14 md:py-42 mb-12 overflow-hidden bg-gradient-to-br from-white via-white to-orange-200/60">
            <div
                className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-24 px-6 w-full max-w-6xl">

                {/* Image particuliers */}
                <div className="flex-shrink-0 flex items-center justify-center mb-8 md:mb-0 h-56">
                    <Image src="/image/particuliers.webp" alt="Famille" width={500} height={500}
                           className="rounded-xl shadow-md border-1 border-white object-cover"
                    />
                </div>

                {/* Texte catch phrase */}
                <div className="flex flex-col items-center md:items-start text-left px-4">
                    <h1 className="text-[1.7rem] md:text-5xl font-extrabold text-orange-600 mb-4 tracking-tight leading-tight md:font-sans whitespace-nowrap">
                        Assurances Particuliers
                    </h1>

                    <p className="text-gray-600/90 text-lg md:text-2xl max-w-3xl mb-6 font-semibold tracking-wide">Protégez
                        ce qui compte le plus pour vous avec style et sérénité.
                        <br/>Découvrez nos solutions d&#39;assurance pensées pour chaque moment de vie.</p>
                </div>
            </div>
        </section>
    );
}

function ParticuliersSection() {
    const produits = [
        {
            image: "/image/particuliers/auto.webp",
            title: "Automobile",
            badge: "Auto",
            desc: "Protégez votre véhicule et roulez l'esprit tranquille avec nos formules adaptées à tous les profils de conducteurs.",
            link: "/particuliers/automobile"
        },
        {
            image: "/image/particuliers/habitation.webp",
            title: "Multirisques Habitation",
            badge: "Habitation",
            desc: "Sécurisez votre maison ou appartement contre les sinistres, le vol et bénéficiez d'une assistance rapide en cas d'urgence.",
            link: "/particuliers/habitation"
        },
        {
            image: "/image/particuliers/tbc.webp",
            title: "Assurance Bon Conducteur",
            badge: "Auto",
            desc: "Récompensez votre conduite exemplaire avec une assurance sur-mesure et des avantages exclusifs pour les bons conducteurs.",
            link: "/particuliers/tbc"
        },
        {
            image: "/image/particuliers/catastrophes.webp",
            title: "Catastrophes Naturelles",
            badge: "Catastrophe",
            desc: "Soyez accompagné face aux imprévus majeurs: inondations, séismes, tempêtes… Une protection essentielle pour votre patrimoine.",
            link: "/particuliers/catastrophe-naturelle"
        },
        {
            image: "/image/particuliers/voyage.webp",
            title: "Assurance Voyage",
            badge: "Voyage",
            desc: "Voyagez sereinement partout dans le monde: assistance, prise en charge médicale, rapatriement et garanties sur-mesure.",
            link: "/particuliers/voyage"
        },
        {
            image: "/image/particuliers/bateau.webp",
            title: "Bateau de Plaisance",
            badge: "Bateau",
            desc: "Naviguez l’esprit libre: protégez votre bateau et profitez de vos loisirs nautiques en toute sécurité.",
            link: "/particuliers/bateau"
        },
    ];
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-8 flex flex-col items-center mb-6"
        >
            {/* Titre de section */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-4 tracking-tight text-center">Nos
                solutions</h2>

            {/* Sous-titre */}
            <p className="text-gray-600 text-lg md:text-xl mb-8 text-center max-w-2xl font-light">Choisissez la
                tranquillité, l’innovation et l’accompagnement Trust.</p>

            {/* Conteneur cartes */}
            <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-12 gap-x-12 gap-y-8 md:gap-y-14 place-items-center mt-4 w-full">
                {produits.map((p, i) => (
                    <a key={i} href={p.link}
                       className="group relative flex flex-col max-w-lg items-end border-1 border-orange-600/30 shadow-xs justify-between bg-white transition-all duration-300 w-auto overflow-hidden rounded-xl hover:shadow-lg hover:scale-105">

                        {/* Badge */}
                        <span
                            className="absolute top-3 left-3 z-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg tracking-wide uppercase">
                                {p.badge}
                            </span>
                        {/* Image du produit */}
                        <div className="w-full h-62 relative overflow-hidden rounded-t-xl">
                            <Image src={p.image} alt={p.title} width={320} height={128}
                                   className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-80"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-orange-400/20 via-transparent to-transparent"/>
                        </div>

                        {/* Contenu */}
                        <div className="flex flex-col items-start p-4 gap-2 w-full flex-1">
                            <h2 className="text-xl font-bold text-gray-900 mb-1 tracking-tight line-clamp-2">{p.title}</h2>
                            <p className="text-gray-600 text-md font-medium leading-snug">{p.desc}</p>
                        </div>

                        {/* Bouton Voir plus */}
                        <div className="mr-4 mb-4">
                            <p className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 py-2 md:px-4 md:py-3 rounded-lg shadow transition-colors duration-200 cursor-pointer text-xs md:text-sm text-center block">
                                Voir plus
                            </p>
                        </div>

                    </a>
                ))}
            </div>

        </section>
    );
}

function AvantagesSection() {


    const cartes = [
        {
            titre: "Offres sur mesure",
            description: "Une assurance optimale avec des offres sur mesure en fonction de vos besoins.",
            icon: "M20 7L9 18l-5-5"
        },
        {
            titre: "Réseau d’experts",
            description: "Un réseau d’experts spécialisés, à votre disposition pour l’expertise de votre véhicule en cas de sinistre.",
            icon: "M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7l3-7z"
        },
        {
            titre: "Conseil personnalisé",
            description: "Un conseil personnalisé pour le choix de votre couverture.",
            icon: "M12 20v-6M9 14h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-orange-600">Pourquoi
                    choisir Trust ?</h3>
                <p className="mt-3 text-gray-600 text-base md:text-lg font-light">Des garanties claires, une expérience
                    fluide et un accompagnement qui fait la différence.</p>
            </div>

            {/* Grille des avantages */}
            <div
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 md:px-8 mt-10">
                {/* Cartes */}
                {cartes.map((c) => (
                    <div key={c.titre}
                         className="group relative flex flex-col items-start bg-white/80 backdrop-blur-xl rounded-2xl border border-orange-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div
                            className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 text-white shadow-md">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                                <path d={c.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h4 className="font-semibold text-lg mb-1 text-gray-900">{c.titre}</h4>
                        <p className="text-gray-600 text-base leading-relaxed font-light">{c.description}</p>
                        <div
                            className="absolute inset-0 rounded-2xl ring-0 ring-orange-500/0 group-hover:ring-2 group-hover:ring-orange-400/40 transition-all"/>
                    </div>
                ))}
            </div>
        </section>
    );
}

function TemoignageSection() {
    return (
        <section className="w-full flex flex-col items-center py-16 px-4">
            <div
                className="relative max-w-2xl w-full bg-white/90 rounded-3xl shadow-lg p-12 border border-orange-100 flex flex-col items-center">
                <Image src="/image/particuliers.webp" alt="Nadia B." width={80} height={80}
                       className="rounded-full border-4 border-orange-200 shadow mb-6 object-cover"/>
                <p className="text-2xl italic text-gray-700 mb-6 text-center font-light leading-relaxed">“Service
                    rapide, équipe à l’écoute et prise en charge efficace lors de mon sinistre auto. Je recommande Trust
                    les yeux fermés !”</p>
                <div className="flex flex-col items-center">
                    <span className="font-bold text-orange-600">Nadia B.</span>
                    <span className="text-gray-500 text-base font-light">Cliente Trust Assurances</span>
                </div>
            </div>
        </section>
    );
}

function StickyHelp() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a href="/contact"
               className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:scale-[115%] hover:shadow-xl transition-all text-white font-bold px-6 py-2 rounded-full shadow-md text-md ">
                Besoin d&#39;aide ?
            </a>
        </div>
    );
}
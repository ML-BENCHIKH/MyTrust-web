import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function BateauPage() {
    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection
                    pro={true}
                    titre="Assurance Véhicule Professionnel"
                    description_top="L’assurance bateau de plaisance."
                    description_bot="Qui vous offre une couverture complète pour vous protéger et préserver votre bateau."
                    image="/image/professionnels/produits/vehicule.webp"/>
                <InfoSection/>
                <AvantagesSection pro={true}/>
                <HelpButton pro={true}/>
                <FooterSection showAbout={false}/>
            </main>
        </>
    );
}

function InfoSection() {
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border border-gray-100 px-1 py-4 md:py-8 flex flex-col items-center">

            {/* En-tête */}
            <div className="flex flex-col items-center w-full text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-4 tracking-tight">
                    Assurance Véhicule Professionnel
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Gérez vos véhicules en toute sérénité.
                    Avec <span className="font-semibold text-red-600">TRUST</span>, vous bénéficiez de solutions
                    sur mesure pour protéger votre flotte automobile et assurer la continuité de votre activité.
                </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex px-4 flex-wrap gap-2">
                <span
                    className="inline-flex items-center rounded-full bg-red-100 text-red-700 border border-red-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Couverture personnalisée
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Gestion de flotte
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Assistance dédiée
                </span>
            </div>

            {/* Cartes */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">
                {/* Protections incluses */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-red-800">Protections incluses</h3>

                    <p className="text-gray-700 text-base">
                        Ce contrat couvre vos véhicules contre les principaux risques professionnels.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100/60 rounded-xl p-6">
                        <ul className="space-y-4  text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Responsabilité civile professionnelle
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Dommages collision
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Vol & incendie
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Bris de glace
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Assistance en cas de sinistre
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Services dédiés */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-emerald-800">Services dédiés</h3>
                    <p className="text-gray-700 text-base">
                        Une gestion optimisée de votre parc avec un suivi personnalisé et une assistance rapide.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100/60 rounded-xl p-6">
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Suivi individuel par véhicule
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Renouvellement facilité
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Réseau d’experts spécialisés
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Assistance 24/7
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}





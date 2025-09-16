import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function CatnatPage() {
    return (
        <>
            <Navbar/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection titre="Catastrophes Naturelles"
                             description_top="L'assurance qui vous permet de reconstruire votre bien immobilier"
                             description_bot="et redémarrer votre vie et celle de votre famille."
                             image="/image/particuliers/produits/catnat.webp"/>
                <InfoSection/>
                <AvantagesSection/>
                <HelpButton/>
                <FooterSection showAbout={false}/>
            </main>
        </>
    );
}


function InfoSection() {
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-4 md:py-8 flex flex-col items-center">

            {/* En-tête */}
            <div className="flex flex-col items-center w-full text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-4 tracking-tight">
                    Assurance Catastrophes Naturelles
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Face aux aléas climatiques et sismiques, <span className="font-semibold text-orange-600">TRUST</span> vous accompagne pour protéger votre bien immobilier et sécuriser l’avenir de votre famille.
                </p>
            </div>

            {/* Badges */}
            <div className="mt-4 flex px-4 flex-wrap gap-2">
                <span
                    className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Obligatoire en Algérie
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Protection complète
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 border border-orange-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Reconstruction garantie
                </span>
            </div>

            {/* Cartes */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">

                {/* Garanties incluses */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-blue-800">Garanties incluses</h3>
                    <p className="text-gray-700 text-base">
                        Ce contrat vous indemnise en cas de catastrophes naturelles reconnues par l’État :
                    </p>
                    <ul className="space-y-4 text-gray-700 text-base bg-gray-100/60 rounded-xl p-6">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Tremblement de terre
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Tempêtes et vents violents
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Mouvement de terrain
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Inondations et coulées de boue
                        </li>
                    </ul>
                </div>

                {/* Accompagnement TRUST */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-emerald-800">Accompagnement TRUST</h3>
                    <p className="text-gray-700 text-base">
                        En cas de sinistre, nous vous aidons à reconstruire votre bien immobilier et à protéger vos proches.
                    </p>
                    <ul className="space-y-4 text-gray-700 text-base bg-gray-100/60 rounded-xl p-6">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Conseil et assistance personnalisés
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Réseau d’experts disponibles
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Indemnisation rapide et efficace
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

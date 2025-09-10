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
                    titre="Multirisques Professionnelle"
                    description_top="Protégez votre patrimoine professionnel."
                    description_bot="Une couverture complète et modulable contre incendie, vol, dégâts et autres risques majeurs."
                    image="/image/professionnels/produits/multirisquespro.webp"/>
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
                <span
                    className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-semibold shadow mb-3">
                    MULTIRISQUES PRO
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-red-600 mb-4 tracking-tight">
                    Multirisques Professionnelle
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Protégez l’ensemble de votre patrimoine professionnel : immeubles, équipements, bureaux, et biens
                    essentiels à votre activité. Avec <span className="font-semibold text-red-600">TRUST</span>,
                    bénéficiez de packs sur mesure qui vous assurent sécurité et sérénité.
                </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex px-4 flex-wrap gap-2">
                <span
                    className="inline-flex items-center rounded-full bg-red-100 text-red-700 border border-red-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Protection globale
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Continuité d’activité
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Sérénité financière
                </span>
            </div>

            {/* Cartes */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">
                {/* Protections incluses */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-red-800">Protections incluses</h3>
                    <p className="text-gray-700 text-base">
                        Des garanties solides pour préserver vos biens et votre activité contre les aléas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Responsabilité Civile Pro
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Incendie & Explosion
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Dégâts des eaux
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Dommages électriques
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Bris de glace
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Vol
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Dommages matériels informatiques
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Avantages */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-emerald-800">Vos avantages</h3>
                    <p className="text-gray-700 text-base">
                        Une couverture complète et flexible pour sécuriser votre patrimoine professionnel.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Packs personnalisés
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Tarifs adaptés
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Défense & Recours
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Gestion simplifiée du contrat
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Assistance rapide en cas de sinistre
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}


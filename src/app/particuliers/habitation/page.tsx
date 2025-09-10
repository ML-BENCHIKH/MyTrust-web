import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function HabitationPage() {
    return (
        <>
            <Navbar/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection titre="Multirisques Habitation"
                             description_top="L’assurance qui protège votre foyer."
                             description_bot="Trust met à votre disposition une couverture complète pour préserver votre maison et vos biens."
                             image="/image/particuliers/produits/batiment.webp"/>
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
                <span
                    className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-semibold shadow mb-3">
                    PROTECTION HABITATION
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-orange-600 mb-4 tracking-tight">
                    Assurance Multirisques Habitation
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Votre maison mérite une protection complète.
                    Avec <span className="font-semibold text-orange-600">TRUST</span>, vous êtes couvert contre les
                    sinistres majeurs et bénéficiez d’une assistance rapide en cas d’urgence.
                </p>
            </div>

            <div className="mt-4 flex px-4 flex-wrap gap-2">
                        <span
                            className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-xs md:text-sm font-medium">
                            Assistance 24/7
                        </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-xs md:text-sm font-medium">
                            Intervention rapide
                        </span>
                <span
                    className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 border border-orange-300 px-3 py-1 text-xs md:text-sm font-medium">
                            Experts qualifiés
                        </span>
            </div>

            {/* Cartes */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">
                {/* Protections incluses */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-blue-800">Protections incluses</h3>

                    <p className="text-gray-700 text-base">
                        Ce contrat vous garantit une indemnité en cas de :
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                                Responsabilité Civile Chef de famille
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                                Incendie, explosion et fumées
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                                Vol, cambriolage et vandalisme
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                                Dégâts des eaux et infiltrations
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                                Bris de glace et miroirs
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Home Assistance */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-emerald-800">Home Assistance</h3>
                    <p className="text-gray-700 text-base">
                        Un incident domestique ? Nos experts interviennent chez vous, 24h/24 et 7j/7.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Plomberie
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Électricité
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">

                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Serrurerie
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Vitrerie
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}



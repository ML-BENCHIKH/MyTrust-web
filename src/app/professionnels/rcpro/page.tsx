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
                    titre="Responsabilité Civile Professionnelle"
                    description_top="L’assurance qui protège votre activité."
                    description_bot="Une couverture essentielle pour sécuriser vos clients et votre entreprise face aux risques liés à votre profession."
                    image="/image/professionnels/produits/rcpro.webp"/>
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
                    Responsabilité Civile Professionnelle
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Professions libérales, artisans, commerçants ou prestataires de services peuvent tous voir leur
                    responsabilité engagée. Avec <span className="font-semibold text-red-600">TRUST</span>, protégez
                    votre activité contre les dommages causés à vos clients et tiers.
                </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex px-4 flex-wrap gap-2">
                <span
                    className="inline-flex items-center rounded-full bg-red-100 text-red-700 border border-red-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Sécurité juridique
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Protection financière
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Sérénité professionnelle
                </span>
            </div>

            {/* Cartes */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">
                {/* Protections incluses */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-red-800">Protections incluses</h3>

                    <p className="text-gray-700 text-base">
                        Un contrat pensé pour couvrir les dommages causés dans le cadre de votre activité.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100/60 rounded-xl p-6">
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Dommages corporels causés aux clients
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Dommages matériels liés à l’activité
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Pertes financières indirectes
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                Frais de défense & recours
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Avantages */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-emerald-800">Vos avantages</h3>
                    <p className="text-gray-700 text-base">
                        Une couverture conçue pour protéger votre réputation et sécuriser vos finances.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100/60 rounded-xl p-6">
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Contrat flexible
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Tarifs adaptés à l’activité
                            </li>
                        </ul>
                        <ul className="space-y-4 text-gray-700 text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                Accompagnement juridique
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





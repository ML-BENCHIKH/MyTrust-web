import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function ProduitsSpeciauxPage() {
    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection
                    pro={true}
                    titre="Risques Spéciaux"
                    description_top="Des solutions adaptées pour des risques spécifiques."
                    description_bot="TRUST vous accompagne avec des couvertures ciblées pour protéger vos activités face aux imprévus."
                    image="/image/entreprises/produits/risquesspeciaux.webp"/>
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
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border border-gray-100 px-1 py-4 md:py-8 flex flex-col items-center"
        >
            {/* En-tête */}
            <div className="flex flex-col items-center w-full text-center">
                <span
                    className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-semibold shadow mb-3"
                >
                    PRODUITS SPÉCIAUX
                </span>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Avec <span className="font-semibold text-red-600">TRUST</span>, bénéficiez de
                    solutions uniques pour des risques particuliers et essentiels à votre activité.
                </p>
            </div>

            {/* Cartes Produits */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 px-4">

                {/* Perte De Produits Frigorifiés */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Perte De Produits Frigorifiés
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Une couverture pour protéger vos produits sous chaîne de froid contre les pertes
                        imprévues et coûteuses.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                            Dommages causés par défaillance technique ou coupure électrique
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Pertes suite à panne de groupe frigorifique
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Garantie des stocks périssables
                        </li>
                    </ul>
                </div>

                {/* Assurance Contrôle De Puits Et Reforage */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Assurance Contrôle De Puits Et Reforage
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Protégez vos engins et équipements de chantier contre les dommages liés à leur utilisation.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Accidents, incendies, collisions et renversements
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Détériorations lors du montage/démontage
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Vols et pertes sur site
                        </li>
                    </ul>
                </div>

                {/* Tous Risques Foires Et Expositions */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Tous Risques Foires Et Expositions
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Une protection complète pour vos événements et chantiers contre les pertes et
                        dommages éventuels.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Dommages aux ouvrages jusqu’à la réception provisoire
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Protection des installations et matériels de chantier
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Couverture des matériaux et équipements sur site
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

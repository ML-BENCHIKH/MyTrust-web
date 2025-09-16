import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function EngineeringPage() {
    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection
                    pro={true}
                    titre="Assurance Engineering"
                    description_top="L’assurance qui sécurise vos projets d’ingénierie."
                    description_bot="Protégez vos chantiers, vos équipements et vos responsabilités contre les imprévus techniques et financiers."
                    image="/image/entreprises/produits/engineering.webp"/>
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
                    CONSTRUCTION
                </span>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Avec <span className="font-semibold text-red-600">TRUST</span>, protégez vos chantiers,
                    vos ouvrages et vos engins grâce à des solutions adaptées au secteur du bâtiment.
                </p>
            </div>

            {/* Cartes Produits */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 px-4">

                {/* RC Décennale */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        RC Décennale
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Obligatoire pour les professionnels du bâtiment, elle couvre votre responsabilité
                        pendant <span className="font-semibold">10 ans</span> après la réception d’un ouvrage
                        contre les vices cachés et dommages graves.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Dommages dus aux vices cachés
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Instabilité du sol
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Responsabilité décennale légale
                        </li>
                    </ul>
                </div>

                {/* Assurance Engins de Chantier */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Assurance Engins de Chantier
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Protégez vos engins coûteux contre les risques fréquents du chantier : incendies,
                        collisions, erreurs de montage, vols ou accidents.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Accidents et incendies
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Erreurs de montage et renversements
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Vols et détériorations
                        </li>
                    </ul>
                </div>

                {/* Assurance Risques Construction */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Assurance Risques Construction
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Couvrez vos chantiers et ouvrages contre les pertes, dommages et responsabilités
                        pouvant survenir durant la construction ou le montage.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Dommages à l’ouvrage principal
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Couverture des ouvrages provisoires
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Matériaux, matériels et installations protégés
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}





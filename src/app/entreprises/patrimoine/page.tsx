import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function PatrimoineEntreprisePage() {
    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8"
            >
                <HeroSection
                    pro={true}
                    titre="Assurances du Patrimoine de l’Entreprise"
                    description_top="Protégez vos biens, vos équipements et vos moyens de production."
                    description_bot="Des solutions complètes pour sécuriser vos actifs essentiels face aux sinistres et incidents majeurs."
                    image="/image/entreprises/produits/patrimoine.webp"
                />
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
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto bg-gray-100/60 rounded-xl border border-gray-100 px-4 py-8 flex flex-col items-center"
        >
            {/* En-tête */}
            <div className="flex flex-col items-center text-center">
                <span
                    className="px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-semibold shadow mb-3"
                >
                    ENTREPRISE
                </span>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Avec <span className="font-semibold text-red-600">TRUST</span>, protégez vos locaux,
                    vos machines, vos véhicules et vos équipements contre les sinistres majeurs
                    qui peuvent mettre en péril la continuité de votre activité.
                </p>
            </div>

            {/* Cartes */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 px-4">

                {/* Flotte Automobile */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Flotte Automobile
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Simplifiez la gestion de votre parc automobile grâce à des solutions flexibles et
                        adaptées à vos besoins, incluant un suivi et un renouvellement personnalisé.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Solutions sur mesure et adaptables
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Couverture complète pour toute la flotte
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Suivi et renouvellement personnalisés
                        </li>
                    </ul>
                </div>

                {/* Incendie et Explosion */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Incendie et Explosion
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Protégez vos locaux, équipements et stocks contre les risques d’incendie et
                        d’explosion, complétable avec d’autres garanties.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Locaux, matériels et équipements protégés
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Prévention des pertes financières majeures
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Extension possible avec garanties complémentaires
                        </li>
                    </ul>
                </div>

                {/* Bris de Machines */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Bris de Machines
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Assurez vos machines et installations industrielles contre les coûts élevés de
                        réparation et les pertes financières dues aux arrêts de production.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Prise en charge des réparations
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Protection en activité ou au repos
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Reprise rapide de l’exploitation
                        </li>
                    </ul>
                </div>

                {/* Perte d’Exploitation */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Perte d’Exploitation
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Compensez vos pertes financières après un incendie ou un bris de machine, pour
                        sauvegarder vos flux de trésorerie et préserver vos marges.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Indemnisation du manque à gagner
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Maintien des cash-flows
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Continuité de l’activité assurée
                        </li>
                    </ul>
                </div>

                {/* Tous Risques Informatique */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Tous Risques Informatique
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Protégez votre parc informatique (serveurs, stations, PC, laptops, imprimantes)
                        contre les pannes, crashs et pertes de données.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Couvre crash, détérioration et mauvaise manipulation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Protection des serveurs et postes de travail
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Sécurisation des données critiques
                        </li>
                    </ul>
                </div>

                {/* Tous Risques SAUF */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Tous Risques SAUF
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Une couverture étendue qui protège contre tous types de sinistres, à l’exception
                        de ceux explicitement exclus dans les conditions générales.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Couverture la plus intégrale possible
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Adaptée aux risques multiples de l’entreprise
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Exclusions clairement définies
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

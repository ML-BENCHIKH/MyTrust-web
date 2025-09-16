import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function RcEntreprisePage() {
    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection
                    pro={true}
                    titre="Responsabilité Civile Entreprises"
                    description_top="L’assurance qui protège votre entreprise face aux imprévus."
                    description_bot="Une couverture essentielle pour sécuriser votre responsabilité civile et protéger vos activités contre les dommages causés à des tiers."
                    image="/image/entreprises/produits/rcentreprises.webp"/>
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
                    ENTREPRISES
                </span>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Deux solutions pour protéger votre entreprise : RC Entreprise et RC Produits Livrés.
                </p>
            </div>

            {/* Cartes */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 px-4">

                {/* Carte RC Entreprise */}
                <div className=" bg-white shadow-sm rounded-md p-6 ">
                    {/* En-tête */}
                    <div className="flex flex-col items-center w-full text-center">
                        <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                            RC Entreprise et Chef d&#39;Entreprise
                        </h2>
                        <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                            Protégez votre activité contre les dommages causés à vos clients, partenaires et tiers.
                        </p>
                    </div>


                    {/* Avantages */}
                    <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">
                        <div
                            className="bg-gray-100/60 rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-red-800">Protections incluses</h3>
                            <ul className="space-y-4 text-gray-700 text-base">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                    RC Entreprise / Chef d’entreprise
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Litiges avec tiers
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Dommages matériels et corporels
                                </li>
                            </ul>
                        </div>
                        <div
                            className="bg-gray-100/60 rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-emerald-800">Vos avantages</h3>
                            <ul className="space-y-4 text-gray-700 text-base">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Couverture adaptée à votre activité
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Sécurité face aux imprévus
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Confiance renforcée avec vos clients
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Carte RC Produits Livrés */}
                <div className=" bg-white shadow-sm rounded-md p-6 ">
                    {/* En-tête */}
                    <div className="flex flex-col items-center w-full text-center">
                        <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                            RC Produits Livrés
                        </h2>
                        <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                            Sécurisez vos clients et votre image face aux risques liés à vos produits après livraison.
                        </p>
                    </div>


                    {/* Avantages */}
                    <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">
                        <div
                            className="bg-gray-100/60 rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-red-800">Protections incluses</h3>
                            <ul className="space-y-4 text-gray-700 text-base">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Responsabilité liée à l’usage des produits
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Vices de conception, conditionnement ou stockage
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Dommages corporels, matériels et financiers
                                </li>
                            </ul>
                        </div>
                        <div
                            className="bg-gray-100/60 rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                            <h3 className="text-xl font-bold text-emerald-800">Vos avantages</h3>
                            <ul className="space-y-4 text-gray-700 text-base">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Confiance renforcée des clients
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Protection financière contre litiges
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                                    Image de marque préservée
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}





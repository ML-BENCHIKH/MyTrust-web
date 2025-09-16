import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function PrevoyancePage() {
    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection
                    pro={true}
                    titre="Prévoyance Collective Des Collaborateurs"
                    description_top="Protégez votre capital humain avec une couverture santé et prévoyance sur mesure."
                    description_bot="TRUST en partenariat avec AMANA met à votre disposition des solutions adaptées au bien-être de vos salariés et à la sécurité de votre entreprise."
                    image="/image/entreprises/produits/prevoyance.webp"/>
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
                    PRÉVOYANCE COLLECTIVE
                </span>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Avec <span className="font-semibold text-red-600">TRUST</span> et{" "}
                    <span className="font-semibold">AMANA</span>, offrez à vos collaborateurs une
                    protection santé et prévoyance qui bénéficie à la fois à votre entreprise et à vos salariés.
                </p>
            </div>

            {/* Carte Produit */}
            <div className="w-full grid grid-cols-1 mt-6 gap-6 px-4">
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Que couvre votre contrat ?
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Nos garanties de prévoyance collective vous assurent une prise en charge
                        complète et adaptée :
                    </p>

                    {/* Liste en deux colonnes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
                        <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Prévoyance (versement d’un capital en cas de décès)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Maladie & soins annexes
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Frais pharmaceutiques
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Maternité
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Actes médicaux
                            </li>
                        </ul>

                        <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Soins dentaires
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Frais de lunetterie
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Prothèses auditives et orthopédiques
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Frais d’hospitalisation
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 shrink-0"></span>
                                Transport sanitaire
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

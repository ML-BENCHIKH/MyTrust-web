import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function ParticuliersAutoPage() {
    return (
        <>
            <Navbar/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection titre="Assurance de Voyage"
                             description_top="Voyagez serein, partez bien assuré."
                             description_bot="Accidents ou maladies, TRUST vous protège partout dans le monde 24h/24 et 7j/7."
                             image="/image/particuliers/produits/voyage.webp"/>
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
                    ASSURANCE VOYAGE
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-orange-600 mb-4 tracking-tight">
                    Assistance Voyage Internationale
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Voyagez l’esprit tranquille où que vous alliez. Avec{" "}
                    <span className="font-semibold text-orange-600">TRUST</span>, vous êtes couvert
                    contre les imprévus de santé ou d’accident à l’étranger.
                </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex px-4 flex-wrap gap-2">
                <span
                    className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Assistance médicale mondiale
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Rapatriement sanitaire
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 border border-orange-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Urgences 24/7
                </span>
            </div>

            {/* Cartes */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 w-full px-2 max-w-6xl">
                {/* Protections incluses */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-blue-800">Protections incluses</h3>
                    <p className="text-gray-700 text-base">
                        Votre contrat couvre les principaux risques liés aux voyages internationaux.
                    </p>
                    <ul className="space-y-4 text-gray-700 text-base">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Frais médicaux et hospitalisation d’urgence
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Rapatriement sanitaire en cas de besoin
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Couverture en cas d’accident à l’étranger
                        </li>
                    </ul>
                </div>

                {/* Assistance Voyage */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm transition-all duration-500 p-8 flex flex-col gap-6 hover:shadow-xl">
                    <h3 className="text-2xl font-bold text-emerald-800">Assistance Voyage</h3>
                    <p className="text-gray-700 text-base">
                        Un imprévu à l’étranger ? Notre réseau international est là pour vous aider.
                    </p>
                    <ul className="space-y-4 text-gray-700 text-base">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Assistance téléphonique multilingue 24h/24
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Prise en charge en cas de perte de bagages
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Soutien en cas de documents perdus
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

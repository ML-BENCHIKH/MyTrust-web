import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function BateauPage() {
    return (
        <>
            <Navbar/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection titre="Bateau de Plaisance"
                             description_top="L’assurance bateau de plaisance."
                             description_bot="Qui vous offre une couverture complète pour vous protéger et préserver votre bateau."
                             image="/image/particuliers/produits/bateau.webp"/>
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
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 pb-6 pt-8 flex flex-col items-center">


            {/* En-tête */}
            <div className="flex flex-col items-center w-full text-center">
                <span
                    className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-semibold shadow mb-3">
                    PLAISANCE EN TOUTE SÉRÉNITÉ
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-orange-600 mb-4 tracking-tight">
                    Assurance Bateau de Plaisance
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Posséder un bateau, c’est réaliser un rêve.
                    Avec <span className="font-bold text-orange-600">TRUST</span>, protégez votre embarcation contre les
                    aléas de la mer et naviguez l’esprit léger.
                </p>
            </div>

            <div className=" mt-4 px-2 flex flex-wrap gap-2">
                        <span
                            className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-sm font-medium">
                            Sérénité en mer
                        </span>
                <span
                    className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 border border-sky-300 px-3 py-1 text-sm font-medium">
                            Protection tous risques
                        </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-sm font-medium">
                            Responsabilité assurée
                        </span>
            </div>
            {/* Cartes */}
            <div className="mt-8 grid gap-8 md:grid-cols-2 w-full max-w-6xl">

                {/* Protections incluses */}
                <div
                    className="bg-white rounded-2xl border border-white shadow-lg p-8 flex flex-col gap-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-bold text-blue-800">Protections incluses</h3>
                    <p className="text-gray-700 text-base">
                        Protégez votre embarcation contre les imprévus : dommages matériels, aléas climatiques, vol ou
                        vandalisme.
                    </p>
                    <ul className="space-y-4 text-gray-700 text-base">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Dommages matériels au bateau (tous événements)
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Risques climatiques et aléas de la météo
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Incendie, explosion ou chavirement
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Vol, vandalisme et collisions
                        </li>
                    </ul>
                </div>

                {/* Responsabilité & Assistance */}
                <div
                    className="bg-white rounded-2xl border border-white shadow-lg p-8 flex flex-col gap-6 hover:shadow-xl transition">
                    <h3 className="text-2xl font-bold text-emerald-800">Responsabilité & Assistance</h3>
                    <p className="text-gray-700 text-base">
                        Naviguez sans inquiétude : vous êtes couvert en cas de dommages causés à des tiers par votre
                        bateau.
                    </p>
                    <ul className="space-y-4 text-gray-700 text-base">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Responsabilité civile plaisance
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Assistance en cas de sinistre ou avarie
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Conseil et accompagnement spécialisés
                        </li>
                    </ul>

                </div>

            </div>
        </section>
    );
}

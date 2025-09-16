
import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function MarchandisesPage() {
    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection
                    pro={true}
                    titre="Marchandises Transportées"
                    description_top="L’assurance qui protège vos marchandises en transit."
                    description_bot="Une couverture fiable pour sécuriser vos biens contre les risques de transport, qu’ils soient terrestres, maritimes ou aériens."
                    image="/image/entreprises/produits/transport.webp"/>
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
                    TRANSPORT
                </span>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Avec <span className="font-semibold text-red-600">TRUST</span>, protégez vos
                    marchandises lors de leur transport maritime, terrestre ou aérien grâce à des solutions
                    adaptées aux différents modes de transit.
                </p>
            </div>

            {/* Cartes Produits */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 px-4">

                {/* Facultés Maritimes */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Facultés Maritimes
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Couvrez vos importations et exportations contre les risques liés au transport
                        maritime, au chargement, au déchargement et au transbordement, adaptés à vos
                        <span className="font-semibold"> Incoterms</span>.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Formules : Tous Risques, Franc d’Avaries Particuliers
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Abordage, naufrage, incendie, explosion
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Catastrophes naturelles & fortunes de mer
                        </li>
                    </ul>
                </div>

                {/* Facultés Terrestres */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Facultés Terrestres
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Protégez vos marchandises transportées par voie terrestre, que ce soit par vos
                        propres moyens ou par un transporteur public.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Formules : Tous Risques, Accidents Caractérisés
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Renversement, collision, incendie ou explosion
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Inondations, tremblements de terre, catastrophes naturelles
                        </li>
                    </ul>
                </div>

                {/* Facultés Aériennes */}
                <div className="bg-white shadow-sm rounded-md p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4 tracking-tight">
                        Facultés Aériennes
                    </h2>
                    <p className="text-md text-gray-700 mb-6">
                        Une couverture complète pour vos marchandises transportées par voie aérienne contre
                        les dommages, pertes, disparitions et vols pendant le voyage.
                    </p>
                    <ul className="space-y-3 bg-gray-100/60 rounded-xl p-6 text-gray-700 text-base text-left w-full">
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Dommages et pertes matérielles
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Pertes de poids ou de quantité
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-red-700 rounded-full mt-2"></span>
                            Disparitions et vols
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

import Navbar from "@/features/Acceuil/Navbar";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import FooterSection from "@/features/Acceuil/FooterSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";

export default function TbcPage() {
    return (
        <>
            <Navbar/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection titre="Trust Bon Conducteur"
                             description_top="Assurance Trust Bon Conducteur,"
                             description_bot="Un produit spécifique et innovant qui distingue les bons conducteurs et les met en valeur."
                             image="/image/particuliers/produits/tbc_produit.webp"/>
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
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-4 md:py-8 flex flex-col items-center ">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-4 tracking-tight text-center">
                    Trust Bon Conducteur
                </h2>
                <p className="text-md md:text-lg text-gray-700 text-center max-w-2xl">
                    Un produit innovant qui distingue et valorise les bons conducteurs, tout en soutenant la prévention
                    routière.
                </p>
            </div>

            <div className="mt-4 px-4 flex flex-wrap gap-2">
                        <span
                            className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-sm font-medium gap-1">0 DA de franchise</span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-sm font-medium gap-1">Tarification spéciale</span>
                <span
                    className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 border border-violet-300 px-3 py-1 text-sm font-medium gap-1">Club exclusif</span>
                <span
                    className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 border border-amber-300 px-3 py-1 text-sm font-medium gap-1">Option Takaful</span>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 px-2 md:px-16 w-full">
                {/* Caractéristiques */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm hover:shadow-xl transition-all duration-500 p-7 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-blue-800">Caractéristiques</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700 bg-gray-100/60 rounded-xl p-6">
                        <li className="flex items-start gap-3"><span
                            className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Assurance tous risques au premier sinistre, tarification
                            spéciale pour tous, sans exclusion.
                        </li>
                        <li className="flex items-start gap-4"><span
                            className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Couverture consommée si le conducteur est seul
                            responsable de l’accident.
                        </li>
                        <li className="flex items-start gap-4"><span
                            className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Garantie reconstituable à chaque sinistre responsable par
                            une prime additionnelle.
                        </li>
                        <li className="flex items-start gap-4"><span
                            className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></span>
                            Indemnisation 100% sans franchise (0 DA).
                        </li>
                    </ul>
                </div>
                {/* Avantages Club */}
                <div
                    className="bg-white rounded-xl border border-white shadow-sm hover:shadow-xl transition-all duration-500 p-7 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-emerald-800">Club & Avantages</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700 bg-gray-100/60 rounded-xl p-6">
                        <li className="flex items-start gap-4"><span
                            className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Moins chère que les offres classiques.
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Certification et rassemblement des bons conducteurs dans un CLUB exclusif.
                        </li>
                        <li className="flex items-start gap-4"><span
                            className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Concours annuel : élisez le meilleur conducteur de l’année (cadeaux à gagner).
                        </li>
                        <li className="flex items-start gap-4"><span
                            className="w-2 h-2 bg-emerald-800 rounded-full mt-2 flex-shrink-0"></span>
                            Disponible aussi en Takaful (Assurance Islamique).
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

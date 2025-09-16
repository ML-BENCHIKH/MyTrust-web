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
                <HeroSection titre="Assurance Automobile"
                             description_top="L’assurance Auto qui vous convient."
                             description_bot="Trust met à votre disposition ses nouvelles offres, avec ses différents packs pour convenir à vos besoins."
                             image="/image/particuliers/produits/voiture.webp"/>
                <InfoSection/>
                <ASavoirSection/>
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
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-50 rounded-xl border border-gray-200 px-2 py-8 flex flex-col items-center">

            {/* En-tête */}
            <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-4 tracking-tight">
                    Votre véhicule, protégé à chaque trajet
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Avec <span className="font-semibold text-orange-600">TRUST</span>, choisissez le pack qui correspond
                    à vos besoins :
                    de l’essentiel obligatoire jusqu’à la couverture complète « Tous risques ».
                </p>
            </div>

            {/* Tags */}
            <div className="mt-4 flex px-4 flex-wrap gap-2 justify-center">
                <span
                    className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 border border-orange-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Packs modulables
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Réductions jusqu’à 50%
                </span>
                <span
                    className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 text-xs md:text-sm font-medium">
                    Assistance en Algérie & Tunisie
                </span>
            </div>

            {/* Tableau desktop */}
            <div className="mt-10 w-full max-w-6xl hidden md:block overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                    <thead>
                    <tr className="bg-orange-600 text-white">
                        <th className="p-4 text-left font-semibold">Garanties Incluses</th>
                        <th className="p-4 text-center font-semibold">Pack Essentiel<br/><span className="text-xs">3 800 DA</span>
                        </th>
                        <th className="p-4 text-center font-semibold">Pack Confort<br/><span className="text-xs">5 200 DA</span>
                        </th>
                        <th className="p-4 text-center font-semibold">Pack Confort +<br/><span className="text-xs">20 000 DA</span>
                        </th>
                        <th className="p-4 text-center font-semibold">Pack Excellence<br/><span className="text-xs">30 000 DA</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {[
                        ["Responsabilité Civile", "✓", "✓", "✓", "✓"],
                        ["Défense & Recours", "✓", "✓", "✓", "✓"],
                        ["Bris de Glaces", "—", "✓", "✓", "✓"],
                        ["Dommage Collisions", "✓", "✓", "—", "—"],
                        ["Vol & Incendie", "—", "—", "✓", "✓"],
                        ["Dommage (valeur vénale)", "—", "—", "✓", "—"],
                        ["Dommage « Tous risques »", "—", "—", "—", "✓"],
                        ["Assistance", "Silver", "Silver", "Gold", "Gold"],
                    ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            {row.map((cell, i) => (
                                <td key={i}
                                    className={`p-4 text-center ${i === 0 ? "text-left font-medium text-gray-800" : "text-gray-700"}`}>
                                    {cell === "✓" ? <span className="text-green-600 font-bold">✓</span> : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="mt-3 text-xs text-gray-500">
                    * La responsabilité civile est obligatoire (ordonnance 74-15 modifiée par la loi 88-31).<br/>
                    ** Tarifs indicatifs pour 12 mois. Un devis personnalisé est disponible en agence TRUST.
                </p>
            </div>

            {/* Version mobile (cards packs) */}
            <div className="mt-10 w-full max-w-4xl grid gap-6 md:hidden px-2">
                {[
                    {
                        name: "Pack Essentiel",
                        price: "À partir de 3 800 DA",
                        garanties: ["Responsabilité Civile", "Défense & Recours", "Dommage Collisions", "Assistance Silver"]
                    },
                    {
                        name: "Pack Confort",
                        price: "À partir de 5 200 DA",
                        garanties: ["Responsabilité Civile", "Défense & Recours", "Bris de Glaces", "Dommage Collisions", "Assistance Silver"]
                    },
                    {
                        name: "Pack Confort +",
                        price: "À partir de 20 000 DA",
                        garanties: ["Responsabilité Civile", "Défense & Recours", "Bris de Glaces", "Dommage Collisions", "Vol & Incendie", "Dommage (valeur vénale)", "Assistance Gold"]
                    },
                    {
                        name: "Pack Excellence",
                        price: "À partir de 30 000 DA",
                        garanties: ["Responsabilité Civile", "Défense & Recours", "Bris de Glaces", "Dommage Collisions", "Vol & Incendie", "Dommage « Tous risques »", "Assistance Gold"]
                    }
                ].map((pack, idx) => (
                    <div key={idx}
                         className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                        <h3 className="text-lg font-bold text-orange-600">{pack.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{pack.price}</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            {pack.garanties.map((g, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span> {g}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ASavoirSection() {
    const infos = [
        {
            icon: "📸",
            text: "Il faut exiger de votre agence la prise de photos de votre véhicule à la souscription, ceci vous garantira un bon traitement de vos sinistres."
        },
        {
            icon: "📄",
            text: "Il faut garder tout le temps dans le véhicule au moins un formulaire de déclaration sinistre, pour les constats à l’amiable en cas d’accident."
        },
        {
            icon: "⏳",
            text: "Il faut déclarer tous sinistre survenu dans un délai de 7 jours, ce délai est réduit à 3 jours en cas de vol."
        },
        {
            icon: "🔄",
            text: "En cas de vente de votre véhicule, il faut se présenter à votre agence TRUST pour résilier le contrat et bénéficier de la ristourne."
        },
        {
            icon: "🌍",
            text: "Si vous envisagez un voyage en Tunisie avec votre véhicule, pensez à prendre une carte Interarabe, dite carte orange à demander auprès de votre agence TRUST."
        },
        {
            icon: "💸",
            text: "Si vous souscrivez à un PACK MENZILI pour assurer votre maison ou une deuxième assurance automobile, vous pouvez bénéficier d’une réduction allant jusqu’à 50%."
        },
        {
            icon: "📲",
            text: "Donner votre numéro de téléphone c’est vous assurer une prestation gratuite d’envoi de SMS pour toute opération que vous effectuez. (souscription, règlement de sinistre ou avis d’échéance)."
        },
        {
            icon: "🔑",
            text: "Le vol de véhicule en cas de perte de clé n’est pas couvert, il vous sera demandé de présenter les clés avec le double."
        }
    ];

    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto bg-gray-50 rounded-xl border border-gray-200 px-6 py-12 shadow-sm">

            {/* En-tête */}
            <div className="flex flex-col items-center text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-3">
                    Ce qu’il faut savoir
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Quelques conseils pratiques pour bien comprendre et profiter au mieux de votre assurance auto.
                </p>
            </div>

            {/* Cartes infos */}
            <div className="grid md:grid-cols-2 gap-6">
                {infos.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex-shrink-0 text-2xl">{item.icon}</div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

import Image from "next/image";
import Navbar from "@/features/Acceuil/Navbar";
import FooterSection from "@/features/Acceuil/FooterSection";
import AvantagesSection from "@/features/particuliers/AvantagesSection";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";
import ProduitsSection from "@/features/ProduitsSection";

export default function ParticuliersPage() {

    const produits = [
        {
            image: "/image/particuliers/auto.webp",
            title: "Automobile",
            badge: "Auto",
            desc: "Protégez votre véhicule et roulez l'esprit tranquille avec nos formules adaptées à tous les profils de conducteurs.",
            link: "/particuliers/automobile"
        },
        {
            image: "/image/particuliers/habitation.webp",
            title: "Multirisques Habitation",
            badge: "Habitation",
            desc: "Sécurisez votre maison ou appartement contre les sinistres, le vol et bénéficiez d'une assistance rapide en cas d'urgence.",
            link: "/particuliers/habitation"
        },
        {
            image: "/image/particuliers/tbc.webp",
            title: "Assurance Bon Conducteur",
            badge: "Auto",
            desc: "Récompensez votre conduite exemplaire avec une assurance sur-mesure et des avantages exclusifs pour les bons conducteurs.",
            link: "/particuliers/tbc"
        },
        {
            image: "/image/particuliers/catastrophes.webp",
            title: "Catastrophes Naturelles",
            badge: "Catastrophe",
            desc: "Soyez accompagné face aux imprévus majeurs: inondations, séismes, tempêtes… Une protection essentielle pour votre patrimoine.",
            link: "/particuliers/catnat"
        },
        {
            image: "/image/particuliers/voyage.webp",
            title: "Assurance Voyage",
            badge: "Voyage",
            desc: "Voyagez sereinement partout dans le monde: assistance, prise en charge médicale, rapatriement et garanties sur-mesure.",
            link: "/particuliers/voyage"
        },
        {
            image: "/image/particuliers/bateau.webp",
            title: "Bateau de Plaisance",
            badge: "Bateau",
            desc: "Naviguez l’esprit libre: protégez votre bateau et profitez de vos loisirs nautiques en toute sécurité.",
            link: "/particuliers/bateau"
        },
    ];

    return (
        <>
            <Navbar/>
            <main
                className="w-full flex flex-col items-center min-h-screen relative overflow-x-hidden">
                <HeroSection titre="Assurances Particuliers"
                             description_top="Protégez ce qui compte le plus pour vous avec style et sérénité."
                             description_bot="Découvrez nos solutions d&#39;assurance pensées pour chaque moment de vie."
                             image="/image/particuliers.webp"/>
                <ProduitsSection
                    produits={produits}
                />
                <AvantagesSection/>
                <TemoignageSection/>
                <HelpButton/>
                <FooterSection showAbout={false}/>
            </main>
        </>
    );
}

function TemoignageSection() {
    return (
        <section className="w-full flex flex-col items-center py-16 px-4">
            <div
                className="relative max-w-2xl w-full bg-white/90 rounded-3xl shadow-lg p-12 border border-orange-100 flex flex-col items-center">
                <Image src="/image/particuliers.webp" alt="Nadia B." width={80} height={80}
                       className="rounded-full border-4 border-orange-200 shadow mb-6 object-cover"/>
                <p className="text-2xl italic text-gray-700 mb-6 text-center font-light leading-relaxed">“Service
                    rapide, équipe à l’écoute et prise en charge efficace lors de mon sinistre auto. Je recommande Trust
                    les yeux fermés !”</p>
                <div className="flex flex-col items-center">
                    <span className="font-bold text-orange-600">Nadia B.</span>
                    <span className="text-gray-500 text-base font-light">Cliente Trust Assurances</span>
                </div>
            </div>
        </section>
    );
}
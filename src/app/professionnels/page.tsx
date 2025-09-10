import Navbar from "@/features/Acceuil/Navbar";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";
import FooterSection from "@/features/Acceuil/FooterSection";
import ProduitsSection from "@/features/ProduitsSection";
import AvantagesSection from "@/features/particuliers/AvantagesSection";

export default function ProfessionnelsPage() {

    const produits = [
        {
            image: "/image/professionnels/vehicule_pro.webp",
            title: "Véhicule Pro",
            badge: "Véhicule",
            link: "/professionnels/vehiculepro",
            desc: "Protégez vos véhicules professionnels contre les accidents, le vol et les imprévus du quotidien."
        },
        {
            image: "/image/professionnels/rc_pro.webp",
            title: "Responsabilité Civile Pro",
            badge: "RC",
            desc: "Couvrez vous contre les dommages causés à des tiers dans le cadre de votre activité.",
            link: "/professionnels/rcpro"
        },
        {
            image: "/image/professionnels/multirisques_pro.webp",
            title: "Multirisques Professionnelle",
            badge: "Multirisques",
            desc: "Une protection complète pour vos locaux et équipements contre les principaux risques.",
            link: "/professionnels/multirisquespro"
        }
    ];

    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection pro={true}
                             titre="Assurances Professionnels"
                             description_top="Protégez votre activité avec confiance et performance."
                             description_bot="Découvrez nos solutions d’assurance conçues pour soutenir et sécuriser vos projets."
                             image="/image/professionels.webp"/>
                <ProduitsSection
                    pro={true}
                    produits={produits}/>
                <AvantagesSection pro={true}/>
                <HelpButton pro={true}/>
                <FooterSection showAbout={false}/>
            </main>
        </>
    );
}
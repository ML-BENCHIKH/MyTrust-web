import Navbar from "@/features/Acceuil/Navbar";
import HeroSection from "@/features/HeroSection";
import HelpButton from "@/features/Acceuil/HelpButton";
import FooterSection from "@/features/Acceuil/FooterSection";
import ProduitsSection from "@/features/ProduitsSection";
import AvantagesSection from "@/features/particuliers/AvantagesSection";

export default function EntreprisesPage() {

    const produits = [
        {
            image: "/image/entreprises/rcentreprises.webp",
            title: "RC Entreprises",
            badge: "RC",
            link: "/entreprises/rcentreprises",
            desc: "Une couverture essentielle pour sécuriser votre responsabilité civile et protéger vos activités contre les dommages causés à des tiers."
        },
        {
            image: "/image/entreprises/engineering.webp",
            title: "Assurance Engineering",
            badge: "ENGINEERING",
            desc: "Protégez vos chantiers, vos équipements et vos responsabilités contre les imprévus techniques et financiers.",
            link: "/entreprises/engineering"
        },
        {
            image: "/image/entreprises/transport.webp",
            title: "Marchandises Transportées",
            badge: "TRANSPORT",
            desc: "Une couverture fiable pour sécuriser vos biens contre les risques de transport, qu’ils soient terrestres, maritimes ou aériens.",
            link: "/entreprises/marchandises"
        },
        {
            image: "/image/entreprises/patrimoine.webp",
            title: "Assurance Patrimoine",
            badge: "patrimoine",
            desc: "Des solutions complètes pour sécuriser vos actifs essentiels face aux sinistres et incidents majeurs.",
            link: "/entreprises/patrimoine"
        },
        {
            image: "/image/entreprises/risquesspeciaux.webp",
            title: "Risques Spéciaux",
            badge: "Multirisques",
            desc: "Des couvertures ciblées pour protéger vos activités face aux imprévus..",
            link: "/entreprises/risquesspeciaux"
        },
        {
            image: "/image/entreprises/prevoyance.webp",
            title: "Prévoyance Collective",
            badge: "prévoyance",
            desc: "Des solutions adaptées au bien-être de vos salariés et à la sécurité de votre entreprise.",
            link: "/entreprises/prevoyance"
        }
    ];

    return (
        <>
            <Navbar pro={true}/>
            <main
                className="w-full flex flex-col items-center min-h-screen gap-y-8 relative overflow-x-hidden mb-8">
                <HeroSection pro={true}
                             titre="Assurances Entreprises"
                             description_top="Protégez votre entreprise avec sérénité et efficacité."
                             description_bot="Des solutions d’assurance complètes pour garantir la continuité et la croissance de vos activités."
                             image="/image/entreprises.webp"/>
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
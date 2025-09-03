import type {Metadata} from "next";
import Navbar from "@/features/Acceuil/Navbar";
import FooterSection from "@/features/Acceuil/FooterSection";
import SimulationSection from "@/features/Simulation/SimulationSection";

export const metadata: Metadata = {
    title: "Simulation | Trust",
    description: "Page de simulation",
};

export default function SimulationPage() {
    return (
        <>
            <Navbar/>
            <main className="w-full flex flex-col items-center mb-8 gap-0 md:gap-8 justify-center min-h-[60vh]">
                <SimulationSection/>
                <FooterSection showAbout={false} />
            </main>
        </>
    );
}


import Navbar from "@/features/Acceuil/Navbar";
import FooterSection from "@/features/Acceuil/FooterSection";
import MapSectionWrapper from "@/features/Acceuil/map_section/MapSectionWrapper";

export default function ContactPage() {
    return (
        <>
            <Navbar/>
            <main className="w-full flex flex-col items-center mb-8 gap-0 md:gap-4 justify-center min-h-[60vh]">
                <ContactHeader/>
                <ContactSection/>
                <MapSectionWrapper/>
                <FooterSection/>
            </main>
        </>
    );
}


function ContactHeader() {

    return (
        <section
            className="w-full max-w-full relative overflow-hidden border border-orange-100/10 bg-gradient-to-br from-orange-50 via-white to-orange-100 mt-2 mb-4 md:my-0 py-12 px-6 md:py-22 ">
            {/* En-tête */}
            <div className="flex flex-col items-center w-full text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-orange-600 mb-4 tracking-tight">
                    Nous Contacter
                </h2>
                <p className="text-md md:text-lg text-gray-700 max-w-3xl">
                    Retrouvez toutes nos coordonnées pour échanger avec nous.
                    Notre équipe est à votre disposition pour vous accompagner.
                </p>
            </div>


        </section>
    );
}

function ContactSection() {
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-4 flex flex-col items-center mb-4 md:mb-0">
            <div className=" grid grid-cols-2 md:flex md:flex-row px-2 gap-4 md:gap-6">

                <div className="flex items-start bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col w-full gap-2 md:gap-4 p-2">
                        <h3 className="font-semibold md:text-xl text-orange-600">Adresse</h3>
                        <p className="text-gray-700 text-sm md:text-lg">
                            123 Rue de l’Assurance,<br/> Alger, Algérie
                        </p>
                    </div>
                </div>

                <div className="flex items-start bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col w-full gap-2 md:gap-4 p-2">
                        <h3 className="font-semibold md:text-xl text-orange-600">Téléphone</h3>
                        <p className="text-gray-700 text-sm md:text-lg">+213 21 00 00 00</p>
                    </div>
                </div>

                <div className="flex items-start bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col w-full gap-2 md:gap-4 p-2">
                        <h3 className="font-semibold md:text-xl text-orange-600">Email</h3>
                        <p className="text-gray-700 text-sm md:text-lg">contact@trust-dz.com</p>
                    </div>
                </div>

                <div className="flex items-start bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col w-full gap-2 md:gap-4 p-2">
                        <h3 className="font-semibold md:text-xl text-orange-600">Horaires</h3>
                        <p className="text-gray-700 text-sm md:text-lg">
                            Dimanche – Jeudi<br/>
                            8h30 – 17h00
                        </p>
                    </div>
                </div>
            </div>
        </section>);
}

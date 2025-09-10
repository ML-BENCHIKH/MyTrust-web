import Image from "next/image";

export function Actualite() {
    return (
        <section className="relative w-full py-12 px-4 overflow-hidden">
            {/* Image de fond */}
            <Image
                src="/image/Background.png"
                alt="background"
                fill
                className="object-cover -z-10"
                priority
            />

            {/* Titre */}
            <div className="text-center mb-10 relative z-10">
                <h2 className="text-3xl font-semibold mb-2">Actualités</h2>
                <div className="w-60 h-1 bg-black mx-auto mt-1 rounded" />
            </div>

            {/* Contenu */}
            <div className="mx-auto max-w-6xl relative z-10 px-4">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Grande carte à gauche */}
                    <div className="group relative lg:w-[1000px] lg:h-[600px] overflow-hidden rounded-lg">
                        <Image
                            src="/image/drought-land.jpg"
                            alt="conference"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1200px) 700px, 100vw"
                            priority
                        />

                        {/* Bande animée orange */}
                        <div className="absolute bottom-0 left-1/2 w-[60%] h-[50%] bg-[#E94A2C]/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-t-2xl -translate-x-1/2 ">
                            <p className="font-medium text-white text-center ">
                                Sponsoring de la<br/>
                                journée des Courtiers<br />
                                d’Assurance UACA
                            </p>
                            <Image
                                src="/image/logo_version3__1_-removebg-preview.png"
                                alt="logo"
                                fill
                            />
                        </div>

                    </div>

                    {/* Deux cartes à droite */}
                    <div className="flex flex-col gap-6 w-full">
                        {[
                            {
                                src: "/image/e-mail-global-communications-connection-social-networking-concept.jpg",
                                alt: "email",
                                text: "Inscrivez-vous à notre\nNewsletter"
                            },
                            {
                                src: "/image/Image.jpg",
                                alt: "document",
                                text: "Ligne Directrice N°01\nde la commission de\nsupervision"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative h-[290px] w-[550px] overflow-hidden rounded-lg">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#E94A2C]/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                                    <p className="font-medium text-white whitespace-pre-line">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

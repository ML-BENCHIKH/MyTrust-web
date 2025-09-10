import Image from "next/image";

export default function ProduitsSection({pro = false, produits}: {
    pro?: boolean,
    produits: Array<{
        image: string, title: string,
        badge: string, desc: string, link: string
    }>
}) {
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl mt-6 border-1 border-gray-100 px-1 py-8 flex flex-col items-center mb-6"
        >
            {/* Titre de section */}
            <h2 className={`text-3xl md:text-4xl font-extrabold ${pro ? "text-red-600" : "text-orange-600"} mb-4 tracking-tight text-center`}>Nos
                solutions</h2>

            {/* Sous-titre */}
            <p className="text-gray-600 text-lg md:text-xl mb-8 text-center max-w-2xl font-light">Choisissez la
                tranquillité, l’innovation et l’accompagnement Trust.</p>

            {/* Conteneur cartes */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-12 gap-x-12 gap-y-8 md:gap-y-14 place-items-center mt-4 w-full">
                {produits.map((p, i) => (
                    <a key={i} href={p.link}
                       className={`group relative flex flex-col max-w-lg items-end border-1 ${pro ? "border-red-600/30" : "border-orange-600/30"} shadow-xs justify-between bg-white transition-all duration-300 w-auto overflow-hidden rounded-xl hover:shadow-lg hover:scale-105`}>

                        {/* Badge */}
                        <span
                            className={`absolute top-3 left-3 z-20 bg-gradient-to-r ${pro ? "from-red-600 to-red-400" : "from-orange-600 to-orange-500"}  text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg tracking-wide uppercase`}>
                                {p.badge}
                            </span>
                        {/* Image du produit */}
                        <div className="w-full h-62 relative overflow-hidden rounded-t-xl">
                            <Image src={p.image} alt={p.title} width={320} height={128}
                                   className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-80"/>
                            <div
                                className={`absolute inset-0 bg-gradient-to-t ${pro ? "from-red-400/20" : "from-orange-400/20"} via-transparent to-transparent`}/>
                        </div>

                        {/* Contenu */}
                        <div className="flex flex-col items-start p-4 gap-2 w-full flex-1">
                            <h2 className="text-xl font-bold text-gray-900 mb-1 tracking-tight line-clamp-2">{p.title}</h2>
                            <p className="text-gray-600 text-md font-medium leading-snug">{p.desc}</p>
                        </div>

                        {/* Bouton Voir plus */}
                        <div className="mr-4 mb-4">
                            <p className={`w-full ${pro ? "bg-red-500 hover:bg-red-600" : "bg-orange-500 hover:bg-orange-600"}  text-white font-semibold px-3 py-2 md:px-4 md:py-3 rounded-lg shadow transition-colors duration-200 cursor-pointer text-xs md:text-sm text-center block`}>
                                Voir plus
                            </p>
                        </div>

                    </a>
                ))}
            </div>

        </section>
    );
}
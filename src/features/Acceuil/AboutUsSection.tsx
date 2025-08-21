import Image from 'next/image';

export default function AboutUsSection() {
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-8 pb-0 flex flex-col items-center mb-4 md:mb-0">
            <div
                className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-8 md:px-8">
                {/* Logo desktop */}
                <div className="hidden md:block flex-shrink-0 -ml-24 mt-14 mr-42 justify-start w-auto">
                    <Image
                        src="/logo-trust.png"
                        alt="Logo Trust"
                        width={180}
                        height={180}
                    />
                </div>
                {/* Logo mobile */}
                <div className="md:hidden flex flex-shrink-0  justify-center pr-2 w-full">
                    <Image
                        src="/logo-large.png"
                        alt="Logo Trust"
                        width={180}
                        height={180}
                    />
                </div>
                {/* Description */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-600 tracking-tight mb-4 text-center md:text-left">
                        Nous connaître
                    </h2>
                    <p className="text-gray-700 text-[1rem] px-4 md:px-0 md:text-lg leading-relaxed text-center md:text-left">
                        TRUST Algeria est une société par actions créée en 1997 dans le cadre de l&#39;Ordonnance 95 - 07 du
                        25 Janvier 1995 qui a consacré l&#39;ouverture du marché algérien des assurances à l&#39;investissement
                        privé. Elle a débuté son activité le 28 février 1998 en tant que 1ère COMPAGNIE PRIVÉE
                        ALGÉRIENNE, suite à l&#39;obtention de son agrément en date du 18 novembre 1997 et pratique
                        l&#39;ensemble des opérations d&#39;assurance et de réassurance.
                    </p>
                </div>
            </div>
        </section>
    );
}

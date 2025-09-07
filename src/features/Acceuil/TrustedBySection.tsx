import Image from "next/image";

const logos = [
    {src: "/logo-trust.png", alt: "Trust", href: "https://google.com"},
    {src: "/next.svg", alt: "Next.js", href: "https://google.com"},
    {src: "/globe.svg", alt: "Globe", href: "https://google.com"},
    {src: "/window.svg", alt: "Window", href: "https://google.com"},
];

export default function TrustedBySection() {
    const repeated = Array.from({length: 6}, () => logos).flat();

    return (
        <section
            className="w-full max-w-full px-0 relative overflow-hidden border border-orange-100/10 bg-gradient-to-br from-orange-50 via-white to-orange-100 mt-2 mb-4 md:my-0 py-6 md:py-8"
            aria-label="Nos partenaires"
        >
            <div className="px-0 md:px-0">

                {/* Titre */}
                <div className="flex items-center justify-center mb-4 md:mb-6">
                    <h2 className="text-lg md:text-3xl text-center justify-center font-extrabold mb-4 text-orange-600">
                        Nos partenaires
                    </h2>
                </div>

                {/* Ruban défilant */}
                <div className="relative overflow-hidden my-2">
                    <div className="whitespace-nowrap">
                        <div className="marquee inline-flex items-center gap-10 md:gap-14 will-change-transform w-max">
                            {repeated.map((logo, i) => (
                                <div key={`${logo.alt}-${i}`}
                                     className="inline-flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                                    <a
                                        href={logo.href}
                                        target="_blank"
                                        className="inline-flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                                        aria-label={logo.alt}
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={140}
                                            height={48}
                                            className="h-8 md:h-10 w-auto object-contain"
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection({showAbout = true}: { showAbout?: boolean }) {
    return (
        <section
            className="w-[94vw] md:w-[96vw] max-w-full mx-auto relative overflow-hidden bg-gray-100/60 rounded-xl border-1 border-gray-100 px-1 py-8 pb-0 flex flex-col items-center mb-4 md:mb-0">
            {showAbout && (<div
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
                    <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 tracking-tight mb-4 text-center md:text-left">
                        Nous connaître
                    </h2>
                    <p className="text-gray-700 text-[1rem] px-4 md:px-0 md:text-lg leading-relaxed text-center md:text-left">
                        TRUST Algeria est une société par actions créée en 1997 dans le cadre de l&#39;Ordonnance 95 -
                        07 du
                        25 Janvier 1995 qui a consacré l&#39;ouverture du marché algérien des assurances à
                        l&#39;investissement
                        privé. Elle a débuté son activité le 28 février 1998 en tant que 1ère COMPAGNIE PRIVÉE
                        ALGÉRIENNE, suite à l&#39;obtention de son agrément en date du 18 novembre 1997 et pratique
                        l&#39;ensemble des opérations d&#39;assurance et de réassurance.
                    </p>
                </div>
            </div>)}

            {/* Footer */}
            <div className="w-full">

                {/* Séparateur */}
                {showAbout &&
                    (<div className="w-full flex justify-center pt-2 mb-4">
                        <div className="h-px w-1/3 md:w-1/3 bg-gray-300/50 rounded-full"/>
                    </div>)}

                <div
                    className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                    {/* Colonne Contact */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                <a href="tel:+213000000000" className="hover:text-orange-600 transition-colors">+213 00
                                    00 00 00</a>
                            </li>
                            <li>
                                <a href="mailto:contact@trust.dz"
                                   className="hover:text-orange-600 transition-colors">contact@trust.dz</a>
                            </li>
                            <li className="text-gray-600">Alger, Algérie</li>
                        </ul>
                    </div>

                    {/* Colonne Navigation */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-3">Navigation</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li><Link href="#" className="hover:text-orange-600">Particuliers</Link></li>
                            <li><Link href="#" className="hover:text-orange-600">Professionnels</Link></li>
                            <li><Link href="#" className="hover:text-orange-600">Entreprises</Link></li>
                            <li><Link href="#" className="hover:text-orange-600">Simulations</Link></li>
                            <li><Link href="#" className="hover:text-orange-600">Trouver une agence</Link></li>
                        </ul>
                    </div>

                    {/* Colonne Société */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-3">La société</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li><Link href="#" className="hover:text-orange-600">Nous connaître</Link></li>
                            <li><Link href="#" className="hover:text-orange-600">Notre Réseau</Link></li>
                            <li><Link href="#" className="hover:text-orange-600">Nos Partenaires</Link></li>
                            <li><Link href="#" className="hover:text-orange-600">Nous rejoindre</Link></li>
                        </ul>
                    </div>

                    {/* Colonne Réseaux sociaux */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-3">Réseaux sociaux</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                   className="group flex items-center gap-3 hover:text-orange-600 transition-colors">
                                    <Image src="/image/socials/facebook.webp" alt="Facebook" width={24} height={24}
                                           className="h-6 w-6 object-contain"/>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                   className="group flex items-center gap-3 hover:text-orange-600 transition-colors">
                                    <Image src="/image/socials/linkedin.webp" alt="LinkedIn" width={24} height={24}
                                           className="h-6 w-6 object-contain"/>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                   className="group flex items-center gap-3 hover:text-orange-600 transition-colors">
                                    <Image src="/image/socials/instagram.webp" alt="Instagram" width={24} height={24}
                                           className="h-6 w-6 object-contain"/>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                   className="group flex items-center gap-3 hover:text-orange-600 transition-colors">
                                    <Image src="/image/socials/youtube.webp" alt="YouTube" width={24} height={24}
                                           className="h-6 w-6 object-contain"/>
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                   className="group flex items-center gap-3 hover:text-orange-600 transition-colors">
                                    <Image src="/image/socials/tiktok.webp" alt="TikTok" width={24} height={24}
                                           className="h-6 w-6 object-contain"/>
                                    TikTok
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bas de footer */}
                <div className="w-full max-w-5xl mx-auto px-4 md:px-8 pb-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs text-gray-500">
                        <Image src="/logo-small.png" alt="Trust" width={20} height={20}/>
                        <span>© {new Date().getFullYear()} TRUST Algeria. Tous droits réservés.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

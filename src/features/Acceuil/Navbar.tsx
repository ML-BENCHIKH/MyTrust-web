'use client';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function Navbar() {

    return (
        <>
            <NavDesktop/>
            <NavMobile/>
        </>
    );
}

function NavDesktop() {
    return (<div className="hidden md:block">
        <nav className="w-full bg-white px-10 py-3 border-b font-semibold fixed top-0 left-0 z-50">
            {/* Barre de navigation principale */}
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center space-x-2 py-10">
                    <Image
                        src="/logo-large.png"
                        alt="Trust Assurances"
                        width={150}
                        height={40}
                    />
                </div>
                {/* Liens principaux */}
                <div className="hidden md:flex items-center space-x-6 ">
                    <AnimatedLink href="#">Trust Assurances</AnimatedLink>
                    <AnimatedLink href="#">Particuliers</AnimatedLink>
                    <AnimatedLink href="#">Professionnels</AnimatedLink>
                    <AnimatedLink href="#">Entreprises</AnimatedLink>
                    <AnimatedLink href="#">Simulations</AnimatedLink>
                    <AnimatedLink href="#">Trouver une agence</AnimatedLink>
                </div>
                {/* Bouton Espace clients */}
                <AnimatedLink href="#" className="text-orange-600 hover:text-orange-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                         stroke="currentColor" className="w-6 h-6">
                        <circle cx="12" cy="7" r="5" stroke="currentVolor" strokeWidth="2.5"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                              d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"/>
                    </svg>
                    Espace client
                </AnimatedLink>
            </div>

        </nav>
        {/* Ajout d'un espace pour compenser la hauteur de la barre */}
        <div className="h-20 w-full"/>
        {/* Sous-menu */}
        <div
            className="bg-white border-b text-sm font-semibold mt-3 pt-3 pb-3 transition-all duration-300 hidden md:block">
            <div className="max-w-7xl mx-auto px-4 py-2 flex space-x-6">
                <AnimatedLink href="#">Nous connaître</AnimatedLink>
                <AnimatedLink href="#">Notre Réseau</AnimatedLink>
                <AnimatedLink href="#">Nous rejoindre</AnimatedLink>
                <AnimatedLink href="#">Nos Partenaires</AnimatedLink>
            </div>
        </div>
    </div>);
}

function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="block md:hidden">
            <nav className="w-full bg-white px-2 py-3 border-b font-semibold fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                    <div className="flex items-center py-10">
                        <Image src="/logo-small.png" alt="Trust Assurances"
                               width={55}
                               height={55}
                        />
                    </div>
                    {/* Menu burger */}
                    <button
                        className="flex flex-col items-center justify-center w-10 h-10 group"
                        aria-label="Ouvrir le menu"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 mb-1 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 mb-1 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>
            {/* Menu déroulant */}
            <div
                className={`fixed top-20 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col space-y-4">
                        <AnimatedLink href="#">Trust Assurances</AnimatedLink>
                        <AnimatedLink href="#">Particuliers</AnimatedLink>
                        <AnimatedLink href="#">Professionnels</AnimatedLink>
                        <AnimatedLink href="#">Entreprises</AnimatedLink>
                        <AnimatedLink href="#">Simulations</AnimatedLink>
                        <AnimatedLink href="#">Trouver une agence</AnimatedLink>
                    </div>
                    <div className="mt-6">
                        <AnimatedLink href="#" className="text-orange-600 hover:text-orange-800">
                            Espace client
                        </AnimatedLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AnimatedLink({href, children, className = ""}: {
    href: string;
    children: React.ReactNode;
    className?: string
}) {
    return (
        <Link
            href={href}
            className={`group relative text-gray-600 hover:text-orange-600 flex flex-col items-center ${className}`}
        >
            {children}
            <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"/>
        </Link>
    );
}

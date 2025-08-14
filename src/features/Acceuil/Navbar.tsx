'use client';
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";

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
                         stroke="currentColor" className="w-6 h-6 mr-2">
                        <circle cx="12" cy="7" r="5" stroke="currentVolor" strokeWidth="2.5"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                              d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"/>
                    </svg>
                    Espace client
                </AnimatedLink>
            </div>

        </nav>
        {/* Espace pour compenser la hauteur de la barre */}
        <div className="h-20 w-full"/>
        {/* Sous-menu */}
        <div
            className="bg-white border-b text-sm font-semibold mt-3 pt-3 pb-3 transition-all duration-300 hidden md:block">
            <div className="max-w-7xl mx-auto px-4 py-2 flex space-x-6">
                <AnimatedLink
                    href="#"
                    subLinks={[
                        {label: 'Mot du DG', href: '#'},
                        {label: 'Notre Staff', href: '#'},
                        {label: 'Trust Assurances', href: '#'},
                        {label: 'Notre Groupe', href: '#'},
                    ]}
                >Nous connaître</AnimatedLink>
                <AnimatedLink position={1} href="#">Notre Réseau</AnimatedLink>
                <AnimatedLink position={2} href="#" subLinks={[
                    {label: 'Contactez-nous', href: '#'},
                    {label: 'Recrutements', href: '#'},
                    {label: 'Devenir agent général', href: '#'}
                ]}
                >Nous rejoindre</AnimatedLink>
                <AnimatedLink position={3} href="#">Nos Partenaires</AnimatedLink>
            </div>
        </div>
    </div>);
}

function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    const sousMenus = {
        "Nous connaître": [
            {label: 'Mot du DG', href: '#'},
            {label: 'Notre Staff', href: '#'},
            {label: 'Trust Assurances', href: '#'},
            {label: 'Notre Groupe', href: '#'},
        ],
        "Nous rejoindre": [
            {label: 'Contactez-nous', href: '#'},
            {label: 'Recrutements', href: '#'},
            {label: 'Devenir agent général', href: '#'},
        ]
    };

    const links = [
        {label: 'Particuliers', href: '#'},
        {label: 'Professionnels', href: '#'},
        {label: 'Entreprises', href: '#'},
        {label: 'Simulations', href: '#'},
        {label: 'Trouver une agence', href: '#'},
        {label: 'Nous connaître', href: '#', subLinks: sousMenus["Nous connaître"]},
        {label: 'Notre Réseau', href: '#'},
        {label: 'Nos Partenaires', href: '#'},
        {label: 'Nous rejoindre', href: '#', subLinks: sousMenus["Nous rejoindre"]},

    ];

    return (
        <div className="block md:hidden">
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-opacity-40 z-40 transition-opacity duration-300"
                     onClick={() => setIsOpen(false)}/>
            )}
            <nav className="w-full bg-white px-2 py-3 border-b font-semibold fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
                    <div className="flex items-center py-2">
                        <Image src="/logo-large.png" alt="Trust Assurances"
                               width={150}
                               height={38}
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
            {/* Menu déroulant scrollable */}
            <div
                className={`fixed top-16 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'} max-h-[calc(100vh-4rem)] overflow-y-auto`}
            >
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col divide-y divide-gray-200">
                        {links.map((link) => (
                            <div key={link.label} className="py-3 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <Link href={link.href}
                                          className="text-gray-700 text-base font-medium flex-1 focus:outline-none">
                                        {link.label}
                                    </Link>
                                    {link.subLinks && (
                                        <button
                                            aria-label={`Ouvrir le sous-menu ${link.label}`}
                                            aria-expanded={openSubMenus.includes(link.label)}
                                            onClick={() => {
                                                setOpenSubMenus((prev) =>
                                                    prev.includes(link.label)
                                                        ? prev.filter(l => l !== link.label)
                                                        : [...prev, link.label]
                                                );
                                            }}
                                            className="ml-2 p-1 focus:outline-none"
                                        >
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-200 ${openSubMenus.includes(link.label) ? 'rotate-180' : ''}`}
                                                fill="none" stroke="#E94A2C" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                {/* Sous-menu mobile animé */}
                                {link.subLinks && (
                                    <div
                                        className={`mt-2 ml-4 flex flex-row overflow-hidden transition-all duration-300 ease-in-out ${openSubMenus.includes(link.label) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                                    >
                                        <div className="flex flex-col space-y-2 rounded p-2 w-full">
                                            {link.subLinks.map((sub) => (
                                                <Link key={sub.label} href={sub.href}
                                                      className="text-gray-600 text-sm py-1 px-2 rounded border-b mt-2 pb-2 hover:bg-orange-100 focus:bg-orange-200 focus:outline-none">
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <Link href="/espace-client"
                          className="text-orange-600 hover:text-orange-800 justify-center items-center flex py-4 w-full text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                             stroke="currentColor" className="w-6 h-6 mr-2">
                            <circle cx="12" cy="7" r="5" stroke="currentVolor" strokeWidth="2.5"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                                  d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"/>
                        </svg>
                        Espace client
                    </Link>
                </div>
            </div>
        </div>
    );
}

function AnimatedLink({href, children, className = "", subLinks, position = 0}: {
    href: string;
    children: React.ReactNode;
    className?: string;
    subLinks?: { label: string; href: string }[];
    position?: number;
}) {
    return (
        <div className={`group relative flex flex-col items-center ${className}`}>
            <Link href={href} className="text-gray-600 hover:text-orange-600 flex flex-col items-center pb-2">
                <div className="flex flex-row items-center">
                    {children}
                    {subLinks && subLinks.length > 0 && (
                        <svg className="w-4 h-4 ml-1 mt-1" fill="none" stroke="#E94A2C" strokeWidth="2"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                        </svg>)}
                </div>
                <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"/>

            </Link>
            {subLinks && subLinks.length > 0 && (

                <div
                    style={{left: `calc(-7.8rem * ${position} + 15rem)`}}
                    className="absolute top-full -translate-x-1/2 mt-0 min-w-140 bg-white border-1 border-t-0 rounded-b-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50"
                >

                    <div className="grid grid-cols-2 gap-6 py-2 px-4 min-w-[280px]">
                        {subLinks.map((sub, idx) => (

                            <div key={idx}>
                                <Link href={sub.href}
                                      className="block px-4 py-2  hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap">
                                    {sub.label}
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

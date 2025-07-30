"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <nav
            className="fixed top-6 left-1/2 max-w-[97%] w-full h-24 -translate-x-1/2 z-50 bg-white rounded-[10] shadow-lg px-4 py-3 flex flex-row items-center justify-between gap-5 backdrop-blur-md border border-gray-200">
            <div className="flex items-center min-w-[90px] gap-1 order-1 ml-0">
                <Link href="/">
                    <Image src="/logo-small.png" alt="Logo Trust" width={90} height={90}/>
                </Link>
            </div>

            <button
                className="lg:hidden flex items-center justify-center w-12 h-12 order-2 mr-2 relative"
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                onClick={() => setMenuOpen((v) => !v)}
            >
                <span className="sr-only">Menu</span>
                <span
                    className={`absolute left-0 right-0 top-1/2 w-8 h-1 bg-[#222] rounded transition-all duration-300 origin-center
                        ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2.5'}`}
                ></span>
                <span
                    className={`absolute left-0 right-0 top-1/2 w-8 h-1 bg-[#222] rounded transition-all duration-300 origin-center
                        ${menuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                    className={`absolute left-0 right-0 top-1/2 w-8 h-1 bg-[#222] rounded transition-all duration-300 origin-center
                        ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2.5'}`}
                ></span>
            </button>

            <div className="hidden lg:flex items-center gap-5 order-3 w-full justify-center">
                <BoutonDefilant href="a-propos" text="À propos de nous" items={[
                    {label: "Mot du Directeur Général", href: "/mot-directeur"},
                    {label: "Qui sommes nous", href: "/qui-sommes-nous"},
                    {label: "Notre staff", href: "/staff"},
                    {label: "Rapport annuel", href: "/rapport-annuel"},
                ]}/>
                <span className="h-6 w-px bg-gray-500"></span>
                <BoutonDefilant href="produits" text="Nos Produits" items={[
                    {
                        label: "Assurance Particuliers", href: "/assu-particuliers", subItems: [
                            {label: "Assurance Auto", href: "/assu-particuliers/auto"},
                            {label: "Assurance Trust bon conducteur", href: "/assu-particuliers/trust-bon-conducteur"},
                            {label: "Assurance multirisques habitation", href: "/assu-particuliers/habitation"},
                            {
                                label: "Assurance catastrophes naturelles",
                                href: "/assu-particuliers/catastrophes-naturelles"
                            },
                            {label: "Assistance voyage", href: "/assu-particuliers/assistance-voyage"},
                            {label: "Assurance bâteau de plaisance", href: "/assu-particuliers/bateau-plaisance"},
                        ]
                    },
                    {
                        label: "Assurance Professionels", href: "/assu-professionels", subItems: [
                            {label: "Assurance Véhicule Professionnel", href: "/assu-professionels/vehicule"},
                            {
                                label: "Assurance Responsabilité Civile Professionnelle",
                                href: "/assu-professionels/responsabilite-civile-pro"
                            },
                            {
                                label: "Assurance Multirisques Professionnelle",
                                href: "/assu-professionels/multirisques-pro"
                            }
                        ]
                    },
                    {
                        label: "Assurance Entreprises", href: "/assu-entreprises", subItems: [
                            {label: "Assurance RC", href: "/assu-entreprises/rc"},
                            {label: "Assurance Engineering", href: "/assu-entreprises/engineering"},
                            {
                                label: "Assurance des marchandises transportées",
                                href: "/assu-entreprises/marchandises-transport"
                            },
                            {label: "Assurance Patrimoine", href: "/assu-entreprises/patrimoine"},
                            {label: "Assurance risques spéciaux", href: "/assu-entreprises/risques-speciaux"},
                            {
                                label: "Prévoyance collective des collaborateurs",
                                href: "/assu-entreprises/prevoyance-collective"
                            },
                        ]
                    },
                    {label: "Simulation", href: "/simulation"},
                ]}/>
                <span className="h-6 w-px bg-gray-500 "></span>
                <BoutonDefilant text="Trouver une agence" href="/trouver-agence" items={[
                    {label: "Devenir AGA", href: "/devenir-aga"}
                ]}/>
                <span className="h-6 w-px bg-gray-500 "></span>
                <a href="#" className="font-semibold text-lg text-gray-600 hover:text-[#E94A2C] transition">Contact</a>
                <span className="h-6 w-px bg-gray-500 "></span>
                <BoutonDefilant href="plus" text="Plus" items={[
                    {label: "Actualités", href: "/news"},
                    {label: "Recrutement", href: "/recrutement"},
                    {label: "Ils nous font confiance", href: "/clients"},
                ]}/>
            </div>

            {menuOpen && (
                <>
                    <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)}></div>
                    <div
                        className="absolute top-25 left-0 w-full rounded-2xl bg-white shadow-lg p-6 flex flex-col gap-3 animate-slide-down z-50 overflow-y-auto max-h-[75vh]">
                        <a href="/espace-client"
                           className="flex px-6 py-1 rounded-md bg-[#E94A2C] text-white font-semibold text-lg shadow hover:bg-[#831B18] transition justify-center items-center gap-3 order-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                 stroke="currentColor" className="w-6 h-6">
                                <circle cx="12" cy="7" r="5" stroke="currentVolor" strokeWidth="2.5"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                                      d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"/>
                            </svg>
                            Espace Client
                        </a>
                        <BoutonDefilantMobile text="À propos de nous" items={[{
                            label: "Mot du Directeur Général",
                            href: "/mot-directeur"
                        }, {label: "Qui sommes nous", href: "/qui-sommes-nous"}, {
                            label: "Notre staff",
                            href: "/staff"
                        }, {label: "Rapport annuel", href: "/rapport-annuel"},]}/>
                        <BoutonDefilantMobile text="Nos Produits" items={[{
                            label: "Assurance Particuliers",
                            href: "/assu-particuliers",
                            subItems: [{
                                label: "Assurance Auto",
                                href: "/assu-particuliers/auto"
                            }, {
                                label: "Assurance Trust bon conducteur",
                                href: "/assu-particuliers/trust-bon-conducteur"
                            }, {
                                label: "Assurance multirisques habitation",
                                href: "/assu-particuliers/habitation"
                            }, {
                                label: "Assurance catastrophes naturelles",
                                href: "/assu-particuliers/catastrophes-naturelles"
                            }, {
                                label: "Assistance voyage",
                                href: "/assu-particuliers/assistance-voyage"
                            }, {label: "Assurance bâteau de plaisance", href: "/assu-particuliers/bateau-plaisance"},]
                        }, {
                            label: "Assurance Professionels",
                            href: "/assu-professionels",
                            subItems: [{
                                label: "Assurance Véhicule Professionnel",
                                href: "/assu-professionels/vehicule"
                            }, {
                                label: "Assurance Responsabilité Civile Professionnelle",
                                href: "/assu-professionels/responsabilite-civile-pro"
                            }, {
                                label: "Assurance Multirisques Professionnelle",
                                href: "/assu-professionels/multirisques-pro"
                            },]
                        }, {
                            label: "Assurance Entreprises",
                            href: "/assu-entreprises",
                            subItems: [{
                                label: "Assurance RC",
                                href: "/assu-entreprises/rc"
                            }, {
                                label: "Assurance Engineering",
                                href: "/assu-entreprises/engineering"
                            }, {
                                label: "Assurance des marchandises transportées",
                                href: "/assu-entreprises/marchandises-transport"
                            }, {
                                label: "Assurance Patrimoine",
                                href: "/assu-entreprises/patrimoine"
                            }, {
                                label: "Assurance risques spéciaux",
                                href: "/assu-entreprises/risques-speciaux"
                            }, {
                                label: "Prévoyance collective des collaborateurs",
                                href: "/assu-entreprises/prevoyance-collective"
                            },]
                        }, {label: "Simulation", href: "/simulation"},]}/>
                        <BoutonDefilantMobile text="Trouver une agence"
                                              items={[{label: "Devenir AGA", href: "/devenir-aga"}]}/>
                        <BoutonDefilantMobile text="Plus" items={[{label: "Actualités", href: "/news"}, {
                            label: "Recrutement",
                            href: "/recrutement"
                        }, {label: "Ils nous font confiance", href: "/clients"},]}/>
                        <BoutonDefilantMobile text="Contact" items={[]}/>
                    </div>
                </>
            )}
            <a href="/espace-client"
               className="hidden lg:flex w-64 ml-4 px-6 py-1 rounded-md bg-[#E94A2C] text-white font-semibold text-lg shadow hover:bg-[#831B18] transition items-center gap-3 order-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                     stroke="currentColor" className="w-6 h-6">
                    <circle cx="12" cy="7" r="5" stroke="currentVolor" strokeWidth="2.5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                          d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"/>
                </svg>
                Espace Client
            </a>
        </nav>
    );
}

interface BoutonDefilantSubItem {
    label: string;
    href: string;
}

interface BoutonDefilantItem {
    label: string;
    href: string;
    subItems?: BoutonDefilantSubItem[];
}

function BoutonDefilant({text, items, href}: { text: string; items: BoutonDefilantItem[]; href: string }) {
    return (
        <div className="relative group">
            <a href={href}
               className="font-semibold text-lg text-gray-600 hover:text-[#E94A2C] transition flex items-center gap-2 px-3 py-2 rounded-md focus:outline-none">
                {text}
                {items && items.length > 0 && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="#E94A2C" strokeWidth="5" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                )}
            </a>
            <div
                className="absolute left-0 top-8 min-w-[200px] bg-white rounded-b-xl shadow-xl border border-white mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto flex flex-col py-2 px-2 gap-1">
                {items && items.length > 0 && items.map((item, idx) => (
                    <div key={idx} className="relative group/item">
                        <a href={item.href}
                           className="flex px-4 py-3 text-gray-800 hover:text-[#E94A2C]  font-medium rounded-lg hover:bg-orange-100 transition justify-between items-center">
                            {item.label}
                            {item.subItems && item.subItems.length > 0 && (
                                <svg className="w-3 h-3 ml-2" fill="none" stroke="#E94A2C" strokeWidth="3"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6"/>
                                </svg>
                            )}
                        </a>
                        {item.subItems && item.subItems.length > 0 && (
                            <>
                                <div
                                    className="absolute left-full top-0 w-4 h-full pointer-events-none group-hover/item:pointer-events-auto"></div>
                                <div
                                    className="absolute left-full top-0 min-w-max bg-white rounded-xl shadow-xl border border-white ml-3 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 translate-x-2 transition-all duration-200 z-50 pointer-events-none group-hover/item:pointer-events-auto hover:opacity-100 hover:translate-x-0 hover:pointer-events-auto flex flex-col py-2 px-2 gap-1">
                                    {item.subItems.map((subItem, subIdx) => (
                                        <a key={subIdx} href={subItem.href}
                                           className="block px-4 py-2 hover:text-[#E94A2C] text-gray-800 font-medium rounded-lg hover:bg-orange-100 transition">
                                            {subItem.label}
                                        </a>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function BoutonDefilantMobile({text, items}: { text: string; items: BoutonDefilantItem[] }) {
    const [open, setOpen] = useState(false);
    const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);
    return (
        <div className="w-full">
            <button
                className="w-full flex justify-between items-center px-4 py-3 font-semibold text-lg text-gray-700 hover:text-[#E94A2C] focus:outline-none"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                type="button"
            >
                <span>{text}</span>
                {items && items.length > 0 && (
                    <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none"
                         stroke="#E94A2C" strokeWidth="5" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                )}
            </button>
            {open && (
                <div className="pl-2 border-l border-orange-100 flex flex-col gap-1 bg-white">
                    {items && items.length > 0 && items.map((item, idx) => (
                        <div key={idx} className="relative">
                            {item.subItems && item.subItems.length > 0 ? (
                                <div className="flex items-center w-full">
                                    <a
                                        href={item.href}
                                        className="flex-1 block text-left px-4 py-2 text-gray-800 font-medium rounded-lg hover:text-[#E94A2C] hover:bg-orange-100 transition"
                                    >
                                        {item.label}
                                    </a>
                                    <button
                                        className="flex items-center px-2 py-2 focus:outline-none"
                                        onClick={() => setOpenSubIndex(openSubIndex === idx ? null : idx)}
                                        aria-expanded={openSubIndex === idx}
                                        type="button"
                                    >
                                        <svg
                                            className={`w-3 h-3 ml-1 transition-transform ${openSubIndex === idx ? 'rotate-90' : ''}`}
                                            fill="none" stroke="#E94A2C" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6"/>
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <a
                                    href={item.href}
                                    className="block w-full text-left px-4 py-2 text-gray-800 font-medium rounded-lg hover:text-[#E94A2C] hover:bg-orange-100 transition"
                                >
                                    {item.label}
                                </a>
                            )}
                            {item.subItems && item.subItems.length > 0 && openSubIndex === idx && (
                                <div className="pl-4 flex flex-col gap-1">
                                    {item.subItems.map((subItem, subIdx) => (
                                        <div key={subIdx} className="flex items-center w-full">
                                            <a
                                                href={subItem.href}
                                                className="flex-1 block text-left px-4 py-3 text-gray-800 font-semibold rounded-lg hover:text-[#E94A2C] hover:bg-orange-100 transition text-base md:text-lg"
                                            >
                                                {subItem.label}
                                            </a>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

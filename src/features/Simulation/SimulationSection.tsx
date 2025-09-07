"use client";

import {useRef, useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export default function SimulationSection() {
    const [currentType, setCurrentType] = useState<"auto" | "immobilier">("auto");
    const [showResult, setShowResult] = useState(false);

    const resultRef = useRef<HTMLDivElement>(null);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
        if (showResult && shouldScroll && resultRef.current) {
            resultRef.current.scrollIntoView({behavior: "smooth", block: "center"});
            setShouldScroll(false);
        }
    }, [showResult, shouldScroll]);

    return (
        <section
            className="md:w-[96vw] max-w-full mx-auto relative overflow-hidden md:bg-gray-100/60 rounded-xl md:border-1 border-gray-100 px-3 md:px-6 pt-5 md:py-8 mb-4 md:mb-0 mt-6">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">

                {/* Titre et description */}
                <div className="md:w-5/12 flex flex-col md:mt-7 md:ml-7 gap-3 ml-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600">Simulateur</h2>
                    <p className="text-gray-600">Choisissez un type et remplissez les informations pour démarrer votre
                        simulation.</p>
                    <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                        <li>Le devis affiché est à titre indicatif uniquement</li>
                        <li>Contactez nous plus d&#39;informations</li>
                    </ul>
                </div>

                {/* Formulaire et résultat */}
                <div className="md:w-7/12 grid grid-cols-1 gap-4 content-start">
                    {/* Div formulaire */}
                    <div className="bg-white/90 rounded-lg border border-gray-100 shadow-xs p-4 md:p-5">
                        {/* Type */}
                        <div className="mb-4">
                            <span className="block text-sm font-semibold text-gray-700 mb-2">Type de simulation</span>
                            <div className="grid grid-cols-2 gap-2">
                                {(["auto", "immobilier"] as const).map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => setCurrentType(type)}
                                        className={cn(
                                            "h-10 rounded-md border text-sm capitalize font-semibold cursor-pointer",
                                            currentType === type
                                                ? "bg-orange-600 text-white border-orange-600"
                                                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                                        )}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Champs d'entrée du formulaire */}
                        {currentType === "auto" ? <AutoFields/> : <ImmoFields/>}

                        {/* Boutons continuer et réinitialiser */}
                        <div className="mt-5 flex gap-2">
                            <Button type="button" className="cursor-pointer"
                                    onClick={() => {
                                        setShowResult(true);
                                        setShouldScroll(true);
                                    }}>
                                Continuer
                            </Button>
                            <Button type="button" className="cursor-pointer" variant="outline"
                                    onClick={() => setShowResult(false)}>Réinitialiser</Button>
                        </div>
                    </div>
                </div>

            </div>
            {/* Formulaire résultats */}
            <div ref={resultRef} className="items-center flex flex-col md:mt-8">
                {showResult && (
                    <ResultCard type={currentType}/>
                )}
            </div>
        </section>
    );
}


function ResultCard({type}: { type: "auto" | "immobilier" }) {
    const isAuto = type === "auto";
    return (
        <div className="bg-white/90 rounded-lg md:w-8/12 border border-gray-100 shadow-xs mt-4 flex flex-col gap-3">
            {/* Bordereau orange */}
            <div className="bg-orange-600 text-white rounded-t-lg p-3 flex justify-between items-center">
                <h2 className="text-lg font-bold">Votre estimation</h2>
                <span className="text-xs bg-orange-500 px-2 py-1 rounded">Sans engagement</span>
            </div>

            {/* Contenu principal */}
            <div className="p-4 flex flex-col md:flex-row gap-6">
                {/* Première colonne */}
                <div className="flex-1 flex flex-col gap-6 ">
                    <div className="p-1 md:w-[17vw] ">
                        <p className="text-orange-600 font-semibold text-sm uppercase mb-1">Prime estimée</p>
                        <p className="text-3xl font-extrabold text-orange-700/90">
                            38,000 DA <span className="text-lg font-normal">/ an</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm uppercase">Franchise indicative</p>
                        <p className="text-lg font-semibold">10%</p>
                    </div>
                    <p className="text-xs text-gray-500">Estimation à affiner avec un conseiller.</p>
                </div>

                {/* Colonne vos informations */}
                <div className="flex flex-col border-l pl-4">
                    <p className="mb-4 font-semibold">Vos informations</p>
                    <div className="grid grid-rows-1 gap-y-3 text-sm ">
                        {isAuto ? (
                            <>
                                <span className="text-gray-500">Produit</span>
                                <span className="text-gray-800 text-right">Auto</span>
                                <span className="text-gray-500">Valeur véhicule</span>
                                <span className="text-right font-semibold text-orange-600">2,500,000 DA</span>
                                <span className="text-gray-500">Puissance</span>
                                <span className="text-gray-800 text-right">4 CV</span>
                            </>
                        ) : (
                            <>
                                <span className="text-gray-500">Produit</span>
                                <span className="text-gray-800 text-right">Immobilier</span>
                                <span className="text-gray-500">Prime estimée</span>
                                <span className="text-right font-semibold text-orange-600">18 900 DA / an</span>
                                <span className="text-gray-500">Franchise indicative</span>
                                <span className="text-gray-800 text-right">5%</span>
                                <span className="text-gray-500">Couvertures</span>
                                <span className="text-gray-800 text-right">Incendie, Dégâts des eaux, RC</span>
                            </>
                        )}

                        <div className="col-span-2 h-px bg-gray-200 my-1"/>
                        <span className="text-gray-500">Statut</span>
                        <span className="text-gray-700 text-right">Indicatif — sans engagement</span>
                    </div>
                </div>

                {/* Colonne détails */}
                <div className="flex flex-col border-l px-4">
                    <p className="mb-4 font-semibold">Détails</p>
                    <div className="grid grid-rows-1 gap-y-3 text-sm ">
                        {isAuto ? (
                            <>
                                <span className="text-gray-500">Produit</span>
                                <span className="text-gray-800 text-right">Auto</span>
                                <span className="text-gray-500">Valeur véhicule</span>
                                <span className="text-right font-semibold text-orange-600">2,250,000 DA / an</span>
                                <span className="text-gray-500">Franchise indicative</span>
                                <span className="text-gray-800 text-right">10%</span>
                                <span className="text-gray-500">Options</span>
                                <span className="text-gray-800 text-right">Bris de glace, Vol radio</span>
                            </>
                        ) : (
                            <>
                                <span className="text-gray-500">Produit</span>
                                <span className="text-gray-800 text-right">Immobilier</span>
                                <span className="text-gray-500">Prime estimée</span>
                                <span className="text-right font-semibold text-orange-600">18 900 DA / an</span>
                                <span className="text-gray-500">Franchise indicative</span>
                                <span className="text-gray-800 text-right">5%</span>
                                <span className="text-gray-500">Couvertures</span>
                                <span className="text-gray-800 text-right">Incendie, Dégâts des eaux, RC</span>
                            </>
                        )}

                        <div className="col-span-2 h-px bg-gray-200 my-1"/>
                        <span className="text-gray-500">Statut</span>
                        <span className="text-gray-700 text-right">Indicatif — sans engagement</span>
                    </div>
                </div>
            </div>
            <div className="mt-2 flex gap-2 p-4 justify-center">
                <Button className="cursor-pointer" variant="default">Être contacté</Button>
                <Button className="cursor-pointer" variant="outline"
                        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Revenir en haut</Button>
            </div>
        </div>
    );
}


function InputField({label, children}: { label: string; children: React.ReactNode }) {
    return (
        <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-700">{label}</span>
            {children}
        </label>
    );
}

function AutoFields() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InputField label="Valeur du véhicule (DA)">
                <input type="number" min={0} step={10000}
                       className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200"
                       placeholder="Ex: 2 500 000"/>
            </InputField>

            <InputField label="Puissance du véhicule (CV)">
                <input type="number" min={1} max={1000}
                       className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200"
                       placeholder="Ex: 8"/>
            </InputField>

            <InputField label="Valeur de la radio (DA)">
                <input type="number" min={0} step={1000}
                       className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200"
                       placeholder="Ex: 50 000"/>
            </InputField>
        </div>
    );
}

function ImmoFields() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InputField label="Catégorie du bien">
                <select className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200">
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Villa</option>
                    <option>Bureau</option>
                    <option>Commerce</option>
                </select>
            </InputField>

            <InputField label="Usage du bien">
                <select className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200">
                    <option>Résidentiel</option>
                    <option>Commercial</option>
                    <option>Mixte</option>
                </select>
            </InputField>

            <InputField label="Valeur du bien (DA)">
                <input type="number" min={0} step={100000}
                       className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200"
                       placeholder="Ex: 15 000 000"/>
            </InputField>

            <InputField label="Nombre de pièces">
                <select className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                </select>
            </InputField>

            <InputField label="Wilaya">
                <select className="h-10 rounded-md border px-3 outline-none bg-white border-gray-200">
                    <option>Alger</option>
                    <option>Oran</option>
                    <option>Constantine</option>
                    <option>Annaba</option>
                    <option>Blida</option>
                </select>
            </InputField>
        </div>
    );
}


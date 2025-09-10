import Image from "next/image";
import Link from "next/link";


function Lien_animation ({titre}:{titre:string}) {
    return(
        <div className="group">
            <Link href={""} className="group-hover:text-orange-600 ">{titre} </Link>
            <div className="h-0.5 bg-orange-600 opacity-0 group-hover:opacity-100 transition-all "></div>
        </div>
    );
}

export default function Navbar() {
    return (
        <>
            <section className="flex flex-row items-center justify-center gap-60  font-medium my-2 text-stone-500 ">
                    <Image src="/image/LOGO HORIZONTAL.jpg" alt={"logo"} width={170} height={170}/>
                <div className="flex flex-row gap-4">
                    <Lien_animation titre="Particuliers"></Lien_animation>
                    <Lien_animation titre="Professionnels"></Lien_animation>
                    <Lien_animation titre="Entreprises"></Lien_animation>
                    <Lien_animation titre="Simulation"></Lien_animation>
                    <Lien_animation titre="Trouver une agence"></Lien_animation>
                </div>
                <Lien_animation titre="Espace client" />
            </section>
        </>
    )
}
import Navbar from "@/features/Acceuil/Navbar";
import Actuality from "@/features/actualites/Actuality";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="mt-32 w-full flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-full max-w-4xl bg-gray-100 rounded-2xl shadow-inner p-12 flex flex-col items-center">
                   <Actuality/>
                </div>
            </main>
        </>
    );
}

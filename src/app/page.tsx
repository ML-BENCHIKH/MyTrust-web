import Navbar from "@/features/Acceuil/Navbar";
import HomeServices from "@/features/Acceuil/HomeServices";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="w-full flex flex-col items-center gap-20 justify-center min-h-[60vh]">
                <HomeServices/>
                <div className="w-full max-w-4xl bg-gray-100 rounded-2xl shadow-inner p-12 flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800"></h1>
                </div>
                <div className="w-full max-w-4xl bg-gray-100 rounded-2xl shadow-inner p-12 flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800"></h1>
                </div>
            </main>
        </>
    );
}

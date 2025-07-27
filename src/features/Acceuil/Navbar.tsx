import Image from "next/image";

export default function Navbar() {
    return (
        <nav
            className="fixed top-6 left-1/2 max-w-[97%] w-full h-24 -translate-x-1/2 z-50 bg-white rounded-[10] shadow-lg px-8 py-3 flex items-center justify-center gap-5 backdrop-blur-md border border-gray-200">
            <div className="mr-6 flex-shrink-0 flex items-center min-w-[90px] gap-0">
                <Image src="/logo-small.png" alt="Logo Trust" width={90} height={90}/>
            </div>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-[#E94A2C] transition">À propos de
                nous</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-[#E94A2C] transition">Nos Produits</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-[#E94A2C] transition">Trouvez une
                agence</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-[#E94A2C] transition">Contact</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-[#E94A2C] transition">Plus</a>
            <button
                className="ml-4 px-6 py-1 rounded-md bg-[#E94A2C] text-white font-semibold text-xl shadow hover:bg-[#831B18] transition flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                     stroke="currentColor" className="w-6 h-6">
                    <circle cx="12" cy="7" r="5" stroke="currentVolor" strokeWidth="2.5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                          d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"/>
                </svg>
                Espace Client
            </button>
        </nav>
    );
}
export default function Navbar() {
    return (
        <nav
            className="fixed top-6 left-1/2 w-11/12 h-1/7 -translate-x-1/2 z-50 bg-white/90 rounded-2xl shadow-lg px-8 py-3 flex items-center justify-center gap-8 backdrop-blur-md border border-gray-200">
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-blue-600 transition">À propos de
                nous</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-blue-600 transition">Nos Produits</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-blue-600 transition">Trouvez une
                agence</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-blue-600 transition">Contact</a>
            <span className="h-6 w-px bg-gray-500 mx-2"></span>
            <a href="#" className="font-semibold text-xl text-gray-800 hover:text-blue-600 transition">Plus</a>
            <button
                className="ml-4 px-6 py-1 rounded-md bg-orange-500 text-white font-bold text-xl shadow hover:bg-orange-600 transition">Espace Client
            </button>
        </nav>
    );
}
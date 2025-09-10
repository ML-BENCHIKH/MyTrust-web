export default function HelpButton({pro = false}: { pro?: boolean }) {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a href="/contact"
               className={`flex items-center gap-2 bg-gradient-to-r ${pro? "from-red-600 to-red-400" : "from-orange-600 to-orange-500"} hover:scale-[115%] hover:shadow-xl transition-all text-white font-bold px-6 py-2 rounded-full shadow-md text-md `}>
                Besoin d&#39;aide ?
            </a>
        </div>
    );
}
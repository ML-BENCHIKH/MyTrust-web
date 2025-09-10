export default function ScrollIndictaor({pro = false}: { pro?: boolean }) {
    return (
        <div
            className={`hidden md:block absolute bottom-6 animate-bounce ${pro ? "text-red-600" : "text-orange-600"}`}>
            <span className="text-xl">▼</span>
        </div>
    );
}
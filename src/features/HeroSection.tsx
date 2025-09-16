import Image from "next/image";
import ScrollIndictaor from "@/features/ScrollIndicator";

export default function HeroSection({pro = false, titre, description_top, description_bot, image,}:
                                    {
                                        pro?: boolean;
                                        titre: string;
                                        description_top: string;
                                        description_bot: string;
                                        image: string;
                                    }) {
    return (
        <section
            className={`relative w-full h-[calc(100vh-7rem)] flex flex-col items-center justify-center md:py-24 overflow-hidden bg-gradient-to-br from-white via-white ${
                pro ? "to-red-200/60" : "to-orange-200/60"
            }`}
        >
            <div
                className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-16 px-6 w-full max-w-7xl">
                {/* Image */}
                <div className="flex items-center mt-4 md:mt-0 justify-center w-full md:w-1/2">
                    <Image
                        src={image}
                        alt={titre}
                        width={600}
                        height={600}
                        className="rounded-xl object-contain w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
                    />
                </div>

                {/* Texte et catch phrase */}
                <div
                    className="flex flex-col items-center md:items-start text-center md:text-left gap-y-4 px-2 md:px-4 w-full md:w-1/2">
                    <h1
                        className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${
                            pro ? "text-red-600" : "text-orange-600"
                        } mb-4`}
                    >
                        {titre}
                    </h1>

                    <p className="text-gray-600/90 text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                        {description_top}
                        <br/>
                        {description_bot}
                    </p>
                </div>
            </div>
            <ScrollIndictaor pro={pro}/>
        </section>
    );
}

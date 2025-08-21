import Navbar from "@/features/Acceuil/Navbar";
import HomeServices from "@/features/Acceuil/HomeServices";
import ProductsCarousel from "@/features/Acceuil/ProductsCarousel";
import AboutUsSection from '@/features/Acceuil/AboutUsSection';

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="w-full flex flex-col items-center mb-8 gap-0 md:gap-8 justify-center min-h-[60vh]">
                <HomeServices/>
                <ProductsCarousel />
                <AboutUsSection />
            </main>
        </>
    );
}

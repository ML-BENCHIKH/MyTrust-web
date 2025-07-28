import Navbar from "@/features/Acceuil/Navbar";
import { ImageCarousel } from "@/features/Acceuil/ImageCarousel";
export default function Home() {
  return (
    <main className=" flex justify-center flex min-h-screen flex-col text-gray-900 pt-8">
      <div className="w-full md:w-[80%] mx-auto overflow-hidden">
        <Navbar />
        <div className="  px-6 md:px-10 pt-6 rounded-[10%]">
          <ImageCarousel />
        </div>
      </div>
    </main>
  );
}

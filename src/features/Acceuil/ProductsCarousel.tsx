"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";



const products = [
  {
    title: "Assurance Auto",
    description: "Protégez votre véhicule et vos proches avec nos formules adaptées.",
    image: "/image/particuliers.webp",
    tag: "Populaire",
  },
  {
    title: "Assurance Habitation",
    description: "Sécurisez votre maison ou appartement contre tous les risques.",
    image: "/image/entreprises.webp",
    tag: "Nouveau",
  },
  {
    title: "Assurance Santé",
    description: "Des garanties santé pour toute la famille, à prix compétitif.",
    image: "/image/professionels.webp",
    tag: "Recommandé",
  },
  {
    title: "Assurance Voyage",
    description: "Voyagez l’esprit tranquille avec nos couvertures internationales.",
    image: "/image/entreprises.webp",
    tag: "Sérénité",
  },
];

export default function ProductsCarousel() {
    const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  return (
    <div className="flex flex-row w-[94vw] md:w-[96vw] mx-auto relative justify-center bg-gray-100/60 rounded-xl border border-gray-100 mb-3 md:mb-0">
      {/* Text Block */}
      <div className="hidden md:flex mb-8 ml-4 flex-col items-center justify-center gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 text-center">
          Nos produits & Services
        </h2>
        <p className="text-gray-600 text-[1rem] md:text-xl text-center">
          Découvrez une sélection de nos produits phares, nouveautés et offres incontournables.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full md:w-full md:max-w-4xl m-4 mb-6 md:m-8">
        {/* Mobile Header */}
        <div className="md:hidden mb-8 mt-2 flex flex-col items-center justify-center gap-2">
          <h2 className="text-2xl font-extrabold text-orange-600 text-center">
            Nos produits & Services
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Découvrez une sélection de nos produits phares, nouveautés et offres incontournables.
          </p>
        </div>

        <Carousel className="w-full"  plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
>
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <div className="relative bg-white rounded-3xl shadow-xs border-orange-600/20 border-2 hover:shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[340px] md:min-h-[320px] transition-all duration-500 group">
                  {/* Image */}
                  <article className="md:w-1/2 w-full h-56 md:h-auto relative flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                      priority
                    />
                   <Badge variant="default" className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {product.tag}
                    </Badge>
                  </article>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center md:ml-4 p-6 md:pr-20">
                    <h3 className="text-xl md:text-3xl font-bold text-gray-800 text-center md:text-left line-clamp-2 min-h-[2.7em]">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 md:text-lg line-clamp-3 mb-4 min-h-[4.5em]">
                      {product.description}
                    </p>
                    <Link
                      href="#"
                      className="md:self-start self-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl shadow transition-all duration-200"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 bg-white/90 hover:bg-orange-100 text-orange-600 rounded-full shadow-lg" />
          <CarouselNext className="right-2 bg-white/90 hover:bg-orange-100 text-orange-600 rounded-full shadow-lg" />
        </Carousel>
      </div>
    </div>
  );
}

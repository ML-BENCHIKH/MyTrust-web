"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ImageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const images = [
    {
      src: "/tractor-agricultural-machine-cultivating-field.jpg?height=650&width=800",
      alt: "ASSURANCES AGRICOLES",
      desc: "Une protection adaptée à vos besoins",
    },
    {
      src: "/tractor-agricultural-machine-cultivating-field.jpg?height=650&width=800",
      alt: "ASSURANCES AGRICOLES",
      desc: "Une protection adaptée à vos besoins",
    },
    {
      src: "/tractor-agricultural-machine-cultivating-field.jpg?height=650&width=800",
      alt: "ASSURANCES AGRICOLES",
      desc: "Une protection adaptée à vos besoins",
    },
    {
      src: "/tractor-agricultural-machine-cultivating-field.jpg?height=650&width=800",
      alt: "ASSURANCES AGRICOLES",
      desc: "Une protection adaptée à vos besoins",
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="h-[250px] md:h-[350px] lg:h-[600px] rounded-[30%] ">
        {images.map((image, index) => (
          <CarouselItem key={index} className="group relative overflow-hidden ">
            <Card className="h-full w-full rounded-none border-none ">
              <CardContent className="p-0 h-full w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105 "
                />
                {/* Transparent gradient orange filter on top of it with text directly on overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Semi-transparent orange box on the left half */}
                  <div className="h-full w-1/2 bg-[#E94A2C]/70 opacity-0 group-hover:opacity-100 rounded-r-[10%]"></div>

                  {/* Optional text inside the left half */}
                  <div className="absolute inset-0 flex items-center justify-start pl-8">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                      <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                        {image.alt}
                      </h3>
                      <p className="text-xl md:text-2xl font-medium text-black">
                        {image.desc}
                      </p>
                      <button className="mt-2 px-6 py-3 bg-gray-200 text-gray-800 font-semibold text-sm md:text-base rounded-md shadow-md hover:bg-gray-300 transition">
                        Consulter notre produit
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2 z-30" />
      <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2 z-30" />
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors duration-500 ${
              index === current - 1
                ? "bg-v0-orange"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}

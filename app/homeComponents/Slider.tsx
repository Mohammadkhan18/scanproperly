"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import image1 from "@/public/homeImages/slidrerImages/image 149.svg";
import image2 from "@/public/homeImages/slidrerImages/image 150.svg";
import image3 from "@/public/homeImages/slidrerImages/image 151.svg";
import image4 from "@/public/homeImages/slidrerImages/image 152.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Autoplay from "embla-carousel-autoplay";
const sliderData = [
  {
    img: image1,
    title: "Award Winning",
    description: "Award Winning Prop firm comparing website",
  },
  {
    img: image2,
    title: "Award Winning",
    description: "Award Winning Prop firm comparing website",
  },
  {
    img: image3,
    title: "Award Winning",
    description: "Award Winning Prop firm comparing website",
  },
  {
    img: image4,
    title: "Award Winning",
    description: "Award Winning Prop firm comparing website",
  },
];

export function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="container mx-auto px-14  py-[24px] ">
      <div className=" py-[40px] bg-white rounded-xl">
        {" "}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className=""
        >
          <CarouselContent>
            {sliderData.map(
              (
                data: {
                  img: string | StaticImport;
                  title: string;
                  description: string;
                },
                index: number
              ) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 ">
                  <div className=" p-1 text-black flex items-center gap-5 px-[16px]">
                    <Image
                      src={data.img}
                      alt="slider image"
                      height={90}
                      width={90}
                    />
                    <div>
                      <h4 className="font-[600] leading-[20px] text-[16px]">
                        {data.title}
                      </h4>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

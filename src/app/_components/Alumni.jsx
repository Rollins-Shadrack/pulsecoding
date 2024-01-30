'use client'
import Container from '@/components/Container'
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import data from "@/constants/data.json";

const Alumni = () => {
  const { header, desc, alumnus } = data.homepage.alumnus;
  return (
    <div className="py-14">
      <Container>
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="mx-auto w-full max-w-full space-y-8">
          <div className="lg:flex">
            <div className="w-full lg:w-5/12 grid grid-cols-1 mb-3">
              <div className="w-full">
                <h1 className="font-bold text-xl lg:text-3xl l leading-tight">{header} </h1>
                <p className="my-3  text-base">{desc}</p>
              </div>

              <div className="space-x-3">
                <CarouselPrevious className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 border-gray-400 bg-white" />
                <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 border-gray-400 bg-white" />
              </div>
            </div>

            <CarouselContent className="w-full">
              {alumnus.map((alumni, idx) => (
                <CarouselItem key={idx} className="rounded-2xl shadow-lg cursor-pointer pl-3 md:basis-1/2 md:pl-4 lg:basis-1/3">
                  <Image src={alumni.img} width={400} height={800} className="rounded-t-2xl w-full  h-64 object-cover" alt="pulsecoding.com" />
                  <div className="text-center pb-5 bg-gray-400 text-white">
                    <h1 className="text-lg lg:text-xl font-bold py-2 ">{alumni.name}</h1>
                    <p className="px-2 mx-auto">{alumni.title}</p>
                    <p className="w-fit mx-auto font-semibold border-b-2 border-b-white whitespace-nowrap">Read Story</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </Container>
    </div>
  );
}

export default Alumni
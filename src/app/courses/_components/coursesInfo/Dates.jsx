import Container from '@/components/Container'
import { Card, CardDescription } from '@/components/ui/card';
import { dates } from '@/constants/data/courses';
import Image from 'next/image';
import React from 'react'

const Dates = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="lg:w-2/5 w-full mx-auto text-center">
          <h1 className="lg:text-4xl text-2xl font-bold">{dates.header}</h1>
          <p className="lg:text-lg text-md my-2">{dates.text}</p>
        </div>
        <div className="lg:flex items-center lg:space-x-32 mt-5 ">
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {dates.cards.map((card, idx) => (
                <Card key={idx} className="first:border-brandPrimary py-4">
                  <div className="w-10/12 mx-auto">
                    <div className="flex mb-2 space-x-4">
                      <div className="">
                        <div className="h-8 w-8 rounded-lg flex items-center justify-center p-1 bg-brandPrimary text-white">{card.number}</div>
                      </div>

                      <p className="text-lg font-bold">{card.header}</p>
                    </div>
                    <CardDescription>{card.text}</CardDescription>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 w-full mx-auto mt-5">
            <Image
              src={dates.img}
              width={800}
              height={800}
              alt="pulsecoding"
              className="rounded-l-[140px] rounded-br-[140px] lg:w-full md:w-[500px] sm:w-[280px] mx-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dates
import Container from '@/components/Container'
import { Card } from '@/components/ui/card';
import { careers } from '@/constants/data/careerservices';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const CareerServices = () => {
  return (
    <div className="py-10">
      <Container>
        <h1 className="font-bold text-3xl lg:text-5xl leading-tight mb-14  text-center">{careers.title}</h1>

        <div className="my-5">
          {careers.items.map((item, idx) => (
            <div key={idx} className={`lg:flex ${idx % 2 === 1 ? " flex-row-reverse" : ""}`}>
              <div className="lg:w-1/2 w-full flex items-center justify-center">
                <Image src={item.img} width={480} height={400} alt="pulsecoding.com" className="rounded-lg" />
              </div>
              <div className="lg:w-1/2 w-full">
                {item.cards.map((card, index) => (
                  <div key={index} className="my-10 w-2/3 mx-auto">
                    <div className="inline-flex text-base">
                      <Check strokeWidth={3} className="text-red-700 mr-2" />
                      <span className="font-medium">{card.title}</span>
                    </div>
                    <p className="">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CareerServices
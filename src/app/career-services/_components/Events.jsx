'use client'
import Container from '@/components/Container'
import { events } from '@/constants/data/careerservices';
import Image from 'next/image';
import React from 'react'

const Events = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="lg:w-3/5 mx-auto w-full text-center">
          <h1 className="lg:text-4xl lg:w-4/5 mx-auto text-3xl font-bold tracking-wide">{events.title}</h1>
          <p className="my-4 leading-6 text-lg text-justify px-4">{events.desc}</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">
          {events.images.map((image, idx) => (
            <Image src={image} width={400} height={600} alt="pulsecoding.com" className="h-80 object-cover rounded-lg" />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Events
'use client'
import Container from '@/components/Container'
import { events } from '@/constants/data/careerservices';
import Image from 'next/image';
import React from 'react'

const Events = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="lg:w-4/5 mx-auto w-full text-center mb-14">
          <h1 className="mx-auto text-3xl lg:text-5xl font-bold tracking-wide">{events.title}</h1>
          <p className="my-4 lg:w-11/12 mx-auto  leading-6 text-lg text-center px-4">{events.desc}</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {events.images.map((image, idx) => (
            <Image key={idx} src={image} width={400} height={600} alt="pulsecoding.com" className="h-80 object-cover rounded-lg" />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Events
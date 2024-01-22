import Container from '@/components/Container'
import { alumnus } from '@/constants/data/homepage';
import Image from 'next/image';
import React from 'react'

const Alumni = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="lg:flex space-x-5 py-5">
          <div className="w-full lg:w-1/4">
            <h1 className="font-bold text-xl lg:text-3xl l leading-tight">Alumni </h1>
            <p className="my-3  text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti odio beatae consequuntur omnis fugiat.
            </p>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-3 gap-3 ">
            {alumnus.map((alumni, idx) => (
              <div key={idx} className=" rounded-2xl shadow-lg hover:scale-105 ">
                <Image src={alumni.img} width={600} height={400} className="rounded-t-2xl w-full h-56 object-fill " alt="pulsecoding.com" />
                <div className="text-center pb-5">
                  <h1 className="text-lg lg:text-xl font-bold my-2">{alumni.name}</h1>
                  <p className="px-2 mx-auto">{alumni.title}</p>

                  <p className="  w-fit mx-auto font-semibold border-b-2 border-b-brandPrimary   whitespace-nowrap">Read Story</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Alumni
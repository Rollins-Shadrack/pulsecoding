import Container from '@/components/Container';
import Image from 'next/image';
import React from 'react'
import data from "@/constants/data.json";
const Guide = () => {
  const {header, desc, guides} = data.homepage.Guide
    return (
      <div className="py-20  bg-gradient-to-r from-brandDark to-brandPrimary text-white">
        <Container>
          <div className="text-center w-3/5 mx-auto">
            <h1 className="font-bold text-xl lg:text-3xl l leading-tight">{header} </h1>
            <p className="my-3  lg:text-xl leading-relaxed">
              {desc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
            {guides.map((guidee, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center ${
                  idx === 1 && "lg:dashed-border lg:border-l-2 lg:border-r-2 lg:border-white "
                }`}>
                <Image src={guidee.img} height={100} width={100} alt="pulsecoding.com" />
                <h1 className="font-bold text-lg my-3">{guidee.title}</h1>
                <p className="text-base w-4/5 text-center">{guidee.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
}

export default Guide
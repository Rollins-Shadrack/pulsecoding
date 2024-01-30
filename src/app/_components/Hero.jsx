import Button from '@/components/Button';
import React from 'react'
import {Play} from 'lucide-react'
import Image from 'next/image';
import Container from '@/components/Container'
import data from '@/constants/data.json'

const Hero = () => {
  const { header, desc, button1text, button2text, img } = data.homepage.heroSection;
  return (
    <div className=" mt-24 lg:mt-36">
      <Container>
        <div className="lg:flex mx-auto gap-14   ">
          <div className="lg:w-7/12 w-full mx-auto">
            <h1 className="font-semibold text-3xl lg:text-6xl leading-tight">{header}</h1>
            <p className="my-10 text-base">
              {desc}
            </p>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  lg:w-3/4 px-5">
              <Button text={button1text} className="bg-black text-white uppercase" />
              <div className="flex items-center border px-4 rounded-2xl whitespace-nowrap py-2">
                <Play className="h-7 w-7 mr-3 p-2 bg-[#44e0e9] rounded-full " /> {button2text}
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full  relative lg:mt-6 mx-auto mt-10  ">
            <div className="h-[50vw] w-[50vw] sm:h-96 sm:w-96 bg-brandPrimary relative rounded-t-[10%] rounded-br-[30%] rounded mx-auto">
              <Image src={img} height={200} width={345} className="absolute -top-8 -left-10 " alt="pulsecoding.com" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero
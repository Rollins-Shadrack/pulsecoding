import Button from '@/components/Button';
import React from 'react'
import {Play} from 'lucide-react'
import Image from 'next/image';
import Container from '@/components/Container';

const Hero = () => {
  return (
    <div className=" mt-24 lg:mt-36">
      <Container>
        <div className="lg:flex mx-auto gap-14   ">
          <div className="lg:w-7/12 w-full mx-auto">
            <h1 className="font-semibold text-3xl lg:text-6xl leading-tight">Unlocking Talent with Pulse Coding</h1>
            <p className="my-10 text-base">
              In the fast-paced and ever-evolving world of technology, finding skilled and knowledgeable professionals is crucial for the success of
              any business.
            </p>

            <div className="inline-flex justify-between  w-3/4 px-5">
              <Button text="Read More" className="bg-brandPrimary text-white uppercase" />
              <div className="flex items-center border px-4 rounded-2xl whitespace-nowrap">
                <Play className="h-7 w-7 mr-3 p-2 bg-[#44e0e9] rounded-full " /> Watch Video
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full  relative lg:mt-6 mx-auto mt-10  ">
            <div className="h-[50vw] w-[50vw] sm:h-96 sm:w-96 bg-brandPrimary relative rounded-t-[10%] rounded-br-[30%] rounded mx-auto">
              <Image src="/hero.png" height={200} width={345} className="absolute -top-8 -left-10 " alt="pulsecoding.com" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero
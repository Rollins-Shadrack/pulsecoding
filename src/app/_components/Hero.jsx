import Button from '@/components/Button';
import React from 'react'
import {Play} from 'lucide-react'
import Image from 'next/image';
import Container from '@/components/Container';

const Hero = () => {
  return (
    <div className=" mt-36">
      <Container>
        <div className="lg:flex mx-auto gap-10  ">
          <div className="lg:w-7/12 w-full ">
            <h1 className="font-semibold text-3xl lg:text-6xl leading-tight">Unlocking Talent with Pulse Coding</h1>
            <p className="my-10 text-base">
              In the fast-paced and ever-evolving world of technology, finding skilled and knowledgeable professionals is crucial for the success of
              any business.
            </p>

            <div className="inline-flex justify-between w-1/2  px-5">
              <Button text="Read More" className="bg-brandPrimary text-white uppercase" />
              <div className="flex items-center border px-4 rounded-2xl whitespace-nowrap">
                <Play className="h-7 w-7 mr-3 p-2 bg-[#44e0e9] rounded-full " /> Watch Video
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 w-full lg:mt-0 mt-5  mx-auto   ">
            {/* <div className=" w-full h-fit relative bg-brandPrimary rounded-t-[80px] rounded-br-[80px] rounded ">
              <Image src="/hero.png" height={200} width={270} className="absolute -top-10 -left-12 " alt="pulsecoding.com" />
            </div> */}

            <Image
              src="/hero.png"
              height={200}
              width={270}
              className="bg-brandPrimary rounded-t-[80px] rounded-br-[80px] rounded mx-auto pr-10"
              alt="pulsecoding.com"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero
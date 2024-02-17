import Container from '@/components/Container'
import Image from 'next/image';
import React from 'react'
import {ArrowRight, Check} from 'lucide-react'
import Button from '@/components/Button';
import data from "@/constants/data.json";
const Bootcamp = () => {
  const { bootcampSection } = data.coursespage;
  return (
    <div className="my-14 ">
      <Container>
        <div className="lg:flex lg:space-x-20 ">
          <div className=" lg:w-7/12 w-full mx-auto">
            <h1 className="text-lg font-semibold text-black">{bootcampSection.smallHeader}</h1>
            <h1 className="lg:text-6xl text-4xl  font-bold uppercase my-3 tracking-wider">{bootcampSection.heading}</h1>
            <p className="text-base">{bootcampSection.text}</p>
            <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {bootcampSection.addons.map((addon, idx) => (
                <div key={idx} className="inline-flex  text-sm ">
                  <Check strokeWidth={3} className="text-green-700 mr-2" />
                  <span className="font-semibold whitespace-nowrap">{addon}</span>
                </div>
              ))}
            </div>
            <p className="text-base">{bootcampSection.text2}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  lg:w-3/4 w-full my-5">
              <Button text="apply" className="bg-black text-white uppercase" />

              <div className="flex text-base  justify-center items-center border-2 border-black rounded-lg px-4 py-2 whitespace-nowrap">
                Request a Prospectus <ArrowRight className="w-6 h-6 ml-2 text-bold" />
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 w-full ">
            <div className=" flex flex-col  relative mx-auto ">
              <div className="h-32 w-32 rounded-2xl bg-[#FF5800] ">
                <h1 className="font-bold pt-5 pb-2 text-center text-white text-2xl">28</h1>
                <p className="text-center font-semibold text-white">
                  weeks <br /> part time
                </p>
              </div>
              <div className="w-64 h-48 p-2 rounded border translate-x-4  -rotate-6  bg-gray-200">
                <Image src="/bootcamp1.jpeg" alt="pulsecoding.com" width={600} height={500} className="object-fill h-48 w-96" />
              </div>

              <div className="h-64 w-64 p-2 border rounded absolute left-[18%] top-[30%] md:left-[20%] md:top-[15%] lg:left-[28%] lg:top-[10%] bg-gray-300 rotate-3">
                <Image src="/bootcamp2.jpeg" width={600} height={500} alt="pulsecoding.com" className="object-cover " />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bootcamp
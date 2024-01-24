import Container from '@/components/Container'
import { bootcamp } from '@/constants/data/courses';
import Image from 'next/image';
import React from 'react'
import {ArrowRight, Check} from 'lucide-react'
import Button from '@/components/Button';

const Bootcamp = () => {
  return (
    <div className="my-14 ">
      <Container>
        <div className="lg:flex space-x-20 ">
          <div className=" lg:w-7/12 w-full">
            <h1 className="text-lg font-semibold text-black">{bootcamp.smallHeader}</h1>
            <h1 className="text-6xl font-bold uppercase my-3 tracking-wider">{bootcamp.heading}</h1>
            <p className="text-base">{bootcamp.text}</p>
            <div className="my-5 grid grid-cols-4 gap-5">
              {bootcamp.addons.map((addon, idx) => (
                <div key={idx} className="inline-flex  text-sm ">
                  <Check strokeWidth={3} className="text-green-700 mr-2" />
                  <span className="font-semibold">{addon}</span>
                </div>
              ))}
            </div>
            <p className="text-base">{bootcamp.text2}</p>

            <div className="inline-flex justify-between lg:w-3/4 w-full my-5">
              <Button text="apply" className="bg-black text-white uppercase" />

              <div className="flex justify-center items-center border-2 border-black rounded-lg px-4 py-2">
                Request a Prospectus <ArrowRight className="w-6 h-6 ml-2 text-bold" />
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full flex flex-col  relative mx-auto">
            <div className="h-32 w-32 rounded-2xl bg-[#FF5800] ">
              <h1 className="font-bold pt-5 pb-2 text-center text-white text-2xl">28</h1>
              <p className="text-center font-semibold text-white">
                weeks <br /> part time
              </p>
            </div>
            <div className="w-64 h-48 p-2 rounded border translate-x-4  -rotate-6  bg-gray-200">
              <Image src="/bootcamp1.jpeg" width={600} height={500} className="object-fill h-48 w-96" />
            </div>

            <div className="h-64 w-64 p-2 border rounded absolute left-[28%] top-[10%] bg-gray-300 rotate-3">
              <Image src="/bootcamp2.jpeg" width={600} height={500} className="object-cover " />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bootcamp
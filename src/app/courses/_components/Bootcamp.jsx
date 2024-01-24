import Container from '@/components/Container'
import Image from 'next/image';
import React from 'react'

const Bootcamp = () => {
  return (
    <div className="my-14 ">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">Hello</div>
          <div className="overflow-y-hidden ">
            <div className="flex flex-col relative">
              <div className="h-32 w-32 rounded-2xl bg-[#FF5800] ">
                <h1 className="font-bold pt-5 pb-2 text-center text-white text-2xl">28</h1>
                <p className="text-center font-semibold text-white">
                  weeks <br /> part time
                </p>
              </div>
              <div className="w-64 h-48 p-2 rounded border translate-x-4  -rotate-6  bg-gray-200">
                <Image src="/bootcamp1.jpeg" width={600} height={500} className="object-fill h-48 w-96" />
              </div>

              <div className="h-64 w-64 p-2 border rounded absolute right-10 top-8 bg-gray-300 rotate-3">
                <Image src="/bootcamp2.jpeg" width={600} height={500} className="object-cover " />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bootcamp
import React from 'react'
import { ArrowRight, Check } from "lucide-react";
import { bootcamp } from '@/constants/data/homepage';
import Image from 'next/image';
import Container from '@/components/Container';

const Bootcamps = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="text-center">
          <h1 className="font-bold text-xl lg:text-3xl l leading-tight">Career-changing bootcamps in Web and Data </h1>
          <p className="my-3  lg:text-xl leading-relaxed">400-hour programs that have helped thousands of students launch new careers in tech</p>
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 my-4">
            <div className="inline-flex lg:text-xl  ">
              <Check strokeWidth={3} className="text-red-700 mr-2" />
              <span className="font-bold">400 hours</span>
            </div>

            <div className="inline-flex lg:text-xl  ">
              <Check strokeWidth={3} className="text-red-700 mr-2" />
              <span className="font-bold">Live Classes</span>
            </div>

            <div className="inline-flex lg:text-xl  ">
              <Check strokeWidth={3} className="text-red-700 mr-2" />
              <span className="font-bold">Flexible- 2 to 6 months</span>
            </div>

            <div className="inline-flex lg:text-xl  ">
              <Check strokeWidth={3} className="text-red-700 mr-2" />
              <span className="font-bold">On site or online</span>
            </div>
          </div>

          <div className="flex overflow-x-auto no-scrollbar py-5 space-x-2 lg:px-5">
            {bootcamp.courses.map((course, idx) => (
              <div key={idx} className="w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-2xl shadow-lg hover:scale-105 ">
                <Image src={course.img} width={400} height={200} className="rounded-t-2xl w-full " alt="pulsecoding.com" />
                <h1 className="text-lg lg:text-xl font-bold my-2">{course.title}</h1>
                <p className="px-2 mx-auto">{course.desc}</p>

                <div className="inline-flex items-center justify-center my-4 w-4/5 mx-auto border-2 border-brandPrimary p-2 rounded-2xl whitespace-nowrap">
                  {course.button} <ArrowRight className="w-6 h-6 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bootcamps
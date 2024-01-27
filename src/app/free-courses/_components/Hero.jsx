import Button from "@/components/Button";
import React from "react";
import { Check, Play } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import { freeCourse } from "@/constants/data/freecourse";

const Hero = () => {
  return (
    <div className=" mt-16 lg:mt-36">
      <Container>
        <div className="lg:flex mx-auto gap-14   ">
          <div className="lg:w-1/2 w-full mx-auto">
            <h1 className="font-semibold text-3xl lg:text-6xl leading-tight uppercase">{freeCourse.title}</h1>
            <p className="my-5 text-base">{freeCourse.desc}</p>

            <div className="my-5 grid grid-cols-3 gap-5">
              {freeCourse.addons.map((addon, idx) => (
                <div key={idx} className="inline-flex  text-sm ">
                  <Check strokeWidth={3} className="text-green-700 mr-2" />
                  <span className="font-semibold whitespace-nowrap">{addon}</span>
                </div>
              ))}
            </div>
            <p className="my-2 text-base">{freeCourse.text1}</p>
            <p className="my-2 text-base">{freeCourse.text2}</p>
              <Button text="Get Started" className="bg-black text-white uppercase my-2" />
          </div>

          <div className="lg:w-1/2 w-full   relative lg:mt-6 mx-auto mt-10  ">
            <Image src="/freecourse.jpg" width={500} height={500} className=" rounded-lg h-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;


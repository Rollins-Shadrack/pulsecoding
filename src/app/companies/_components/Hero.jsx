import Button from "@/components/Button";
import React from "react";
import { Check} from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import data from '@/constants/data.json'

const Hero = () => {
  const { heroSection } = data.companiespage;
  return (
    <div className=" mt-20 lg:mt-36">
      <Container>
        <div className="lg:flex mx-auto gap-14   ">
          <div className="lg:w-1/2 w-full mx-auto">
            <h1 className="font-bold text-3xl lg:text-4xl leading-tight uppercase">{heroSection.title}</h1>
            <p className="my-5 text-base">{heroSection.desc}</p>

            <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              {heroSection.addons.map((addon, idx) => (
                <div key={idx} className="inline-flex  text-sm ">
                  <Check strokeWidth={3} className="text-green-700 mr-2" />
                  <span className="font-semibold whitespace-nowrap">{addon}</span>
                </div>
              ))}
            </div>
            <p className="my-2 text-base">{heroSection.text1}</p>
            <p className="my-2 text-base">{heroSection.text2}</p>
            <Button text="Get Started" className="bg-black text-white uppercase my-2" />
          </div>

          <div className="lg:w-1/2 w-full   relative mx-auto  ">
            <Image src={heroSection.img} width={600} height={500} className=" rounded-lg h-full" alt="pulsecoding.com" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

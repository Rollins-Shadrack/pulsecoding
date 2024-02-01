import Button from "@/components/Button";
import React from "react";
import { Check} from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import data from '@/constants/data.json'

const Hero = () => {
  const { heroSection } = data.companiespage;
  return (
    <div className=" mt-16 lg:mt-36">
      <Container>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <Image
              src={heroSection.img}
              width={650}
              height={500}
              className=" rounded-lg h-full  float-left border-2 border-white mr-5 "
              alt="pulsecoding.com"
            />
            <div className="text-box">
              <h1 className="font-semibold text-2xl lg:text-4xl leading-tight uppercase mb-4">{heroSection.title}</h1>
              <h1 className="font-semibold text-xl lg:text-2xl leading-tight mb-4">{heroSection.subtitle}</h1>
              <p className="text-base   text-justify" dangerouslySetInnerHTML={{ __html: heroSection.desc }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

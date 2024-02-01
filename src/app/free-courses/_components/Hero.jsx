import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

const Hero = ({data}) => {
  return (
    <div className=" mt-16 lg:mt-36">
      <Container>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <Image src={data.img} width={650} height={500} className=" rounded-lg h-full  float-left border-2 border-white mr-5 " />
            <div className="text-box">
              <h1 className="font-semibold text-2xl lg:text-4xl leading-tight uppercase mb-4">{data.title}</h1>
              <p className="text-base   text-justify" dangerouslySetInnerHTML={{ __html: data.desc }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;


import Button from "@/components/Button";
import React from "react";
import { Play } from "lucide-react";
import Container from "@/components/Container";

const Hero = ({data}) => {
  return (
    <div className="mt-24 py-10 mb-10">
      <Container>
        <div className="lg:flex mx-auto gap-14">
          <div className="lg:w-1/2 w-full mx-auto">
            <h1 className="font-bold text-3xl lg:text-5xl leading-tight uppercase">{data.title}</h1>
            <p className="my-5 text-base">{data.desc}</p>

            <Button text={data.button} className="bg-black text-white my-2" />
          </div>

          <div className="lg:w-1/2 w-full relative mx-auto rounded-lg overflow-hidden">
            <div
              className="bg-[url('/freecourse.jpg')] bg-cover bg-center h-full md:w-4/5 w-full mx-auto rounded-lg"
              style={{ backgroundImage: `url('/freecourse.jpg')` }}>
              <div className="bg-brandBluish bg-opacity-40 h-full flex flex-col items-center justify-center rounded-lg">
                <div className="my-10 h-12 w-12 rounded-full bg-brandBluish flex items-center justify-center">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

'use client'
import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { curricullum } from "@/constants/data/courses";
import { ArrowRight, Check } from "lucide-react";
import React, { useState } from "react";

const Curriculum = () => {
  const [selectedFeature, setSelectFeature] = useState(Object.keys(curricullum.features)[0]);
  const handleFeatureClick = (feature) => {
    setSelectFeature(feature)
  }
  
  const selectedFeatureContent = curricullum.features[selectedFeature]
  return (
    <div className="my-16">
      <Container>
        <div className="lg:w-3/5 mx-auto w-full text-center">
          <h1 className="lg:text-4xl lg:w-4/5 mx-auto text-3xl font-bold tracking-wide">{curricullum.header}</h1>
          <p className="my-4 leading-6 text-lg text-justify px-4">{curricullum.text}</p>
        </div>
        <div className="border-b border-gray-300"></div>
        <div className="lg:flex my-5">
          <div className="lg:w-3/12 w-full flex flex-col">
            {Object.keys(curricullum.features).map((tab, idx) => (
              <h1
                key={idx}
                className="lg:text-lg text-base font-medium mb-2 inline-flex justify-between cursor-pointer"
                onClick={() => handleFeatureClick(tab)}>
                <span className={`${tab === selectedFeature ? "text-brandPrimary font-bold" : ""} w-2/3`}>
                  {idx}. {tab}
                </span>
                {tab === selectedFeature && <ArrowRight className="h-8 w-8 mx-auto hidden lg:block " />}
              </h1>
            ))}
          </div>
          <div className="lg:w-7/12 w-full flex flex-col">
            <h1 className="lg:text-3xl text-2xl font-bold tracking-wide">{selectedFeatureContent.subtitle}</h1>
            <p className="leading-7 text-justify text-md">{selectedFeatureContent.desc}</p>
            <Card className=" p-4  rounded-lg mt-5">
              <h1 className="text-lg font-semibold">{selectedFeatureContent.smallsubtitle1.header}</h1>
              <div className="flex flex-col space-y-2 my-2 mx-4">
                {selectedFeatureContent.smallsubtitle1.components.map((component, idx) => (
                  <div key={idx} className="inline-flex  text-base ">
                    <Check strokeWidth={3} className="text-red-700 mr-2" />
                    <span className="font-medium">{component}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-lg font-semibold">{selectedFeatureContent.smallsubtitle2.header}</h1>
              <div className="flex  space-x-4 my-2 mx-4">
                {selectedFeatureContent.smallsubtitle2.components.map((component, idx) => (
                  <div key={idx} className="px-5 py-1  border rounded-lg text-base ">
                    <span className="font-medium">{component}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
        {/* <div className="lg:flex">
          <div className="lg:w-3/12 w-full flex flex-col">
            <h1 className="lg:text-xl text-lg font-bold my-5 inline-flex justify-between">
              <span className="text-brandPrimary">{curricullum.smalltitle}</span> <ArrowRight className="h-8 w-8 mx-auto hidden lg:block" />
            </h1>

            <ol>
              {curricullum.indices.map((index, idx) => (
                <li className="text-lg font-semibold mb-2" key={idx}>
                  <span className="mr-3">{idx + 1}.</span> {index}
                </li>
              ))}
            </ol>

            <div className="flex my-5 w-fit justify-center items-center border border-black rounded-lg px-4 py-2 font-semibold text-brandPrimary">
              {curricullum.button} <ArrowRight className="w-6 h-6 ml-2 text-bold" />
            </div>
          </div>

          <div className="lg:w-7/12 w-full flex flex-col">
            <h1 className="lg:text-3xl text-2xl font-bold tracking-wide my-4">{curricullum.subtitle}</h1>
            <p className="leading-7 text-justify text-md">{curricullum.desc}</p>
            <Card className=" p-4  rounded-lg mt-5">
              <h1 className="text-lg font-semibold">{curricullum.smallsubtitle1.header}</h1>
              <div className="flex flex-col space-y-2 my-2 mx-4">
                {curricullum.smallsubtitle1.components.map((component, idx) => (
                  <div key={idx} className="inline-flex  text-base ">
                    <Check strokeWidth={3} className="text-red-700 mr-2" />
                    <span className="font-medium">{component}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-lg font-semibold">{curricullum.smallsubtitle2.header}</h1>
              <div className="flex  space-x-4 my-2 mx-4">
                {curricullum.smallsubtitle2.components.map((component, idx) => (
                  <div key={idx} className="px-5 py-1  border rounded-lg text-base ">
                    <span className="font-medium">{component}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default Curriculum;

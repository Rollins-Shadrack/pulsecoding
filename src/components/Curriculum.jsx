"use client";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import React, { useState } from "react";

const Curriculum = ({ data }) => {
  const [selectedFeature, setSelectFeature] = useState(Object.keys(data.features)[0]);
  const handleFeatureClick = (feature) => {
    setSelectFeature(feature);
  };


  const selectedFeatureContent = data.features[selectedFeature];
  return (
    <div className="py-10" id={"curriculum"}>
      <div >
        <div className="lg:w-4/5 mx-auto w-full text-center">
          <h1 className="lg:text-4xl lg:w-4/5 mx-auto text-xl font-bold tracking-wide">{data.header}</h1>
          <p className="my-4 leading-6 lg:text-lg text-base text-justify lg:px-4">{data.text}</p>
        </div>
        <div className="border-b border-gray-300"></div>
        <div className="lg:flex my-5">
          <div className="lg:w-4/12 w-full flex flex-col">
            {Object.keys(data.features).map((tab, idx) => (
              <h1
                key={idx}
                className="lg:text-lg text-base font-medium mb-2 inline-flex justify-between cursor-pointer whitespace-nowrap"
                onClick={() => handleFeatureClick(tab)}>
                <span className={`${tab === selectedFeature ? "text-brandPrimary font-bold" : ""} w-2/3`}>
                  {idx}. {tab}
                </span>
                {tab === selectedFeature && <ArrowRight className="h-8 w-8 mx-auto hidden lg:block " />}
              </h1>
            ))}
          </div>
          <div className="lg:w-8/12 w-full flex flex-col">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2 mx-4">
                {selectedFeatureContent.smallsubtitle2.components.map((component, idx) => (
                  <div key={idx} className="px-5 py-1 text-center  border rounded-lg text-base ">
                    <span className="font-medium">{component}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;

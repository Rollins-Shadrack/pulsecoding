import Container from "@/components/Container";
import { Card, CardTitle } from "@/components/ui/card";
import React from "react";

const ClassSchedule = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex">
          <div className="flex">
            <div className="rotate-180 " style={{ writingMode: "vertical-rl" }}>
              <div className="text-center">
                <CardTitle className="whitespace-nowrap text-center">Class Schedule</CardTitle>
                <div className="flex items-center justify-between border-l h-64 md:h-80  lg:h-96 whitespace-nowrap text-xs md:text-base">
                  <div className="uppercase mx-auto font-semibold border-l">Starting Monday</div>
                  <div className="uppercase mx-auto font-semibold ">Starting Tuesday</div>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-80 lg:h-96 flex flex-col  justify-between px-3 lg:text-lg text-xs my-auto whitespace-nowrap">
              <p className="font-semibold  ">10:00 - 16:00</p>
              <p className="font-semibold ">18:30 - 21:30</p>
              <p className="font-semibold  ">Flexible</p>
            </div>
          </div>
          <div className="w-10/12">
            <div className="h-64 md:h-80 lg:h-96 flex justify-between text-xs md:text-base">
              <p className="font-semibold  mx-auto">Mon</p>
              <p className="font-semibold mx-auto">Wed</p>
              <div className="font-semibold  mx-auto">
                Sat
                <div className="border p-2 flex lg:space-x-8 space-x-2 justify-between pb-5 rounded-lg">
                  <div className="text-sm">
                    <h1 className="">Codehang</h1>
                    <h1 className="text-gray-400">Optional</h1>
                  </div>
                  <h1 className="text-xs whitespace-nowrap">6 hrs</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClassSchedule;

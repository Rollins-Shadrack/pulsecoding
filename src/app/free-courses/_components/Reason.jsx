"use client";
import { Card, CardDescription } from "@/components/ui/card";
import React from "react";

const Reason = ({ data }) => {
  return (
    <div className="py-20" id="reason">
      <div>
        <div className=" mx-auto mb-10 w-full text-center">
          <h1 className="lg:text-4xl lg:w-4/5 mx-auto text-3xl font-bold tracking-wide">{data.header}</h1>
          <p className="my-4 leading-6 text-lg  px-4">{data.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.reason.map((card, idx) => (
            <Card key={idx} className="first:border-brandPrimary py-4">
              <div className="w-10/12 mx-auto">
                <div className="flex mb-2 space-x-4">
                  <div className="">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center p-1 bg-brandPrimary text-white">{idx + 1}</div>
                  </div>

                  <p className="text-lg font-bold">{card.title}</p>
                </div>
                <CardDescription>{card.desc}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reason;

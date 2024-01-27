'use client'
import Container from "@/components/Container";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { finance } from "@/constants/data/courses";
import React, { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const Finance = () => {
    const [duration, setDuration] = useState("24");
    const [amount, setAmount] = useState(duration === "12" ? 1500 : 750);

    const handleDurationChange = (event) => {
      setDuration(event);
      setAmount(event === "12" ? 1500 : 750);
    };
  return (
    <div className="my-16">
      <Container>
        <h1 className="lg:text-4xl text-2xl font-bold">{finance.header}</h1>
        <p className="lg:text-lg text-md my-2">{finance.text}</p>
        <div className="lg:flex">
          <div className="lg:w-7/12 w-full">
            <div className="lg:w-4/5 px-5 mx-auto">
              <Card className="my-4 py-6  shadow-lg ">
                <div className="w-10/12 mx-auto">
                  <CardTitle className="font-semibold text-center lg:text-2xl text-lg">{finance.card1.header}</CardTitle>
                  <CardDescription className="text-center">{finance.card1.text}</CardDescription>
                </div>
              </Card>
              <Card className="shadow-lg my-4 py-4 ">
                <div className="w-10/12 mx-auto">
                  <CardTitle className="font-semibold text-md">{finance.card2.header1}</CardTitle>
                  <CardDescription>{finance.card2.text1} </CardDescription>
                  <div className="my-5">
                    <CardTitle className="font-semibold text-md">{finance.card2.header2}</CardTitle>
                    <CardDescription>{finance.card2.text2} </CardDescription>
                  </div>
                  <Input disabled className="w-[180px]" type="number" value={amount} />
                  <div className="my-5">
                    <CardTitle className="font-semibold text-md mb-3">Duration</CardTitle>
                    <Select onValueChange={handleDurationChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={duration === "12" ? "12 months" : "24 months"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Duration</SelectLabel>
                          <SelectItem value="12">12 months</SelectItem>
                          <SelectItem value="24">24 months</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="lg:w-4/12 w-full">
            <Card className="bg-brandDark text-white py-4 text-center my-4">
              <div className="w-10/12 mx-auto">
                <CardTitle className="font-semibold text-md">{finance.card3.header}</CardTitle>
                <CardDescription className="text-white my-2">{finance.card3.text}</CardDescription>
                {finance.card3.cards1.map((card, idx) => (
                  <Card key={idx} className="bg-brandSecondDark border-none text-white py-2 mb-3">
                    <CardDescription className="text-white my-2">{card.text} </CardDescription>
                    <CardTitle className="font-semibold text-md">{idx === 1 ? duration : card.number}</CardTitle>
                  </Card>
                ))}
                <div className="border border-gray-300 my-2"></div>
                {finance.card3.cards2.map((card, idx) => (
                  <Card key={idx} className="bg-brandSecondDark border-none text-white py-2 mb-3">
                    <CardDescription className="text-white my-2">{card.text} </CardDescription>
                    <CardTitle className="font-semibold text-md">{card.number}</CardTitle>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Finance;

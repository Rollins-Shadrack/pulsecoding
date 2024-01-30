"use client";
import Container from "@/components/Container";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import TabsNav from "./TabsNav";
import data from "@/constants/data.json";
const Finance = () => {
  const { financeSection } = data.coursespage;
  const [amount, setAmount] = useState(750);
  const [installments, setInstallments] = useState(6);
  const totalCourseFee = 7250;

  const amountPerInstallment = (totalCourseFee - amount) / installments;

  const handleAmountChange = (event) => {
    const newAmount = parseInt(event.target.value, 10) < 750 ? 750 : parseInt(event.target.value, 10);
    setAmount(newAmount);
  };

  const handleInstallmentsChange = (event) => {
    const newInstallments = parseInt(event.target.value, 10) || 6;
    setInstallments(newInstallments);
  };

  return (
    <div className="my-16" id="finance">
      <TabsNav active="finance" />
      <Container className="mt-20">
        <h1 className="lg:text-4xl text-2xl font-bold">{financeSection.header}</h1>
        <p className="lg:text-lg text-md my-2">{financeSection.text}</p>
        <div className="lg:flex">
          <div className="lg:w-7/12 w-full">
            <div className="lg:w-4/5 px-5 mx-auto">
              <Card className="my-4 py-6  shadow-lg ">
                <div className="w-10/12 mx-auto">
                  <CardTitle className="font-semibold text-center lg:text-2xl text-lg">{financeSection.card1.header}</CardTitle>
                  <CardDescription className="text-center">{financeSection.card1.text}</CardDescription>
                </div>
              </Card>
              <Card className="shadow-lg my-4 py-4 ">
                <div className="w-10/12 mx-auto">
                  <CardTitle className="font-semibold text-md">{financeSection.card2.header1}</CardTitle>
                  <CardDescription>{financeSection.card2.text1} </CardDescription>
                  <div className="my-5">
                    <CardTitle className="font-semibold text-md">{financeSection.card2.header2}</CardTitle>
                    <CardDescription>{financeSection.card2.text2} </CardDescription>
                  </div>
                  <input className="w-[180px] border rounded-lg p-1 px-3" type="number" value={amount} onChange={handleAmountChange} />
                  <div className="my-5">
                    <CardTitle className="font-semibold text-md mb-3">Duration</CardTitle>
                    <select className="w-[180px] border rounded-lg p-1 px-3" value={installments} onChange={handleInstallmentsChange}>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                    </select>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="lg:w-4/12 w-full">
            <Card className="bg-brandDark text-white py-4 text-center my-4">
              <div className="w-10/12 mx-auto">
                <CardTitle className="font-semibold text-md">{financeSection.card3.header}</CardTitle>
                <CardDescription className="text-white my-2">{financeSection.card3.text}</CardDescription>
                <Card className="bg-brandSecondDark border-none text-white py-2 mb-3">
                  <CardDescription className="text-white my-2">Deposit amount </CardDescription>
                  <CardTitle className="font-semibold text-md">£{amount}</CardTitle>
                </Card>
                <Card className="bg-brandSecondDark border-none text-white py-2 mb-3">
                  <CardDescription className="text-white my-2">Number of installments </CardDescription>
                  <CardTitle className="font-semibold text-md">{installments}</CardTitle>
                </Card>
                <Card className="bg-brandSecondDark border-none text-white py-2 mb-3">
                  <CardDescription className="text-white my-2">Interest Rate</CardDescription>
                  <CardTitle className="font-semibold text-md">0%</CardTitle>
                </Card>
                <div className="border border-gray-300 my-2"></div>
                <Card className="bg-brandSecondDark border-none text-white py-2 mb-3">
                  <CardDescription className="text-white my-2">Monthly Installments</CardDescription>
                  <CardTitle className="font-semibold text-md">£{amountPerInstallment.toFixed(2)}</CardTitle>
                </Card>
                <Card className="bg-brandSecondDark border-none text-white py-2 mb-3">
                  <CardDescription className="text-white my-2">Total repayment</CardDescription>
                  <CardTitle className="font-semibold text-md">£{(totalCourseFee - amount).toFixed(2)}</CardTitle>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Finance;

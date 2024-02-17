import React from "react";
import PaymentOptionsForm from "./PaymentOptionsForm";
import Container from "@/components/Container";
import data from "@/constants/data.json";
import Image from "next/image";

const PaymentOptions = () => {
  const { header, addons, subtitle1, subtitle2, images } = data.homepage.paymentoptions;
  return (
    <div className="h-[500px] lg:h-[400px] relative">
      <div className="h-1/2 bg-brandBrownish relative"></div>
      <div className="h-1/2 bg-white relative"></div>
      <Container className="absolute w-full md:w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-5 shadow-lg rounded-2xl z-[50]">
        <div className="text-center">
          <h1 className="font-bold text-2xl lg:text-4xl  leading-tight ">{header}</h1>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">
              {addons.map((addon, idx) => (
                <div key={idx} className="inline-flex items-center">
                  <div className="h-3 w-3 rounded-full bg-brandBrownish mr-2"></div>
                  <span className="font-semibold text-base">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-6 mx-auto md:w-4/5">
          <div className="lg:flex flex-col items-center">
            <h1 className="leading-relaxed font-semibold lg:text-xl text-lg">{subtitle1} </h1>
            <div className="flex justify-center -space-x-3">
              {images.map((image, idx) => (
                <Image key={idx}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                  src={image} width={400} height={400}
                  alt="pulsecoding.com"
                />
              ))}
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white bg-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                <span className="text-xs font-medium leading-none text-white uppercase">2k+</span>
              </span>
            </div>
            <h1 className="leading-relaxed font-semibold lg:text-xl text-lg">{subtitle2}</h1>
          </div>

          <div className="my-5">
            <PaymentOptionsForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentOptions;

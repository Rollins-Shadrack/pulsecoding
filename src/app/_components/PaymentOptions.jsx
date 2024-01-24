import React from "react";
import PaymentOptionsForm from "./PaymentOptionsForm";
import Container from "@/components/Container";

const PaymentOptions = () => {
  return (
    <div className="h-[500px] lg:h-[400px] relative">
      <div className="h-1/2 bg-brandBrownish relative"></div>
      <div className="h-1/2 bg-white relative"></div>
      <Container className="absolute w-full md:w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-5 shadow-lg rounded-2xl z-[50]">
        <div className="text-center">
          <h1 className="font-bold text-2xl lg:text-4xl  leading-tight ">Flexible payment options</h1>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">
              <div className="inline-flex items-center">
                <div className="h-3 w-3 rounded-full bg-brandBrownish mr-2"></div>
                <span className="font-semibold text-base">Learn now, pay later</span>
              </div>

              <div className="inline-flex items-center">
                <div className="h-3 w-3 rounded-full bg-brandBrownish mr-2"></div>
                <span className="font-semibold text-base">Installment plans</span>
              </div>

              <div className="inline-flex items-center">
                <div className="h-3 w-3 rounded-full bg-brandBrownish mr-2"></div>
                <span className="font-semibold text-base">Upfront</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 mx-auto md:w-4/5">
          <div className="lg:flex flex-col items-center">
            <h1 className="leading-relaxed font-semibold lg:text-xl text-lg">Talk to our advisors </h1>
            <div className="flex justify-center -space-x-3">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white bg-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                <span className="text-xs font-medium leading-none text-white uppercase">2k+</span>
              </span>
            </div>
            <h1 className="leading-relaxed font-semibold lg:text-xl text-lg">to find out how you can get in risk-free</h1>
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

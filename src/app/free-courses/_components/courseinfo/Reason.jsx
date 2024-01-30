"use client";
import Container from "@/components/Container";
import { Card, CardDescription } from "@/components/ui/card";
import React from "react";
import FreeCourseTabs from "@/app/free-courses/_components/TabsNav";
import { usePathname } from "next/navigation";

const Reason = ({ data }) => {
  const pathname = usePathname();
  return (
    <div className="py-14" id="reason">
      {pathname === "/free-courses" && <FreeCourseTabs active="reason" />}
      <Container className="mt-20">
        <div className="lg:w-3/5 mx-auto mb-10 w-full text-center">
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
      </Container>
    </div>
  );
};

export default Reason;

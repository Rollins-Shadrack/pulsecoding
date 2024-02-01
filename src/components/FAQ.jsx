"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";
import { cn } from "@/lib/utils";

const FAQ = ({ Bodyclass, data }) => {
  return (
    <div className="py-10" id="faqs">
      <div className={cn(Bodyclass, "mt-10")}>
        <h1 className="font-bold text-4xl mb-8  text-center uppercase tracking-wide">{data.header}</h1>

        <Accordion type="single" collapsible className="lg:w-4/5 w-full px-10 ">
          {data.faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="my-3">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/constants/data/aboutpage";
import React from "react";

const FAQ = () => {
  return (
    <div className="my-5 py-20 bg-black flex flex-col items-center text-white">
      <h1 className="font-bold text-4xl mb-8  text-center uppercase tracking-wider">
        WHY SHOULD <br /> YOU JOIN US?
      </h1>

          <Accordion type="single" collapsible className="lg:w-3/5 w-full px-10 ">
              {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={faq.question}>
                      <AccordionTrigger >{faq.question}</AccordionTrigger>
                      <AccordionContent>{ faq.answer}</AccordionContent>
                  </AccordionItem>
              ))}

        </Accordion>
    </div>
  );
};

export default FAQ;

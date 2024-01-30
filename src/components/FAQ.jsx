"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";
import FreeCourseTabs from "@/app/free-courses/_components/TabsNav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const FAQ = ({ Bodyclass, data }) => {
  const pathname = usePathname();
  return (
    <div className="my-16" id="faqs">
      {pathname === "/free-courses" && <FreeCourseTabs active="faqs" />}
      <div className={cn(Bodyclass, "mt-10")}>
        <h1 className="font-bold text-4xl mb-8  text-center uppercase tracking-wider">{data.header}</h1>

        <Accordion type="single" collapsible className="lg:w-3/5 w-full px-10 ">
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

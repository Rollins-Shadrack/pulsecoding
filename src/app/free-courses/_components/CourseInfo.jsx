"use client";
import Container from "@/components/Container";
import React, { useEffect, useRef, useState } from "react";
import Curriculum from "@/components/Curriculum";
import data from "@/constants/data.json";
import FAQ from "@/components/FAQ";
import Reason from "./Reason";

const CourseInfo = () => {
  const courseinfoTabsRef = useRef(null);
  const [fragment, setFragment] = useState("");
  const { curricullumSection, faqsSection, reasonToTakeCourseSection, sectionIds } = data.freecoursespage;
  
  useEffect(() => {
    const updateFragment = () => {
      setFragment(window.location.hash.substring(1));
    }
    updateFragment();

    window.addEventListener("hashchange", updateFragment)

    return () => {
      window.addEventListener("hashchange", updateFragment);
    }
    
  }, []);

  const scrollToCourseInfoTabs = () => {
    courseinfoTabsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      offsetTop: 40,
    });
  };

  console.log(fragment);

  return (
    <div ref={courseinfoTabsRef} className="pt-10">
      <Container className="md:flex w-full items-start justify-center gap-10 ">
        <div className="sticky top-28  md:w-2/12 rounded-lg p-4 shadow-sm border mt-10  z-[999] hidden md:block ">
          {sectionIds.map((tab, idx) => (
            <a
              key={idx}
              href={`#${tab.id}`}
              className={`h-10 md:flex flex-col justify-center py-4 px-2 text-base font-medium  ${
                fragment && fragment === tab.id ? "text-brandPrimary" : "text-gray-700"
              } `}
              onClick={scrollToCourseInfoTabs}>
              {tab.name}
            </a>
          ))}
        </div>
        <div className="md:w-10/12 w-full">
          <Curriculum data={curricullumSection} />
          <FAQ data={faqsSection} Bodyclass="flex flex-col items-center" />
          <Reason data={reasonToTakeCourseSection} />
        </div>
      </Container>
    </div>
  );
};

export default CourseInfo;

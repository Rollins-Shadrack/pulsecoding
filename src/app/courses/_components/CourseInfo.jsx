'use client'
import Container from '@/components/Container'
import React, { useEffect, useRef, useState } from 'react'
import AboutCourse from './AboutCourse'
import ClassSchedule from './ClassSchedule'
import Curriculum from '@/components/Curriculum'
import Team from '@/components/Team'
import Finance from './Finance'
import Dates from './Dates'
import data from "@/constants/data.json";
import { ArrowRight } from 'lucide-react'

const CourseInfo = () => {
  const courseinfoTabsRef = useRef(null)
  const [fragment, setFragment] = useState('')
  const { instructorsSection, curricullumSection, sectionIds } = data.coursespage;

  useEffect(() => {
    const updateFragment = () => {
      setFragment(window.location.hash.substring(1));
    };
    updateFragment();

    window.addEventListener("hashchange", updateFragment);

    return () => {
      window.addEventListener("hashchange", updateFragment);
    };
  }, []);

    const scrollToCourseInfoTabs = () => {
      courseinfoTabsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offsetTop: 40,
      });
  };
  

    return (
      <div ref={courseinfoTabsRef} className="pt-10">
        <Container className="md:flex w-full items-start justify-center space-x-14 ">
          <div className="sticky top-28  md:w-2/12 rounded-lg p-4 shadow-sm border  z-[999] hidden md:block ">
            {sectionIds.map((tab, idx) => (
              <a
                key={idx}
                href={`#${tab.id}`}
                className={`h-10 md:flex flex-col justify-center py-4 px-2 text-sm font-medium  ${
                  fragment && fragment === tab.id ? "text-brandPrimary" : "text-gray-700"
                } `}
                onClick={scrollToCourseInfoTabs}>
                {tab.name}
              </a>
            ))}
          </div>
          <div className="md:w-10/12 w-full">
            <AboutCourse />
            <ClassSchedule />
            <Curriculum data={curricullumSection} />
            <Team data={instructorsSection} headingClass="text-center font-bold text-3xl" />
            <Finance />
            <Dates />
          </div>
        </Container>
      </div>
    );
}

export default CourseInfo
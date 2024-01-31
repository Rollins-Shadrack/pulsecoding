import Container from "@/components/Container";
import React from "react";
import data from "@/constants/data.json";
const AboutCourse = () => {
  const { aboutCourseSection } = data.coursespage;
  return (
    <div className=" " id="about">
      <div>
        <h1 className="lg:text-4xl text-3xl font-bold tracking-wide">{aboutCourseSection.title}</h1>
        <p className="my-4 leading-7 text-justify">{aboutCourseSection.desc}</p>
        <h1 className="lg:text-2xl text-xl font-bold my-10">{aboutCourseSection.subtitle}</h1>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {aboutCourseSection.features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className={`h-20 w-20 mx-auto  rounded-full mb-10 opacity-50`} style={{ backgroundColor: feature.color }}></div>
              <h1 className="lg:text-xl text-lg font-semibold text-brandPrimary">{feature.title}</h1>
              <p className="my-4 leading-7 text-center w-4/5 ">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;

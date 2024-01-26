import Container from '@/components/Container';
import { aboutCourse } from '@/constants/data/courses'
import React from 'react'

const AboutCourse = () => {
  return (
    <div className="my-10">
      <Container>
        <h1 className="lg:text-4xl text-3xl font-bold tracking-wide">{aboutCourse.title}</h1>
        <p className="my-4 leading-7 text-justify">{aboutCourse.desc}</p>
        <h1 className="lg:text-2xl text-xl font-bold my-10">{aboutCourse.subtitle}</h1>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {aboutCourse.features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className={`h-20 w-20 mx-auto bg-[${feature.color}] rounded-full opacity-50 mb-10`}></div>
              <h1 className="lg:text-xl text-lg font-semibold text-brandPrimary">{feature.title}</h1>
              <p className="my-4 leading-7 text-center w-4/5 ">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AboutCourse
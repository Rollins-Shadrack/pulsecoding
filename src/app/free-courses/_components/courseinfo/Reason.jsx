import Container from '@/components/Container';
import { Card, CardDescription } from '@/components/ui/card';
import { reasonToTakeCourse } from '@/constants/data/freecourse';
import React from 'react'

const Reason = () => {
  return (
    <div className="py-14">
      <Container>
        <div className="lg:w-3/5 mx-auto w-full text-center">
          <h1 className="lg:text-4xl lg:w-4/5 mx-auto text-3xl font-bold tracking-wide">{reasonToTakeCourse.header}</h1>
          <p className="my-4 leading-6 text-lg text-justify px-4">{reasonToTakeCourse.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasonToTakeCourse.reason.map((card, idx) => (
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
}

export default Reason
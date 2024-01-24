'use client'
import React, { useEffect, useState } from 'react'
import Container from '@/components/Container'
import Carousel from 'nuka-carousel'
import { Card } from '@/components/ui/card'
import { instructors } from '@/constants/data/aboutpage'
import Image from 'next/image'
const Instructors = () => {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener("resize", handleResize);
        }
    }, [])
    const params = {
      wrapAqound: true,
      slidesToShow: screenSize >= 1008 ? 4 : screenSize < 768 ? 2 : 3,
      autoplay: true,
      autoplayInterval: 10000,
      renderCenterLeftControls: ({ previousSlide }) => null,
      renderCenterRightControls: ({ nextSlide }) => null,
      cellSpacing: 10,
    };
  return (
    <div className="my-5">
      <Container>
        <h1 className="font-semibold tracking-wider text-xl">Instructors</h1>
        <Carousel
          className="w-full "
          {...params}
          renderBottomCenterControls={({ currentSlide, slideCount, goToSlide }) => (
            <ul className="flex space-x-2 mt-4">
              {[...Array(slideCount)].map((_, index) => (
                <li key={index}>
                  <button
                    className={`h-2 w-3 rounded-2xl ${index === currentSlide ? "bg-brandPrimary" : "bg-gray-400"}`}
                    onClick={() => goToSlide(index)}
                  />
                </li>
              ))}
            </ul>
          )}>
          {instructors.map((instructor, idx) => (
            <Card key={idx} className="lg:mx-5 pb-5 rounded-t-2xl my-10">
              <Image src={instructor.img} height={500} width={500} alt="pulsecoding.com" className="w-full h-32 md:h-48 lg:h-56 rounded-t-2xl object-cover" />
              <div className="px-3 text-base">
                <p className="my-3">{instructor.title}</p>
                <p className="font-bold tracking-wider whitespace-nowrap truncate">{instructor.name}</p>
              </div>
            </Card>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Instructors
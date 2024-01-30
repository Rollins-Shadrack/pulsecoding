import React from 'react'
import { Play } from 'lucide-react';
import data from "@/constants/data.json";
const Hero = () => {
  const { header, desc } = data.coursespage.heroSection;
  return (
    <div className="mt-20">
      <div className=" mt-5 bg-cover bg-center h-[300px] lg:h-[500px] w-full relative bg-[url('https://media.istockphoto.com/id/1479824136/photo/young-man-showing-something-on-mobile-phone-to-his-friend-on-stairs-outdoors.jpg?s=612x612&w=0&k=20&c=jhx7AuDt1JphaFYkT7otKtODZc_W3ooIpkVSDvOC1hk=')] bg-no-repeat ">
        <div className="absolute bg-brandBluish bg-opacity-70 top-0 left-0 h-[300px] lg:h-[500px]  w-full flex flex-col items-center justify-center ">
          <h1 className="text-white lg:text-5xl text-3xl font-bold tracking-wider ">{header}</h1>
          <div className="my-10 h-12 w-12  rounded-full bg-brandBluish flex items-center justify-center">
            <Play className="h-8 w-8 text-white" />
          </div>
          <div className="bg-white w-fit px-5 py-3 rounded-2xl text-center mb-4">
            <h1 className=" lg:text-3xl md:text-md text-base font-bold whitespace-nowrap ">
              <span className="text-brandPrimary">{ desc.one} </span> {desc.two}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
import Container from "@/components/Container";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-16 overflow-x-hidden">
      <div className=" mt-5 bg-cover bg-center h-80 relative bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat ">
        <div className="absolute bg-black bg-opacity-85 top-0 left-0 h-80  w-1/2 flex items-center justify-center">
          <h1 className="text-white lg:text-5xl text-3xl font-bold">About Us</h1>
        </div>
      </div>
      <div className="px-5 my-8">
        <p className="text-base leading-relaxed tracking-wide text-justify">
          In the fast-paced and ever-evolving world of technology, finding skilled and knowledgeable professionals is crucial for the success of any
          business. Pulse Coding emerges as a game-changer in the recruitment landscape, providing employers with a unique opportunity to tap into a
          pool of highly qualified candidates without the burden of hefty recruitment fees.
        </p>
        <p className="text-base my-1.5 leading-relaxed tracking-wide text-justify">
          Pulse Coding is an innovative platform that specializes in training and developing coding talents, equipping them with the technical
          knowledge and skills needed to thrive in today's competitive tech industry. Graduates from Pulse Coding bring a fresh perspective and a
          wealth of expertise, making them valuable assets for companies seeking to enhance their technical workforce. One of the key advantages of
          hiring Pulse Coding graduates is the assurance of technical proficiency. The program is designed to cover a comprehensive range of coding
          languages, frameworks, and tools, ensuring that graduates possess a well-rounded skill set. Whether it's front-end development, back-end
          programming, or full-stack expertise, Pulse Coding graduates are well-prepared to contribute effectively to a variety of projects.
        </p>
        <p className="text-base my-1.5 leading-relaxed tracking-wide text-justify">
          Moreover, Pulse Coding places a strong emphasis on real-world applications and hands-on experience. Through practical projects and industry
          relevant simulations, students gain a deep understanding of how to apply their coding skills in practical scenarios. This practical exposure
          distinguishes Pulse Coding graduates from conventional candidates, as they enter the workforce with a robust foundation and a readiness to
          tackle complex challenges
        </p>
      </div>
    </div>
  );
};

export default Hero;

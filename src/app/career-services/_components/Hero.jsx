// import Button from "@/components/Button";
// import React from "react";
// import {  Play } from "lucide-react";
// import { careerservices } from "@/constants/data/careerservices";
// import Container from "@/components/Container";

// const Hero = () => {
//   return (
//     <div className=" mt-24 py-14 mb-10">
//       <Container>
//         <div className="lg:flex mx-auto gap-14   ">
//           <div className="lg:w-1/2 w-full mx-auto">
//             <h1 className="font-bold text-3xl lg:text-5xl leading-tight uppercase">{careerservices.title}</h1>
//             <p className="my-5 text-base">{careerservices.desc}</p>

//             <Button text="Download our job report" className="bg-black text-white  my-2" />
//           </div>

//           <Container className="lg:w-1/2 w-full    relative  mx-auto  bg-[url('/freecourse.jpg')] rounded-lg ">
//             <div className="absolute bg-brandBluish bg-opacity-40 top-0 left-0 h-full w-full flex flex-col items-center justify-center rounded-lg ">
//               <div className="my-10 h-12 w-12  rounded-full bg-brandBluish flex items-center justify-center">
//                 <Play className="h-8 w-8 text-white" />
//               </div>
//             </div>
//           </Container>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Hero;


import Button from "@/components/Button";
import React from "react";
import { Play } from "lucide-react";
import { careerservices } from "@/constants/data/careerservices";
import Container from "@/components/Container";

const Hero = () => {
  return (
    <div className="mt-24 py-10 mb-10">
      <Container>
        <div className="lg:flex mx-auto gap-14">
          <div className="lg:w-1/2 w-full mx-auto">
            <h1 className="font-bold text-3xl lg:text-5xl leading-tight uppercase">{careerservices.title}</h1>
            <p className="my-5 text-base">{careerservices.desc}</p>

            <Button text="Download our job report" className="bg-black text-white my-2" />
          </div>

          <div className="lg:w-1/2 w-full relative mx-auto rounded-lg overflow-hidden">
            <div
              className="bg-[url('/freecourse.jpg')] bg-cover bg-center h-full w-4/5 mx-auto rounded-lg"
              style={{ backgroundImage: `url('/freecourse.jpg')` }}>
              <div className="bg-brandBluish bg-opacity-40 h-full flex flex-col items-center justify-center rounded-lg">
                <div className="my-10 h-12 w-12 rounded-full bg-brandBluish flex items-center justify-center">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

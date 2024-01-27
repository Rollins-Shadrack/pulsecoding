import Button from '@/components/Button';
import Container from '@/components/Container';
import { calltoAction } from '@/constants/data/courses';
import Image from "next/image";


const CallToAction = () => {
  return (
    <div className=" bg-black text-white pt-10">
      <Container className="lg:flex lg:space-x-20">
        <div className="lg:w-5/12 w-full mx-auto flex flex-col items-center justify-center">
          <div className="">
            <h1 className="lg:text-4xl text-xl font-bold ">{calltoAction.text}</h1>
            <Button text="apply now" className="text-black bg-white uppercase my-5 font-bold" />
          </div>
        </div>
        <div className="lg:w-7/12 w-full mx-auto">
          <Image src={calltoAction.img} width={500} height={500} alt="pulsecoding.com" className="" />
        </div>
      </Container>
    </div>
  );
}

export default CallToAction
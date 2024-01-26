import { brands } from '@/constants/data/courses';
import Container from "@/components/Container";
import Image from 'next/image';

const Brands = () => {
  return (
    <div className="my-10">
      <Container>
        <h1 className="lg:text-2xl text-xl font-bold mt-10 ">{brands.title}</h1>
        <div className="flex flex-wrap items-stretch space-x-6 md:space-x-10 lg:space-x-14 text-justify">
          {brands.brands.map((brand, idx) => (
            <Image key={idx} src={brand} width={180} height={200} alt="pulsecoding" className=" object-contain lg:h-32 lg:w-32 md:h-28 md:w-28 w-24 h-24" />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Brands
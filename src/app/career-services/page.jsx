import Stats from "@/components/Stats";
import Hero from "./_components/Hero";
import CareerServices from "./_components/CareerServices";
import Brands from "@/components/Brands";
import Events from "./_components/Events";

export const metadata = {
  title: "Career Services",
  description: "",
};
export default function FreeCourses() {
  return (
    <div>
      <Hero />
      <Stats />
      <CareerServices />
      <Events/>
    </div>
  );
}

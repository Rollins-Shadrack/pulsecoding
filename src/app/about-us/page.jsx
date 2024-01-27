import Team from "@/components/Team";
import FAQ from "../../components/FAQ";
import Hero from "./_components/Hero";
import Newsletter from "./_components/Newsletter";
import Stats from "./_components/Stats";

export const metadata = {
  title: "About Us",
  description: "",
};
export default function About() {
  return (
    <div>
      <Hero />
      <FAQ Bodyclass="my-5 py-20 bg-black flex flex-col items-center text-white" />
      <Stats />
      <Team heading={"Instructors"} headingClass={"font-semibold tracking-wider text-xl"} />
      <Newsletter />
    </div>
  );
}

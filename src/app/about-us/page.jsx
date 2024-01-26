import Team from "@/components/Team";
import FAQ from "./_components/FAQ";
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
      <FAQ />
      <Stats />
      <Team heading={"Instructors"} headingClass={"font-semibold tracking-wider text-xl"} />
      <Newsletter />
    </div>
  );
}

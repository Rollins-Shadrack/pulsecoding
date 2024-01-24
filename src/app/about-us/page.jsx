import FAQ from "./_components/FAQ";
import Hero from "./_components/Hero";
import Instructors from "./_components/Instructors";
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
      <Instructors />
      <Newsletter />
    </div>
  );
}

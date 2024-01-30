import Team from "@/components/Team";
import FAQ from "../../components/FAQ";
import Hero from "./_components/Hero";
import Newsletter from "./_components/Newsletter";
import Stats from "@/components/Stats";
import data from "@/constants/data.json";

export const metadata = {
  title: "About Us",
  description: "",
};
export default function About() {
  const { faqsSection, stats, instructorsSection } = data.aboutpage;
  return (
    <div>
      <Hero />
      <FAQ data={faqsSection} Bodyclass="my-5 py-20 bg-black flex flex-col items-center text-white" />
      <Stats stats={stats} className="bg-white text-brandPrimary" />
      <Team data={instructorsSection} headingClass={"font-semibold tracking-wider text-xl"} />
      <Newsletter />
    </div>
  );
}

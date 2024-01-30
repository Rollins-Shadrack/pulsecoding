import Bootcamp from "./_components/Bootcamp";
import Brands from "../../components/Brands";
import CallToAction from "../../components/CallToAction";
import Hero from "./_components/Hero"
import AboutCourse from "./_components/AboutCourse";
import ClassSchedule from "./_components/ClassSchedule";
import Curriculum from "@/components/Curriculum";
import Team from "@/components/Team";
import Finance from "./_components/Finance";
import Dates from "./_components/Dates";
import data from '@/constants/data.json'

export const metadata = {
  title: "Courses",
  description: "",
};
export default function About() {
  const { instructorsSection, curricullumSection, brandsSection, callToActionSection } = data.coursespage;
  return (
    <>
      <Hero />
      <Bootcamp />
      <AboutCourse />
      <ClassSchedule />
      <Curriculum data={curricullumSection} />
      <Team data={instructorsSection} headingClass="text-center font-bold text-3xl" />
      <Finance />
      <Dates />
      <Brands data={brandsSection} />
      <CallToAction data={callToActionSection} />
    </>
  );
}

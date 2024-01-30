import CallToAction from "@/components/CallToAction";
import Hero from "./_components/Hero";
import CourseInfo from "./_components/courseinfo";
import data from "@/constants/data.json";
import TabsNav from "./_components/TabsNav";
import Curriculum from "@/components/Curriculum";
import FAQ from "@/components/FAQ";
import Reason from "./_components/courseinfo/Reason";

export const metadata = {
  title: "Free Courses",
  description: "",
};
export default function FreeCourses() {
  const { heroSection,curricullumSection, faqsSection, reasonToTakeCourseSection, callToActionSection } = data.freecoursespage;
  return (
    <div>
      <Hero data={heroSection} />
      <Curriculum data={curricullumSection} />
      <FAQ data={faqsSection} Bodyclass="my-5 py-10 flex flex-col items-center " />
      <Reason data={reasonToTakeCourseSection} />
      <CallToAction data={callToActionSection} />
    </div>
  );
}

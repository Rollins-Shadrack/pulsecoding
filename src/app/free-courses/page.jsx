import CallToAction from "@/components/CallToAction";
import Hero from "./_components/Hero";
import data from "@/constants/data.json";
import CourseInfo from "./_components/CourseInfo";
// import Demo from './_components/Demo/index'

export const metadata = {
  title: "Free Courses",
  description: "",
};
export default function FreeCourses() {
  const { heroSection,callToActionSection } = data.freecoursespage;
  return (
    <div>
      <Hero data={heroSection} />
      {/* <Demo/> */}
      <CourseInfo/>
      <CallToAction data={callToActionSection} />
    </div>
  );
}

import CallToAction from "@/components/CallToAction";
import Hero from "./_components/Hero";
import CourseInfo from "./_components/courseinfo"


export const metadata = {
  title: "Free Courses",
  description: "",
};
export default function FreeCourses() {
  return (
    <div>
      <Hero />
      <CourseInfo />
      <CallToAction/>
    </div>
  );
}

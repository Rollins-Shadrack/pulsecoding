import Bootcamp from "./_components/Bootcamp";
import Brands from "./_components/Brands";
import CallToAction from "./_components/CallToAction";
import Hero from "./_components/Hero"
import CourseInfo from './_components/coursesInfo'

export const metadata = {
  title: "Courses",
  description: "",
};
export default function About() {
  return (<>
    <Hero />
    <Bootcamp />
    <CourseInfo />
    <Brands />
    <CallToAction/>
    </>);
}

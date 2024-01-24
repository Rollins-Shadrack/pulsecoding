import Bootcamp from "./_components/Bootcamp";
import Hero from "./_components/Hero"

export const metadata = {
  title: "Courses",
  description: "",
};
export default function About() {
  return (<>
    <Hero />
    <Bootcamp/>
    </>);
}

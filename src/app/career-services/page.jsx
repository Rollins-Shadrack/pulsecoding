import Stats from "@/components/Stats";
import Hero from "./_components/Hero";
import CareerServices from "./_components/CareerServices";
import Events from "./_components/Events";
import data from '@/constants/data.json'

export const metadata = {
  title: "Career Services",
  description: "",
};
export default function FreeCourses() {
  const { stats, heroSection, careerserviceSection, eventsSection } = data.careerservicespage;
  return (
    <div>
      <Hero data={heroSection} />
      <Stats stats={stats} className="bg-white text-brandPrimary" />
      <CareerServices data={careerserviceSection} />
      <Events data={eventsSection} />
    </div>
  );
}

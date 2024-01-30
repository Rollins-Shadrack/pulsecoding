import Hero from "./_components/Hero";
import Bootcamps from "./_components/Bootcamps";
import Guide from "./_components/Guide";
import PaymentOptions from "./_components/PaymentOptions";
import Alumni from "./_components/Alumni";
import Stats from "../components/Stats";

import data from "@/constants/data.json";
export const metadata = {
  title: "Home Page",
  description: "",
};
export default async function Home() {
  const stats = data.homepage.stats;
  return (
    <div>
      <Hero />
      <Bootcamps />
      <Guide />
      <PaymentOptions />
      <Alumni />
      <Stats stats={stats} className="text-white bg-black" />
    </div>
  );
}

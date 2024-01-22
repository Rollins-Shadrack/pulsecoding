
import Hero from "./_components/Hero";
import Bootcamps from "./_components/Bootcamps";
import Guide from "./_components/Guide";
import PaymentOptions from "./_components/PaymentOptions";
import Alumni from "./_components/Alumni";
import Stats from "./_components/Stats";

export const metadata = {
  title: "Home Page",
  description: "",
};
export default function Home() {
  return (
    <>
      <Hero />
      <Bootcamps />
      <Guide />
      <PaymentOptions />
      <Alumni />
      <Stats />
    </>
  );
}

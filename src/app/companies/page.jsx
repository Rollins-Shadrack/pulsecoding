import Brands from "@/components/Brands";
import Hero from "./_components/Hero";
import data from '@/constants/data.json'

export const metadata = {
  title: "Companies",
  description: "",
};
export default function Companies() {
  const { brandsSection } = data.companiespage;
  return (
    <div>
      <Hero />
      <Brands data={brandsSection} />
    </div>
  );
}

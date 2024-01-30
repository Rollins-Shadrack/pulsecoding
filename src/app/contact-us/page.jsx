import ContactForm from "./_components/ContactForm";
import Hero from "./_components/Hero";
import data from "@/constants/data.json";
export const metadata = {
  title: "Contact Us",
  description: "",
};
export default function Contact() {
  const { heroSection, ContactFormSection } = data.contactuspage;
  return (
    <div>
      <Hero data={heroSection} />
      <ContactForm data={ContactFormSection} />
    </div>
  );
}

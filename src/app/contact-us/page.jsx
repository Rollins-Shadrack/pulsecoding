import ContactForm from "./_components/ContactForm";
import Hero from "./_components/Hero";

export const metadata = {
  title: "Contact Us",
  description: "",
};
export default function Contact() {
  return (
    <div>
      <Hero />
      <ContactForm/>
    </div>
  );
}

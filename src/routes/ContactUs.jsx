import Contact from "../components/Contact";
import FAQs from "../components/FAQs";

export default function Home() {
  return (
    <>
      <Contact />
      <div className="mx-auto flex justify-center pt-10 pb-0 sm:pt-16 sm:pb-16">
        <FAQs />
      </div>
    </>
  );
}
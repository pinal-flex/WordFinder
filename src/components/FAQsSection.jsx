import QuestionTitle from "./QuestionTitle";
import FAQs from "./FAQs";

export default function FAQsSection() {
  return (
    <div className="py-0 md:py-16 flex flex-col-reverse md:flex-row justify-between">
      <QuestionTitle />
      <FAQs />
    </div>
  );
}

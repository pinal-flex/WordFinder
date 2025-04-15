import { Text } from "./ui/Text";
import { Plus, Minus } from "../icons";

export default function FAQs() {
  const faqs = [
    {
      id: 1,
      question: "Q: What is an Anagram?",
      answer: "",
    },
    {
      id: 2,
      question: "Q: Does an Anagram Have to Use All the Letters?",
      answer: "",
    },
    {
      id: 3,
      question: "Q: Which Scrabble Letter is Worth the Most?",
      answer: `Scrabble is one of the most popular word games ever made. Different letters in Scrabble have different points. The rule of thumb is that the less common is a letter the higher are the points.

That being said, in the traditional rules of Scrabble, the letters 'Q' and 'Z' have the highest points. You will get 10 points if you use 'Q' or 'Z' in your moves.

Do note that in the English version of the game you have only one 'Q' and 'Z.' In terms of point, 'J' and 'X' are right behind 'Q/Z' and gives you 8 points each.

Some websites or apps may have different points for the letters.`,
    },
    {
      id: 4,
      question: "Q: When does Scrabble End?",
      answer: "",
    },
    {
      id: 5,
      question: "Q: What's the Best Scrabble Word?",
      answer: "",
    },
    {
      id: 6,
      question: "Q: How does Words with Friends End?",
      answer: "",
    },
  ];
  return (
    <div className="md:w-2/3 space-y-6 md:pl-8">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="group border-b border-zinc-300 last:border-0 py-2 last:py-0"
        >
          <div className="flex justify-between gap-14">
            <Text
              variant="lg"
              weight="bold"
              className="text-indigo-950 tracking-3 pb-6 group-last:pb-0"
            >
              {faq.question}
            </Text>
            {faq.answer ? <Minus /> : <Plus />}
          </div>

          {faq.answer && (
            <Text
              variant="base"
              weight="medium"
              className="text-zinc-700 pb-6 whitespace-pre-line"
            >
              {faq.answer}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
}

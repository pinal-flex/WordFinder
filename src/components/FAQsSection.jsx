import Button from "./ui/Button";
import { Text } from "./ui/Text";

export default function FAQsSection() {
  const faqs = [
    {
      id:1,
      question: "Q: What is an Anagram?",
      answer:
        "Scrabble is one of the most popular word games ever made. Different letters in Scrabble have different points. The rule of thumb is that the less common is a letter, the higher are the points.That being said, in the traditional rules of Scrabble, the letters 'Q' and 'Z' have the highest points. You will get 10 points if you use 'Q' or 'Z' in your moves.Do note that in the English version of the game you have only one 'Q' and 'Z.' In terms of point, 'J' and 'X' are right behind 'Q/Z' and gives you 8 points each.Some websites or apps may have different points for the letters.",
    },
    {
      id:2,
      question: "Q: What is an Anagram?",
      answer:
        "Scrabble is one of the most popular word games ever made. Different letters in Scrabble have different points. The rule of thumb is that the less common is a letter, the higher are the points.That being said, in the traditional rules of Scrabble, the letters 'Q' and 'Z' have the highest points. You will get 10 points if you use 'Q' or 'Z' in your moves.Do note that in the English version of the game you have only one 'Q' and 'Z.' In terms of point, 'J' and 'X' are right behind 'Q/Z' and gives you 8 points each.Some websites or apps may have different points for the letters.",
    },
    {
      id:3,
      question: "Q: What is an Anagram?",
      answer:
        "Scrabble is one of the most popular word games ever made. Different letters in Scrabble have different points. The rule of thumb is that the less common is a letter, the higher are the points.That being said, in the traditional rules of Scrabble, the letters 'Q' and 'Z' have the highest points. You will get 10 points if you use 'Q' or 'Z' in your moves.Do note that in the English version of the game you have only one 'Q' and 'Z.' In terms of point, 'J' and 'X' are right behind 'Q/Z' and gives you 8 points each.Some websites or apps may have different points for the letters.",
    },
    {
      id:4,
      question: "Q: What is an Anagram?",
      answer:
        "Scrabble is one of the most popular word games ever made. Different letters in Scrabble have different points. The rule of thumb is that the less common is a letter, the higher are the points.That being said, in the traditional rules of Scrabble, the letters 'Q' and 'Z' have the highest points. You will get 10 points if you use 'Q' or 'Z' in your moves.Do note that in the English version of the game you have only one 'Q' and 'Z.' In terms of point, 'J' and 'X' are right behind 'Q/Z' and gives you 8 points each.Some websites or apps may have different points for the letters.",
    },
    {
      id:5,
      question: "Q: What is an Anagram?",
      answer:
        "Scrabble is one of the most popular word games ever made. Different letters in Scrabble have different points. The rule of thumb is that the less common is a letter, the higher are the points.That being said, in the traditional rules of Scrabble, the letters 'Q' and 'Z' have the highest points. You will get 10 points if you use 'Q' or 'Z' in your moves.Do note that in the English version of the game you have only one 'Q' and 'Z.' In terms of point, 'J' and 'X' are right behind 'Q/Z' and gives you 8 points each.Some websites or apps may have different points for the letters.",
    },
    {
      id:6,
      question: "Q: What is an Anagram?",
      answer:
        "Scrabble is one of the most popular word games ever made. Different letters in Scrabble have different points. The rule of thumb is that the less common is a letter, the higher are the points.That being said, in the traditional rules of Scrabble, the letters 'Q' and 'Z' have the highest points. You will get 10 points if you use 'Q' or 'Z' in your moves.Do note that in the English version of the game you have only one 'Q' and 'Z.' In terms of point, 'J' and 'X' are right behind 'Q/Z' and gives you 8 points each.Some websites or apps may have different points for the letters.",
    },
  ];
  return (
    <div className="py-16 flex justify-between">
      <div className="w-1/2">
        <Text className="mb-8">Got a question?</Text>
        <Button>Contact with us</Button>
      </div>
      <div className="w-1/2">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <Text>{faq.question}</Text>
            <Text>{faq.answer}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

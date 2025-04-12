import { Crosswords, WordswithFriends, UnScrabble, Scrabble } from "../icons";
import { Text } from "./ui/Text";
const cards = [
  {
    id: 1,
    title: "Words with Friends",
    description:
      "Find playable Words with Friends words from our database of 173,000+ words.",
    icon: <WordswithFriends />,
    bg: "bg-[#DAFCD7]",
  },
  {
    id: 2,
    title: "Crosswords",
    description:
      "Explore over 200,000 crossword clues and 2,000,000 answers in our crossword dictionary.",
    icon: <Crosswords />,
    bg: "bg-[#FBE0D1]",
  },

  {
    id: 3,
    title: "Unscramble Words",
    description:
      "Explore over 200,000 crossword clues and 2,000,000 answers in our crossword dictionary.",
    icon: <UnScrabble />,
    bg: "bg-[#FFD9DB]",
  },
  {
    id: 4,
    title: "Scrabble",
    description:
      "Search more than 260,000 words in our online Scrabble dictionary tool.",
    icon: <Scrabble />,
    bg: "bg-[#EDEEFF]",
  },
];
export default function GamesSection() {
  return (
    <div className="container mx-auto pt-10 sm:pt-16 pb-12 sm:pb-14">
      <div className="block sm:flex justify-between">
        <Text
          type="h2"
          variant="3xl"
          weight="semibold"
          className="max-w-md w-full text-indigo-950"
        >
          We love to help you with any words you might need.
        </Text>
        <Text
          variant="base"
          weight="medium"
          className="text-zinc-600 mt-4 tracking-tight max-w-md"
        >
          Word Squared to help you with all of your word problems and questions.
          From dictionaries and definitions to powerful word tools like
          crossword and Scrabble solvers.
        </Text>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[478px_706px] gap-10 sm:gap-4 mt-7 sm:mt-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.bg} rounded-2xl flex sm:p-5 group justify-between relative`}
          >
            <div className="mx-3.5 mb-3.5 mt-20 sm:mt-auto sm:mx-0 sm:mb-0 group-even:max-w-3xs">
              <Text
                variant="xl"
                weight="semibold"
                className="text-indigo-950 tracking-tight"
              >
                {card.title}
              </Text>
              <Text variant="sm" weight="medium" className="text-zinc-700">
                {card.description}
              </Text>
            </div>
            <div className="shrink-0 -mt-7 sm:mt-0 sm:relative absolute right-0">
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Crosswords, WordswithFriends, WordWhizzle, Scrabble } from "../icons";
const cards = [
  {
    id: 1,
    title: "Crosswords",
    description:
      "Explore over 200,000 crossword clues and 2,000,000 answers in our crossword dictionary.",
    icon: <Crosswords />,
    bg: "bg-[#FBE0D1]",
  },
  {
    id: 2,
    title: "Words with Friends",
    description:
      "Find playable Words with Friends words from our database of 173,000+ words.",
    icon: <WordswithFriends />,
    bg: "bg-[#DAFCD7]",
  },
  {
    id: 3,
    title: "Unscramble Words",
    description:
      "Explore over 200,000 crossword clues and 2,000,000 answers in our crossword dictionary.",
    icon: <WordWhizzle />,
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
export default function Section() {
  return (
    <div className="container mx-auto mt-16 mb-16">
      <div className="flex gap-80">
        <p>We love to help you with any words you might need.</p>
        <p>
          Word Squared to help you with all of your word problems and questions.
          From dictionaries and definitions to powerful word tools like
          crossword and Scrabble solvers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-4">
        {cards.map((card) => (
          <div key={card.id} className={`${card.bg} rounded-xl`}>
            <div className="flex px-5 pt-7 pb-5">
              <div>
                <p>{card.title}</p>
                <p>{card.description}</p>
              </div>
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

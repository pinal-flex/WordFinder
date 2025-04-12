import { Text } from "./ui/Text";
import { HandEmoji, HandEmojiFlag, HandEmojiWatch } from "../icons";

const features = [
  {
    id: 1,
    name: "All prepared",
    description:
      "Quickly create words from your letters, ace Scrabble, and boost your language skills effortlessly.",
    icon: <HandEmoji />,
  },
  {
    id: 2,
    name: "Saves Time",
    description:
      "Quickly create words from your letters, ace Scrabble, and boost your language skills effortlessly.",
    icon: <HandEmojiWatch />,
  },
  {
    id: 3,
    name: "It's simple",
    description:
      "Quickly create words from your letters, ace Scrabble, and boost your language skills effortlessly.",
    icon: <HandEmojiFlag />,
  },
];

export default function Features() {
  return (
    <div className="container py-16">
      <div className="py-7 sm:py-16 px-3.5 sm:px-14 bg-sky-50 rounded-4xl">
        <div className="text-center mx-auto max-w-xl">
          <Text variant="3xl" weight="extrabold" className="text-indigo-950">
            What is WordTips Word Finder?
          </Text>
          <Text variant="base" className="mt-4 text-zinc-600 tracking-2">
            Quickly create words from your letters, ace Scrabble, and boost your
            language skills effortlessly. Unveil a user-friendly tool that makes
            word solving a breeze.
          </Text>
        </div>
        <div className="flex flex-col xl:flex-row mt-5 sm:mt-12 gap-5">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 bg-white rounded-2xl">
              <div className="px-16 sm:px-24">{feature.icon}</div>
              <div className="mt-12">
                <Text>{feature.name}</Text>
                <Text>{feature.description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

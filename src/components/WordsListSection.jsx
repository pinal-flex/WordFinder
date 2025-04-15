import { DropDown, ArrowCircleDown } from "../icons";
import Button from "./ui/Button";
import { Text } from "./ui/Text";

export default function WordsListSection() {
  const filters = [
    {
      label: "Select symbol",
      active: false,
      hideOnMobile: false,
      hasDropDown: <DropDown className="ml-1" />,
    },
    {
      label: "Word starting with",
      active: false,
      hideOnMobile: false,
    },
    {
      label: "Word ending with",
      active: false,
      hideOnMobile: true,
    },
    { label: "Word length", active: true, hideOnMobile: true, border: true },
    {
      label: "Word in the middle",
      active: false,
      hideOnMobile: true,
    },
    {
      label: "Word containing",
      active: false,
      hideOnMobile: true,
    },
  ];

  const wordLists = [
    "2 Letter Words",
    "3 Letter Words",
    "4 Letter Words",
    "5 Letter Words",
    "6 Letter Words",
    "7 Letter Words",
    "8 Letter Words",
    "9 Letter Words",
    "10 Letter Words",
  ];

  return (
    <div className="py-14 sm:py-16">
      <Text
        variant="3xl"
        weight="extrabold"
        className="mb-4 sm:mb-10 text-indigo-950 text-center"
      >
        Popular lists of words
      </Text>
      <div className="flex flex-wrap justify-center gap-3 pb-6 sm:pb-8">
        {filters.map((filter, idx) => (
          <Button
            variant="outline"
            size="base"
            key={idx}
            hasDropDown={filter.hasDropDown}
            className={`rounded-xl text-sm sm:text-base flex items-center ${
              filter.active
                ? "bg-indigo-950 text-white font-semibold"
                : "bg-white text-zinc-600 font-medium"
            } ${filter.hideOnMobile ? "hidden sm:inline-flex" : ""}`}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 pb-6 sm:pb-10 px-0 lg:px-32">
        {wordLists.map((word, i) => (
          <Button
            variant="secondary"
            size="xl"
            key={i}
            className="text-indigo-950  rounded-xl text-sm sm:text-base tracking-3 flex items-center last:w-full last:mx-4 sm:last:w-auto sm:last:mx-0"
          >
            {word}
          </Button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Text variant="base" weight="bold" className="text-indigo-950">
          View more lists
        </Text>
        <ArrowCircleDown />
      </div>
    </div>
  );
}
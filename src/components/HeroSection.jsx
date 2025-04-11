import { DropDown, QuestionMark, Search } from "../icons";
import { Text } from "./ui/Text";
const buttons = [
  { text: "Starts", icon: null },
  { text: "Ends", icon: null },
  { text: "Contains", icon: null },
  { text: "Length", icon: null },
  {
    text: "All dictionaries",
    icon: <DropDown />,
  },
];

export default function HeroSection() {
  return (
    <div className="container">
      <div className="bg-[url(assets/images/mobile_background.png)] sm:bg-[url(assets/images/background.png)] bg-cover bg-center rounded-4xl">
        <div className="py-12 sm:py-16 text-center">
          <div className="max-w-xl mx-auto w-full">
            <Text
              type="h1"
              variant="6xl"
              weight="semibold"
              className="text-neutral-900/40 mx-3 sm:mx-0"
            >
              <span className="text-white">
                Word
                <sup>2</sup>
              </span>
              Dictionary and Helpers
            </Text>

            <Text
              variant="lg"
              weight="medium"
              className="text-white mt-4 sm:mt-5"
            >
              Explore a world of words with us, where assistance is just a click
              away
            </Text>
            <div className="bg-white rounded-2xl mt-7 sm:mt-12 p-4 sm:p-5 mx-3 sm:mx-0">
              <div className="flex justify-between items-center mb-3">
                <Text variant="sm" weight="medium" className="text-zinc-600">
                  Enter your letters
                </Text>
                <div className="flex items-center gap-3">
                  <div className="border-r border-zinc-300 pr-4">
                    <QuestionMark />
                  </div>
                  <Text className="hidden sm:block pl-1">Search</Text>
                  <Search fillColor="#ffffff" bgColor="bg-indigo-400" />
                </div>
              </div>
              <div className="border-t border-zinc-300 mt-4 pt-4">
                <div className="flex flex-wrap whitespace-nowrap gap-2 sm:flex-nowrap">
                  {buttons.map((button, index) => {
                    const isLast = index === buttons.length - 1;
                    return (
                      <button
                        key={index}
                        className={`
            flex items-center text-sm text-zinc-600 border border-gray-300 rounded-xl
            px-4 py-2
            ${isLast ? "w-full sm:w-auto justify-between" : "w-[48%] sm:w-full"}
          `}
                      >
                        <Text variant="sm" weight="medium">
                          {button.text}
                        </Text>
                        {button.icon && (
                          <span className="ml-1.5">{button.icon}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

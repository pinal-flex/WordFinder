import { DropDown, QuestionMark, Search } from "../icons";
import { Text } from "./ui/Text";
import Button from "./ui/Button";
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
    <div className="pb-10 pt-5">
      <div className="bg-[url(assets/images/mobile_background.png)] sm:bg-[url(assets/images/background.png)] bg-cover bg-center rounded-3xl">
        <div className="py-12 sm:py-16 text-center">
          <div className="max-w-xl mx-auto w-full">
            <Text
              type="h1"
              variant="6xl"
              weight="extrabold"
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
                <input
                  name="name"
                  type="name"
                  placeholder="Enter your letters"
                  required
                  autoComplete="name"
                  className="placeholder:text-zinc-600 w-full pr-2.5 text-sm font-medium outline-1 outline-white/10 focus:outline-2"
                />
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
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="flex items-center text-zinc-600 rounded-xl w-48 sm:w-full last:w-full last:sm:w-auto last:justify-between"
                    >
                      {button.text}
                      {button.icon && (
                        <span className="ml-1.5">{button.icon}</span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

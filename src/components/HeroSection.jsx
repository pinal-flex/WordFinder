import { DropDown, QuestionMark, Search } from "../icons";
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
      <div className="bg-[url(assets/images/background.png)] bg-cover bg-center rounded-lg">
        <div className="py-12 sm:py-16 text-center">
          <p>word Dictionary and helpers</p>
          <p className="text-white mt-5">
            Explore a world of words with us, where assistance is just a click
            away
          </p>
          <div className="mt-12 px-5 mb-16 rounded-2xl bg-white max-w-xl mx-auto w-full">
            <div className="flex py-5 justify-between items-center">
              <p>Enter your letters</p>
              <div className="flex items-center gap-3">
                <div className="border-r border-zinc-300 pr-4">
                  <QuestionMark />
                </div>
                <p className="pl-1">Search</p>
                <Search fillColor="white" bgColor="bg-indigo-400" />
              </div>
            </div>
            <div className="border-t border-zinc-300 whitespace-nowrap">
              <div className="flex-wrap sm:flex-nowrap flex gap-2 py-5">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className="py-2.5 px-3 text-sm sm:w-full w-fit rounded-xl border border-gray-300 text-gray-700 flex items-center "
                  >
                    {button.text} {button.icon && button.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

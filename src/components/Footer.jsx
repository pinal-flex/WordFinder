import { LogoFooter } from "../icons/LogoFooter";
import NavLink from "./ui/NavLink";
import { Text } from "./ui/Text";

const navigation = {
  Games: [
    { name: "Crossword", href: "#" },
    { name: "Unscramble", href: "#" },
    { name: "Scrabble", href: "#" },
    { name: "Words with Friends", href: "#" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Popular pages", href: "#" },
    { name: "Top searches", href: "#" },
    { name: "Definitions", href: "#" },
    { name: "Grammar", href: "#" },
  ],
  company: [
    { name: "Cookies", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Contact us", href: "#" },
  ],
};

export default function Footer() {
  return (
    <div className="pb-3 pt-12 md:pt-12 md:pb-12">
      <div className="md:bg-[url(assets/images/footer_background.png)] bg-[url(assets/images/footer_mobile_background.png)] bg-cover bg-center rounded-4xl">
        <div className="py-10 pr-5 md:pr-14 pl-5 md:pl-14">
          <div className="md:flex md:justify-between gap-10">
            <div className="max-w-none md:max-w-sm w-full">
              <div className="flex gap-3 items-center">
                <LogoFooter />
                <Text
                  variant="lg"
                  weight="bold"
                  className="tracking-2 text-white"
                >
                  Wordsquared
                </Text>
              </div>
              <Text
                variant="sm"
                weight="medium"
                className="pt-6 pb-10 md:pb-32 text-white/60 tracking-3 text-center sm:text-left"
              >
                From dictionaries and definitions to powerful word tools like
                crossword and Scrabble solvers, we love to help you with any
                words you might need.
              </Text>
              <Text
                variant="sm"
                weight="medium"
                className="text-white/60 tracking-3 hidden md:block"
              >
                ©2010-2023 Word Squared. All rights reserved.
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row text-center sm:text-left gap-7 md:gap-14 max-w-none md:max-w-[410px] w-full mx-auto justify-center">
              <div>
                <Text className="text-white/60 pb-3">Games</Text>
                <ul>
                  {navigation.Games.map((item) => (
                    <li key={item.name} className="py-2.5">
                      <NavLink href={item.href} className="text-white text-sm">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Text className="text-white/60 pb-3">Resources</Text>
                <ul>
                  {navigation.Resources.map((item) => (
                    <li key={item.name} className="py-2.5">
                      <NavLink href={item.href} className="text-white text-sm">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Text className="text-white/60 pb-3">company</Text>
                <ul>
                  {navigation.company.map((item) => (
                    <li
                      key={item.name}
                      className="py-2.5 [&:last-child]:hidden md:[&:last-child]:block"
                    >
                      <NavLink href={item.href} className="text-white text-sm">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Text
              variant="sm"
              weight="medium"
              className="text-white/60 px-11 tracking-3 block md:hidden pt-20"
            >
              ©2010-2023 Word Squared. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

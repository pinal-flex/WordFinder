import { Logo, Search, Menu } from "../icons";
import NavLink from "../ui/NavLink";

const navigation = [
  { name: "CrossWord ", href: "#" },
  { name: "Scrabble ", href: "#" },
  { name: "Words with Friends ", href: "#" },
  { name: "Unscramble ", href: "#" },
  { name: "More Games ", href: "#", hasDropDown: true },
];

export default function NavBar() {
  return (
    <header className="container">
      <nav className="flex justify-between py-6">
        <div className="flex items-center gap-x-6">
          <Logo />
          <li className="hidden lg:flex lg:gap-x-5 items-center">
            {navigation.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                hasDropDown={item.hasDropDown}
                className="flex items-center text-zinc-600"
              >
                {item.name}
              </NavLink>
            ))}
          </li>
        </div>

        <div className="flex gap-3 lg:gap-7 items-center">
          <a className="hidden lg:block text-zinc-600" href="#">
            Blogs
          </a>
          <Search fillColor="#000000" />
          <Menu className="lg:hidden" />
        </div>
      </nav>
    </header>
  );
}

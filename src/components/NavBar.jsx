import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Logo, Search, Menu, DropDown } from "../icons";
import NavLink from "./ui/NavLink";

const navigation = [
  { name: "CrossWord", href: "#" },
  { name: "Scrabble", href: "#" },
  { name: "Words with Friends", href: "#" },
  { name: "Unscramble", href: "#" },
  {
    name: "More Games",
    href: "#",
    hasDropDown: <DropDown className="ml-1" />,
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between py-6">
        <div className="flex items-center gap-x-6">
          <Logo />
          <ul className="hidden lg:flex lg:gap-x-5 items-center">
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
          </ul>
        </div>

        <div className="flex gap-3 lg:gap-7 items-center">
          <NavLink className="hidden lg:block text-zinc-600" href="#">
            Blogs
          </NavLink>
          <Search fillColor="#615D6C" />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden focus:outline-none"
          >
            <Menu />
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 inline-flex items-center justify-center"
            >
              <XMarkIcon className="h-6 w-6 text-zinc-600" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <NavLink
                    key={index}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  Blogs
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

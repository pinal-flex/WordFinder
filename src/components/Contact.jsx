import React from "react";
import { Text } from "../components/ui/Text";

export default function Contact() {
  return (
    <div className="pb-1.5 pt-1.5 sm:pb-10 sm:pt-5">
      <div className="bg-cover bg-center rounded-4xl py-5 sm:py-6 px-4 sm:bg-[url('assets/images/contactpage_background.png')] bg-[url('assets/images/mobile_background.png')]">
        <div className="bg-white max-w-md sm:max-w-xl flex flex-col sm:flex-row items-center rounded-3xl">
          <div className="w-full px-4 py-5 sm:px-6 sm:py-6">
            <Text
              type="h2"
              variant="2xl"
              weight="extrabold"
              className="mb-3 text-indigo-950 tracking-3"
            >
              Get in touch
            </Text>
            <Text variant="base" weight="medium" className="pb-6">
              Haven't you found what you're looking for in our FAQs? Use the
              form below to get in touch.
            </Text>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm leading-3.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm leading-3.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm leading-3.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-400 disabled:bg-indigo-300 text-white font-semibold focus:outline-none px-6 py-4 rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

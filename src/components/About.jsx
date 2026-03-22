import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedDots from "./AnimatedDots";
import MainAboutPage from "./MainAboutPage";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full min-h-[245px]  boxShadow2 flex justify-center items-center flex-col gap-5 relative">
      <h1 className="text-[20px] sm:text-2xl font-bold capitalize logo textColor2 text-center">
        If you want to Know More about me than click here
      </h1>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-zinc-900 to-orange-600
         text-white  font-semibold rounded-xl shadow-lg hover:scale-105 transition text-[15px] sm:text-[17px] "
      >
        About Me
      </button>
      <AnimatedDots position="left" />
      <AnimatedDots position="right" />

      <AnimatePresence>
        {isOpen && <MainAboutPage setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
}

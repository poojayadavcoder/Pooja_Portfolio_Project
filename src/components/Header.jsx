import { useState } from "react";
import { Link } from "react-router-dom";
import LinkArr from "../Data/linkData";
import NavItem from "./NavItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const iconClasses =
    "textColor hover:scale-110 transition-all duration-200 ease-linear text-[36px] ";
  const tooltipClasses = "tooltipText logo textShadow";

  return (
    <div className="w-full  z-50 boxShadow relative px-3">
      <header className="max-w-[1220px] px-3 mx-auto flex justify-between items-center h-[100px]">
        <h1 className="logo text-3xl text-orange-600 border border-orange-600 font-bold px-2 py-1">
          PY
        </h1>

        {/* Hamburger Menu Icon */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className={`sm:hidden text-orange-600
            } text-[28px]  cursor-pointer hover:scale-110 transition-all duration-150 z-50`}
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Desktop Nav */}
        <nav className="w-[350px] hidden sm:flex md:w-[500px] h-full justify-between items-center">
          {LinkArr.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              iconClasses={iconClasses}
              tooltipClasses={tooltipClasses}
            />
          ))}
        </nav>
      </header>
      {/* Slide-in from Right - Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 right-0 w-[200px] h-full  text-orange-600 
          transition-transform duration-500 ease-in-out z-40
           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-start px-4 py-10 gap-6 bg-black">
          {LinkArr.map((linkItem, index) => {
            const isExternal =
              linkItem.link.startsWith("http") ||
              linkItem.link.startsWith("mailto");
            return isExternal ? (
              <div className="group" key={index}>
                <a
                  key={index}
                  href={linkItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-white  group-hover:text-orange-600 transition-all 
                duration-200 ease-linear"
                >
                  {linkItem.name}
                  <span
                    className="text-white text-[15px] group-hover:text-orange-600 transition-all 
                duration-200 ease-linear"
                  >
                    {linkItem.mainName}
                  </span>
                </a>
              </div>
            ) : (
              <Link
                key={index}
                to={`/${linkItem.link}`}
                className="flex items-center gap-3 text-lg"
              >
                {linkItem.name}
                <span>{linkItem.mainName}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import PoojaImg from "/src/assets/poojaCreativeimg.png";
import LinkArr from "../Data/linkData";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MainAboutPage({ setIsOpen }) {
  console.log(setIsOpen);
  const skillArr = [
    "JavaScript",
    "React.js",
    "Next.js",
     "Node.js",
     "Express.js",
     "MongoDB",
    "Redux",
    "HTML",
    "CSS",
    "Sass",
    "Tailwind",
    "GitHub",
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className=" bg-opacity-60 fixed inset-0  min-h-[100vh] flex items-start  justify-center
              bg-opacity-60 backdrop-blur-sm z-50  overflow-y-auto lg:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-[1420px] py-[20px] md:top-[20px] lg:top-[10px] h-auto
               text-gray-100 p-2 sm:p-5 rounded-2xl shadow-2xl flex flex-col items-center"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="particles-bg"></div>
        </div>

        {/* close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-100 hover:text-orange-600 cursor-pointer"
        >
          ×
        </button>

        <div
          className="w-full h-auto flex justify-center items-center
            flex-col gap-5 mt-[50px] "
        >
          {/* <CircleGroup /> */}

          <div
            className="w-full xl:max-w-[1200px] h-auto 2xl:max-w-[1200px] 
             px-3 flex justify-start items-start gap-3 sm:gap-5 flex-col "
          >
            <h1
              className="text-[25px] sm:text-4xl font-bold logo textColor flex justify-center items-center
             gap-3 bg-red-800"
            >
              <div
                className="w-[40px] sm:w-[50px] bg-amber-800 h-auto rounded-2xl 
                overflow-hidden border-[1px] 
                border-dashed border-orange-600 "
              >
                <img
                  className="w-full h-full object-cover object-top"
                  src={PoojaImg}
                  alt=""
                />
              </div>
              About Me{" "}
            </h1>
            <div
              className="w-[150px] sm:w-[230px] h-[1px] bg-gradient-to-t from-white
             to-orange-600"
            >
              {" "}
            </div>
            <div className="w-[100px] h-[1px] bg-gradient-to-t bg-orange-600">
              {" "}
            </div>
            <h1 className="logo text-[20px] sm:text-2xl font-semibold text-gray-100 mt-1 sm:mt-5">
              I'm Pooja Yadav a,{" "}
              <span className="text-orange-600">MERN Stack Developer.</span>{" "}
            </h1>
            <p className="text-gray-100 text-[15px] sm:text-[18px] logo text-justify">
              I am a passionate MERN Stack Developer with strong experience in building modern and responsive web applications. My main focus is on creating clean, user-friendly interfaces using React.js and JavaScript, while also developing scalable backend services using Node.js, Express.js, and MongoDB.

I enjoy turning ideas into real-world products by combining good design with efficient code. Recently, I have been expanding my skills in full-stack development by building APIs, managing databases, and integrating frontend applications with backend systems.

I am always curious to learn new technologies, improve my problem-solving skills, and build applications that provide real value to users.
            </p>
            <p className="text-gray-100 text-[15px] sm:text-[18px] logo">
              Feel free to explore my {" "}
              <span className="text-orange-600">projects</span> and <span className="text-orange-600"> portfolio.</span>
             If you are looking for someone who is passionate about building modern web applications and continuously improving their skills, I would be happy to connect and collaborate.
            </p>
            <div
              className="w-full min-h-[50px] py-4 flex justify-start flex-wrap 
              md:flex-nowrap items-start gap-3 lg:gap-5 "
            >
              {skillArr.map((skillItem, index) => (
                <h1
                  className="text-gray-100 
                px-2 sm:px-3 py-[8px] sm:py-2 text-[14px] sm:text-[16px]
                rounded-2xl boxShadow2 transform  hover:rotate-360 transition-all 
                duration-500
                ease-initial"
                  key={index}
                >
                  {skillItem}
                </h1>
              ))}
            </div>
            <h1 className="text-[18px] sm:text-[23px] text-gray-100 logo">
              <span className="text-orange-600 px-1 py-1">
                “Learning never exhausts the mind.”
              </span>
              - Its My Opinion
            </h1>

            <div className="max-w-[500px] h-auto flex justify-start items-start gap-6">
              {LinkArr.map((linkItem, index) => {
                const isExternal =
                  linkItem.link.startsWith("http") ||
                  linkItem.link.startsWith("mailto");
                return isExternal ? (
                  <a
                    key={index}
                    href={linkItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 text-[23px] sm:text-[27px]  rounded-[50%] 
                      border-[1px] border-dashed my-1 xl:my-3 transform hover:scale-125 transition-all duration-200 ease-initial

                     border-orange-600 px-[7px] sm:px-[10px] py-[1px]"
                  >
                    {linkItem.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={`/${linkItem.link}`}
                    className=" text-[25px] "
                  >
                    {linkItem.name}
                  </Link>
                );
              })}
            </div>
            <button
              onClick={() => {
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsOpen(false);
                }, 400);
                // Wait for animation to finish
              }}
              className="text-orange-600 font-semibold hover:text-gray-100
    hover:bg-orange-600 transition-all duration-100 cursor-pointer mt-1 xl:mt-3 
    px-2 sm:px-3 py-[4px] sm:py-2 rounded-2xl border-[1px] border-dashed text-[16px] 
    sm:text-[18px] border-orange-100 z-10"
            >
              Hire Me
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

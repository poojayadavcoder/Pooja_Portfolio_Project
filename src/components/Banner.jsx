import Circle from "./Circle";
import Img from "/src/assets/orangeParticles.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ThreeCanvas from "./ThreeCanvas";

export default function Banner() {
  const circles = [
    {
      borderColor: "border-orange-500",
      zIndex: 1,
      size: "w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[450px] lg:h-[450px]",
    },
    {
      borderColor: "border-gray-100",
      zIndex: 2,
      size: "w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]",
    },
    {
      borderColor: "border-orange-500",
      zIndex: 5,
      size: "w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] lg:w-[350px] lg:h-[350px]",
    },
    {
      borderColor: "border-gray-100",
      zIndex: 7,
      size: "w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px]",
    },
    {
      borderColor: "border-orange-500",
      zIndex: 8,
      size: "w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] lg:w-[250px] lg:h-[250px]",
    },
  ];

  return (
    <div
      className="w-[100%] h-[550px] sm:h-[600px] relative overflow-hidden flex
     justify-start items-center pt-[150px] gap-3 flex-col"
    >
      <ThreeCanvas />

      {circles.map((circle, index) => (
        <Circle
          key={index}
          borderColor={circle.borderColor}
          zIndex={circle.zIndex}
          className={circle.size}
        />
      ))}

      <div
        className="w-[200px]  md:w-[250px] h-[130px] md:h-[150px] overflow-hidden 
       absolute -right-[50px] top-[0px] rotate-0 md:rotate-90"
      >
        <LazyLoadImage
          src={Img}
          effect="blur"
          wrapperClassName="w-[200px] md:w-[250px] h-[130px] md:h-[200px]"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=Image+Not+Found";
          }}
        />
        <div className="w-full h-full absolute top-0 left-0 backgroundColor "></div>
      </div>

      <h1
        className="text-[32px] sm:text-[40px] md:text-[43px] lg:text-[45px] xl:text-5xl mt-4 md:m-0 p-0 logo tracking-wide leading-tight textShadow
       text-gray-100 text-center  font-semibold"
      >
        MERN Stack Developer <span className="text-teal-800 font-bold"></span>
      </h1>

      <p
        className="text-[32px] sm:text-[40px] md:text-[43px] lg:text-[45px] xl:text-5xl 
      m-0 p-0 leading-8 md:leading-10 logo text-orange-600 font-semibold uppercase"
      >
        Pooja Yadav
      </p>

      <button
        className="border-[1px] cursor-pointer mt-2 btnShadow border-orange-500 rounded-[5px]
        text-[15px] sm:text-[17px] lg:text-xl px-2 sm:px-2 md:px-3 py-2 text-gray-100 logo
        hover:bg-gray-100  hover:text-orange-600 transition-all duration-300 ease-in-out "
        onClick={() =>
          window.open("https://www.linkedin.com/in/pooja-pro/", "_blank")
        }
      >
        Let's Connect With Me
      </button>
    </div>
  );
}

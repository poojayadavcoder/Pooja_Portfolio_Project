export default function AnimatedDots({ position }) {
  const delays = ["0ms", "200ms", "400ms"];

  return (
    <div
      className={`w-[100px] sm:w-[150px] lg:w-[300px] h-[50px] sm:h-[100px] flex justify-center items-center gap-5 absolute ${position}-0 bottom-0`}
    >
      {delays.map((delay, index) => (
        <div
          key={index}
          className="w-3 h-3 sm:w-4 sm:h-4 border-[2px] border-orange-600 border-dotted rounded-[50%] animationClass"
          style={{ animationDelay: delay }}
        ></div>
      ))}
    </div>
  );
}

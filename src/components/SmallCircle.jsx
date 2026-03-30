export default function SmallCircle({ leftPosition }) {
  return (
    <div
      className={`w-[300px] flex justify-center items-center flex-col
     gap-2 absolute  bottom-0`}
      style={{ left: leftPosition }}
    >
      <div
        className="w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%]
     animationClass2"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%]
     animationClass2"
        style={{ animationDelay: "200ms" }}
      ></div>
      <div
        className="w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] 
    animationClass2"
        style={{ animationDelay: "400ms" }}
      ></div>
      <div
        className="w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] 
    animationClass2"
        style={{ animationDelay: "600ms" }}
      ></div>
      <div
        className="w-4 h-4  border-[2px] border-orange-600 border-dotted rounded-[50%] 
    animationClass2"
        style={{ animationDelay: "800ms" }}
      ></div>
    </div>
  );
}

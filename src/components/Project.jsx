export default function Project({ projectImg, projectName, onClick }) {
  return (
    <div
      onClick={onClick}
      className="max-w-[380px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] w-full border-[1px]
       border-dashed border-y-orange-600
      border-x-white h-[220px] lg:h-[250px] sm:h-[250px] rounded-2xl flex justify-center 
      px-3 
      items-center relative group cursor-pointer hover:scale-105 transition-all
      duration-300"
    >
      <div
        className="absolute -top-[60px] text-[16px]
       text-gray-100  font-semibold flex justify-center items-center px-3 py-1
       rounded-md opacity-0 translate-y-[10px] boxShadow3 
       group-hover:opacity-100 group-hover:translate-y-1 transition-all
       duration-300 z-10"
      >
        {projectName}
      </div>

      <div
        className=" max-w-[360px] sm:max-w-[300px] lg:max-w-[380px] w-full 
       h-[200px] sm:h-[230px] rounded-2xl overflow-hidden"
      >
        <img
          src={projectImg}
          className="w-full h-full object-cover object-top"
          alt={projectName}
        />
      </div>
    </div>
  );
}

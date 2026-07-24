
export default function Circle({ borderColor, zIndex, className = "" }) {
  return (
    <div
      className={`absolute  -left-[100px] bottom-[-80px] sm:bottom-[-100px] rounded-full border circleColor2
         border-dashed ${borderColor} ${className}`}
      style={{
        zIndex: zIndex,
      }}
    ></div>
  );
}
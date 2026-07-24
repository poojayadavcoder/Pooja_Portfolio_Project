
export default function Circle2({ borderColor, zIndex, className = "" }) {
  return (
    <div
      className={`absolute  rounded-full
         border circleColor3
         border-dashed ${borderColor} ${className}`}
      style={{
        zIndex: zIndex,
      }}
    ></div>
  );
}
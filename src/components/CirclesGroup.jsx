// components/CirclesGroup.jsx
import React from "react";
import Circle2 from "./Circle2";

const circleConfigs = [
  {
    borderColor: "border-orange-600",
    zIndex: 2,
    className: "w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[300px] lg:h-[300px]",
    position: "left-[-80px] bottom-[-80px] lg:left-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-100",
    zIndex: 1,
    className: "w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px]",
    position: "left-[-80px] bottom-[-80px] lg:left-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-600",
    zIndex: 8,
    className: "w-[160px] h-[160px] md:w-[160px] md:h-[160px] lg:w-[260px] lg:h-[260px]",
    position: "left-[-80px] bottom-[-80px] lg:left-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-100",
    zIndex: 5,
    className: "w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]",
    position: "left-[-80px] bottom-[-80px] lg:left-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-600",
    zIndex: 2,
    className: "w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]",
    position: "left-[-80px] bottom-[-80px] lg:left-[-130px] lg:bottom-[-130px]",
  },

  {
    borderColor: "border-orange-600",
    zIndex: 2,
    className: "w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[300px] lg:h-[300px]",
    position: "right-[-80px] bottom-[-180px] lg:right-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-100",
    zIndex: 1,
    className: "w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px]",
    position: "right-[-80px] bottom-[-80px] lg:right-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-600",
    zIndex: 8,
    className: "w-[160px] h-[160px] md:w-[160px] md:h-[160px] lg:w-[260px] lg:h-[260px]",
    position: "right-[-80px] bottom-[-80px] lg:right-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-100",
    zIndex: 5,
    className: "w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]",
    position: "right-[-80px] bottom-[-80px] lg:right-[-130px] lg:bottom-[-130px]",
  },
  {
    borderColor: "border-orange-600",
    zIndex: 2,
    className: "w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]",
    position: "right-[-80px] bottom-[-80px] lg:right-[-130px] lg:bottom-[-130px]",
  },
];

export default function CirclesGroup() {
  return (
    <>
      {circleConfigs.map((circle, index) => (
        <Circle2
          key={index}
          borderColor={circle.borderColor}
          zIndex={circle.zIndex}
          className={`absolute ${circle.position} ${circle.className}`}
        />
      ))}
    </>
  );
}




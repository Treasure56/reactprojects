"use client";
import { useState } from "react";

export default function Rainbowlight() {
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const change = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex < 6 ? previousIndex + 1 : 0
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-60 h-60 rounded-full shadow-lg shadow-black mt-20"
        onClick={change}
        style={{ backgroundColor: rainbowColors[currentIndex] }}
      ></div>
    </div>
  );
}

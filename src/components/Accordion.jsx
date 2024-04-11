"use client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

export default function Accordion({ title, text }) {
  const [accordionOpen, setAccordion] = useState(false);
  return (
    <div className=" w-1/2 container mx-auto p-4   bg-dark dark:border-neutral-800 dark:bg-neutral-800">
      <button
        onClick={() => setAccordion(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="mb-0  text-2xl text-white">{title}</span>

        {accordionOpen ? (
          <span className="mb-0 text-white ">
            <FaChevronDown />
          </span>
        ) : (
          <span className="mb-0 text-white ">
            <FaChevronUp />
          </span>
         
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >   <hr />
        <div className={!accordionOpen ? "hidden" : ""}>{text} </div>
      </div>
    </div>
  );
}



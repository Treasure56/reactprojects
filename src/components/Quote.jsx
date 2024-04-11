"use client";
import { useState, useEffect } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const data = await response.json();
      setQuote(data[0].content);
      // console.log("Quote updated:", data.content);
      console.log(data);
      // alert(data)
    } catch (erro) {
      console.error("erro fetching random quotes:", erro);
    }
  };

  return (
    <div className="flex items-center justify-center">
    <div className="container bg-blue-500 w-1/2 rounded-lg h-80 flex flex-col items-center justify-center mx-auto p-7 mt-40 shadow-md">
      <h1 className="text-md text-white">{quote}</h1>
      
      <button
        className="bg-blue-400 flex items-center justify-center text-white py-2 px-4 rounded-md mt-4"
        onClick={getRandomQuote}
      >
        Generate Random Quote
      </button>
    </div>
  </div>
  

  );
}

"use client";
import { useState } from "react";

import NumberCards from "@/components/NumberCards";



export default function Type() {

    const [inputText, setText] = useState('');
    
     function countVowels(vowel){
        return  inputText.toLowerCase().split(vowel).length -1 
     }
  return (
    <div className=" container mx-auto bg-red-100v flex flex-wrap flex-col items-center justify-center h-screen   ">
      <div className="flex flex-wrap gap-4  w-full justify-center items-center">

        {
            vowels.map(vowel =>  <NumberCards title={vowel.toUpperCase() + vowel} number={countVowels(vowel)} />)
        }
         
      </div>

      <textarea
        className="w-1/2 h-32 p-2 border rounded-md resize-none  mt-10"
        placeholder="Enter your text here..." onChange={ e => setText(e.target.value)}
      ></textarea>
    </div>
  );
}

const vowels = ["a", "e", "i", "o", "u"]

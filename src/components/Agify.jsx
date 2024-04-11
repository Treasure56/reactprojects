"use client"
import { useState} from "react";


export default function Agify() {

    const [name, setName] = useState("");
    const [age, setAge,] = useState(null);
    const [searchCount, setSearchCount] = useState(null);
    const getAge = async () => {
        try{
            const response = await fetch(`https://api.agify.io?name=${name}`);
            const data = await response.json();
             setAge(data.age);
             setSearchCount(data.count)
            console.log(data);
        }catch (error){
            console.error("error getting age")
        }
    };
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className=" border  bg-slate-200 justify-center items-center w-1/3 h-auto mt-40 rounded-lg p-7">
        <h1 className="text-base">{name && age !== null ? `${name} is ${age} years old` : ''} </h1>
        <h5 className="font-thin"> {searchCount !== null? `${searchCount} people searched for ${name}` : ''}</h5>
        <input
          className="rounded-lg p-2  w-full mt-4  "
          type="text"
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={getAge} className="bg-slate-400 flex items-center justify-center text-white py-2 p-4 w-full rounded-md mt-4">
          Search
        </button>
      </div>
    </div>
  );
}

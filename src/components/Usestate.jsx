"use client";
import { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);

  return (
    <div className="practice">
      <h1>Count: {count}</h1>
      <button
        className="bg-primary text-light rounded-full p-3"
        onClick={() => setCount(count + 1)}
      >
        Increament
      </button>
      <button
        className="bg-primary text-light rounded-full p-3"
        onClick={() => setCount(count - 1)}
      >
        Decreament
      </button>
    </div>
  );
}

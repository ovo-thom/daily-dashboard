"use client";
import { useEffect, useState } from "react";

export default function Timer() {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

   useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (inputMinutes > 0) {
      setTimeLeft(inputMinutes * 60);
      setIsRunning(true);
    }
  };


  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
    
      className="flex justify-center items-center space-x-4"
    >
      <input
        type="number"
        min={1}
        placeholder="minuteur"
        value={inputMinutes}
        onChange={(e) => setInputMinutes(Number(e.target.value))}
        disabled={isRunning}
        className="border rounded pl-2 py-1 w-[25%] outline-none text-base"
      />

      {isRunning ? (
        <button
          type="button"
          onClick={() => setIsRunning(false)}
          className="bg-red-400 hover:bg-red-500 py-1 px-2 rounded-lg text-lg"
        >
          Arrêter
        </button>
      ) : (
        <button
          type="submit"
          onClick={handleStart}
          className="bg-green-400 hover:bg-green-500 py-1 px-2 rounded-lg text-lg"
        >
          Démarrer
        </button>
      )}

      <p className="text-xl font-mono">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
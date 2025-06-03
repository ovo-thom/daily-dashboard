"use client";
import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // Ref pour stocker l’intervalle

  const handleStart = (e) => {
    e.preventDefault();

    if (timeLeft === 0) {
      const totalSeconds = parseInt(inputMinutes) * 60;
      if (!isNaN(totalSeconds) && totalSeconds > 0) {
        setTimeLeft(totalSeconds);
      } else {
        return;
      }
    }

    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  // Gère le décompte
  useEffect(() => {
    if (isRunning && intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    if (!isRunning && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Nettoyage
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <form
      onSubmit={handleStart}
      className="flex justify-center items-center space-x-4"
    >
      <input
        type="number"
        min={1}
        placeholder="minuteur"
        value={inputMinutes}
        onChange={(e) => setInputMinutes(e.target.value)}
        className="border rounded pl-2 py-1 w-[25%] outline-none text-base"
      />

      {isRunning ? (
        <button
          type="button"
          onClick={handleStop}
          className="bg-red-400 hover:bg-red-500 py-1 px-2 rounded-lg text-lg"
        >
          Arrêter
        </button>
      ) : (
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 py-1 px-2 rounded-lg text-lg"
        >
          Démarrer
        </button>
      )}

      <p className="text-xl font-mono">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </form>
  );
}

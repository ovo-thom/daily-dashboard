"use client";
import { useEffect, useState, useRef } from "react";

export default function Timer() {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);

  const audioRef = useRef(null);

  const initAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/alarm.mp3");
    }
  };

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            setTimerFinished(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Ce useEffect joue le son quand le timer atteint 0 et s'arrête
  useEffect(() => {
    if (timerFinished && audioRef.current)  {
      audioRef.current.currentTime = 0; // Remet au début si besoin
      audioRef.current.play().catch((err) => {
        console.warn("Lecture audio bloquée :", err);
      });
    }
  }, [timeLeft, isRunning]);

  const handleStart = () => {
    initAudio();
    setTimerFinished(false);
    if (timeLeft === 0 && inputMinutes > 0) {
      setTimeLeft(inputMinutes * 60);
      setIsRunning(true);
    } else if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleClear = () => {
    setTimeLeft(0);
    setTimerFinished(false); 
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center items-center space-x-4">
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
          className="bg-green-400 hover:bg-green-500 py-1 px-2 rounded-lg text-medium cursor-pointer"
        >
          Démarrer
        </button>
      )}
      {!isRunning && timeLeft > 0 && (
        <button
          onClick={handleClear}
          className="bg-red-400 hover:bg-red-500 py-1 px-2 rounded-lg text-lg cursor-pointer"
        >
          Effacer
        </button>
      )}

      <p className="text-xl font-mono">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>

      {timerFinished && audioRef.current && (
        <button
          onClick={() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setTimerFinished(false);
          }}
          className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 font-semibold text-base rounded-lg cursor-pointer"
        >
          Arrêter
        </button>
      )}
    </div>
  );
}
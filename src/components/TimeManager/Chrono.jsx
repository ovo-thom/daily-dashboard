import { useState, useEffect } from "react";

export default function Chrono() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const centiSeconds = Math.floor((time % 1000) / 10);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex justify-center space-x-4 items-center">
      {isRunning ? (
        <button
          onClick={() => setIsRunning(false)}
          className="bg-red-400 hover:bg-red-500 py-1 px-2 rounded-lg text-lg"
        >
          Arrêter
        </button>
      ) : (
        <button
          onClick={() => setIsRunning(true)}
          className="bg-green-400 hover:bg-green-500 py-1 px-2 rounded-lg text-medium"
        >
          Démarrer
        </button>
      )}
      {!isRunning && time > 0 && (
        <button
          onClick={() => setTime(0)}
          className="bg-red-400 hover:bg-red-500 py-1 px-2 rounded-lg text-medium"
        >
          Effacer
        </button>
      )}
      <div>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {centiSeconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
}

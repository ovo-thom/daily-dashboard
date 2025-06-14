import { useState, useEffect } from "react";
import Button from "../Button";

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
        <Button variant="stop" onClick={() => setIsRunning(false)}>
          Arrêter
        </Button>
      ) : (
        <Button variant="default" onClick={() => setIsRunning(true)}>
          Démarrer
        </Button>
      )}
      {!isRunning && time > 0 && (
        <Button variant="delete" onClick={() => setTime(0)}>
          Effacer
        </Button>
      )}
      <div>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {centiSeconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
}

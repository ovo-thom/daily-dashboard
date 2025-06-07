"use client";
import { useState, useEffect, useRef } from "react";
import { GiAlarmClock } from "react-icons/gi";

export default function Alarm() {
  const [alarmTime, setAlarmTime] = useState("");
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);
  const [alarmActivated, setAlarmActivated] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);

      if (currentTime === alarmTime && alarmActivated) {
        setIsAlarmTriggered(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmTime, alarmActivated]);

  useEffect(() => {
    if (isAlarmTriggered && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Playback failed:", err);
      });
    }
  }, [isAlarmTriggered]);

  const handleStopAlarm = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsAlarmTriggered(false);
    setAlarmActivated(false);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => {
          setAlarmTime(e.target.value);
          setIsAlarmTriggered(false);
          setAlarmActivated(false);
        }}
        className="border px-2 py-1 rounded"
      />

      {isAlarmTriggered ? (
        <button
          onClick={handleStopAlarm}
          className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-lg text-sm"
        >
          🔕 Désactiver 
        </button>
      ) : (
        <button
          onClick={() => {
            if (alarmTime) {
              setAlarmActivated(true);
              setIsAlarmTriggered(false);
            }
          }}
          className={`py-1 px-2 rounded-lg text-base font-normal text-white ${
            alarmActivated ? "border border-green-300" : "bg-green-400 hover:bg-green-300"
          }`}
        >
          {alarmActivated
            ? `Alarme activée pour ${alarmTime}`
            : "Activer l'alarme"}
            
        </button>
      )}

      {isAlarmTriggered && (
        <div className="bg-gray-100 text-red-600 py-1 px-2 rounded-lg text-sm">
          🔔 Alarme ! Il est {alarmTime}
        </div>
      )}

      <audio ref={audioRef} src="/gto.mp3" preload="auto" />
    </div>
  );
}


// ⏰
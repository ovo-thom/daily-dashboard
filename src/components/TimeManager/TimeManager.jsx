"use client";
import { useState } from "react";
import { FaStopwatch, FaBell, FaHourglassHalf } from "react-icons/fa";

import Clock from "./Clock";
import Chrono from "./Chrono";
import Alarm from "./Alarm";
import Timer from "./Timer";

export default function TimeManager() {
  const [activeTab, setActiveTab] = useState("alarm");

  return (
    <div className="col-span-1 md:col-span-2 bg-black/10 backdrop-blur-xl text-gray-200 font-bold p-4 rounded-2xl space-y-4">
      <>
        <Clock />
      </>

      <div className="flex justify-evenly items-center text-2xl">
        <button
          onClick={() => setActiveTab("alarm")}
          className={`p-2 rounded-full cursor-pointer ${
            activeTab === "alarm" ? "bg-white text-black" : ""
          }`}
        >
          <FaBell className="text-gray-200" />
        </button>
        <button
          onClick={() => setActiveTab("chrono")}
          className={`p-2 rounded-full cursor-pointer ${
            activeTab === "chrono" ? "bg-white text-black" : ""
          }`}
        >
          <FaStopwatch className="text-blue-300" />
        </button>
        <button
          onClick={() => setActiveTab("timer")}
          className={`p-2 rounded-full cursor-pointer ${
            activeTab === "timer" ? "bg-white text-black" : ""
          }`}
        >
          <FaHourglassHalf className="text-green-300" />
        </button>
      </div>
      <div>
        <div style={{ display: activeTab === "alarm" ? "block" : "none" }}>
          <Alarm />
        </div>
        <div style={{ display: activeTab === "chrono" ? "block" : "none" }}>
          <Chrono />
        </div>
        <div style={{ display: activeTab === "timer" ? "block" : "none" }}>
          <Timer />
        </div>
      </div>
    </div>
  );
}

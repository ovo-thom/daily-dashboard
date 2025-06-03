"use client";
import { useState } from "react";
import { FaClock, FaStopwatch, FaBell, FaHourglassHalf } from "react-icons/fa";

import Clock from "./Clock";
import Chrono from "./Chrono";
import Alarm from "./Alarm";
import Timer from "./Timer";

const tabComponents = {
  alarm: <Alarm />,
  chrono: <Chrono />,
  timer: <Timer />,
};

export default function TimeManager() {
  const [activeTab, setActiveTab] = useState("clock");

  return (
    <div className="col-span-1 md:col-span-2 bg-black/10 backdrop-blur-xl text-gray-200 font-bold p-4 rounded-lg space-y-4">
      <div className="">
        <Clock />
      </div>

      <div className="flex justify-evenly items-center text-2xl">
        {/* <button
          onClick={() => setActiveTab("clock")}
          className={`p-2 rounded-full ${
            activeTab === "clock" ? "bg-white text-black" : ""
          }`}
        >
          <FaClock />
        </button> */}
        <button
          onClick={() => setActiveTab("alarm")}
          className={`p-2 rounded-full cursor-pointer ${
            activeTab === "alarm" ? "bg-white text-black" : ""
          }`}
        >
          <FaBell />
        </button>
        <button
          onClick={() => setActiveTab("chrono")}
          className={`p-2 rounded-full cursor-pointer ${
            activeTab === "chrono" ? "bg-white text-black" : ""
          }`}
        >
          <FaStopwatch />
        </button>
        <button
          onClick={() => setActiveTab("timer")}
          className={`p-2 rounded-full cursor-pointer ${
            activeTab === "timer" ? "bg-white text-green-300 border border-green-300" : ""
          }`}
        >
          <FaHourglassHalf />
        </button>
      </div>
      <div>{tabComponents[activeTab]}</div>
    </div>
  );
}

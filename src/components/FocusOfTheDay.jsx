"use client";

import { useState, useEffect } from "react";
import { GiMultipleTargets } from "react-icons/gi";
import DrawOutlineButton from "./DrawOutlineButton";


export default function FocusOfTheDay() {
  const [focus, setFocus] = useState("");
  const [submittedFocus, setSubmittedFocus] = useState("");

  useEffect(() => {
    const savedFocus = localStorage.getItem("focusOfTheDay");
    if (savedFocus) {
      setSubmittedFocus(savedFocus);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFocus(focus);
    localStorage.setItem("focusOfTheDay", focus);
    setFocus("");
  };
  return (
    <div className="col-span-1 md:col-span-3 flex flex-col justify-center items-center font-bold bg-black/15 backdrop-blur-xl text-gray-200 w-full rounded-3xl p-3">
      <div className="flex items-center space-x-3">
<h1 className="text-base font-semibold tracking-widest sm:text-lg md:text-xl lg:text-2xl text-center">
        Focus du jour 
      </h1>
      <GiMultipleTargets className="text-3xl text-blue-500" />
      </div>
      
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full flex justify-center items-baseline my-2 space-x-3 flex-wrap">
          <input
            type="text"
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            placeholder="Quel est ton objectif aujourd'hui ?"
            className="border rounded-lg h-10 p-2 placeholder-gray-200 font-light text-sm focus:outline-none focus:ring-2 focus:border-none focus:ring-white w-full max-w-xl"
          />
          <DrawOutlineButton type="submit">Go !</DrawOutlineButton>
          {/* <button
            type="submit"
            className="py-1 px-3 border rounded-lg cursor-pointer mt-5 md:mt-0"
          >
            Go !
          </button> */}
        </div>
      </form>
      {submittedFocus && (
        <div className="w-full flex items-baseline justify-center">
          <div className=" text-center text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl flex items-baseline justify-center">
            <p className=" text-lg text-gray-200 font-medium">Ton focus du jour :</p>
            <p className="font-normal text-base text-green-300 ml-2">{submittedFocus}</p> 
          </div>
          <div className=" flex items-center justify-center ml-2">
            <button
              onClick={() => {
                setSubmittedFocus("");
                localStorage.removeItem("focusOfTheDay");
              }}
              className="h-6 w-6 hover:border-red-500 text-sm hover:text-red-400 duration-300 rounded-lg border text-gray-200 cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

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
    <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center font-bold bg-white/10 backdrop-blur-xl text-gray-950 w-full rounded-2xl p-3">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
        Focus du jour 🎯
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full flex justify-center items-baseline my-2 space-x-3 flex-wrap">
          <input
            type="text"
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            placeholder="Quel est ton objectif aujourd'hui ?"
            className="border rounded-lg h-10 p-2 placeholder-emerald-100 focus:outline-none focus:ring-2 focus:border-none focus:ring-white w-full max-w-xl"
          />
          <button
            type="submit"
            className="p-2 border rounded-lg cursor-pointer mt-5 md:mt-0"
          >
            Go !
          </button>
        </div>
      </form>
      {submittedFocus && (
        <div className="flex items-baseline justify-center">
          <p className="text-center text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            <strong>Ton focus du jour : {submittedFocus} 🎯</strong>
          </p>
          <div className=" flex items-center justify-center ml-2">
            <button
              onClick={() => {
                setSubmittedFocus("");
                localStorage.removeItem("focusOfTheDay");
              }}
              className="h-7 w-7 rounded-lg border text-red-500 cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

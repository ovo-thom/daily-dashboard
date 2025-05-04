"use client"

import { useState } from "react";

export default function FocusOfTheDay() {

    const [focus, setFocus] = useState("");
  return (
    <div className="col-span-1 md:col-span-2 bg-blue-600 text-white w-full">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
          Focus du jour
        </h1>
            <form>
        <div className="w-full flex justify-center items-baseline my-4 space-x-3">
          <input
            type="text"
            onChange={(e) => setFocus(e.target.value)}
            value={focus}
            placeholder="Quel est ton objectif aujourd'hui ?"
            className="border rounded-lg h-10 p-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-white w-full max-w-xl"
          />
          <button type="submit" className="p-2 border rounded-lg cursor-pointer ">Go !</button>
        </div>
          </form>
        <p>{focus}</p>
      </div>
  )
}
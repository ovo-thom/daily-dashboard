import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  variant = "default",
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={clsx(
        // classes communes
        "py-1 px-2 rounded-lg text-lg font-light text-medium cursor-pointer transition-colors duration-300",

        // variantes correspondant aux styles
        {
          default: "text-white border border-green-300 hover:bg-green-300",
          stop: "bg-red-400 hover:bg-red-500 text-white py-1 px-2 rounded-lg text-sm",
          delete:
            "bg-red-600 hover:bg-red-700 text-white font-semibold text-base",
        }[variant],

        className // pour ajouter des classes spécifiques si besoin
      )}
    >
      {children}
    </button>
  );
}

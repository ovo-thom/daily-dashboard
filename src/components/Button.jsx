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
        "py-1 px-2 rounded-lg text-lg font-light text-medium cursor-pointer transition-colors duration-300",

        {
          default: "text-white border border-green-300 hover:bg-green-300",
          stop: "bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg text-sm md:text-base",
          delete:
            "bg-red-400 hover:bg-red-500 text-white text-base",
        }[variant],

        className
      )}
    >
      {children}
    </button>
  );
}

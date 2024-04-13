import Link from "next/link";
import React from "react";

const Button = ({
  background = "bg-primary",
  textColor = "text-white",
  width = "w-auto",
  borderRadius = "rounded-xl",
  text,
  classNames,
  to,
  icon,
  onClick,
}) => {
  return (
    <div className="w-auto">
      <Link
        href={to}
        className={`px-4 py-4 ${width} text-[12px] lg:text-base font-medium  text-center flex items-center justify-center cursor-pointer  border border-primary hover:border-gold  hover:bg-gold hover:text-black ${textColor} ${borderRadius} ${classNames} ${background}`}
        onClick={onClick}>
        {icon} <span className={`${icon ? "ml-2" : "ml-0"}`}>{text}</span>
      </Link>
    </div>
  );
};

export default Button;

import React from "react";
import { cn } from "@/lib/utils";

const Button = ({  className,  text, icon }) => {
  const buttonClasses = cn(className, "py-2 px-6 transition-all duration-300 rounded-2xl whitespace-nowrap text-base ");

  return <button className={buttonClasses}>{icon && <icon className="w-5 h-5 mr-2"/> } {text}</button>;
};

export default Button;


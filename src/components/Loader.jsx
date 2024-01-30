import React from "react";
import { Command } from "lucide-react";

const Loader = () => {
  return (
    <div className={"flex justify-center items-center  w-full"}>
      <svg className={"w-24 h-24 text-brandPrimary animate-spin"} viewBox="0 0 24 24">
        <Command />
      </svg>
    </div>
  );
};

export default Loader;

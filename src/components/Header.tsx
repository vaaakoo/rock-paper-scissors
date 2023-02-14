import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    // <h1 className="text-2xl md:text-6xl font-extrabold text-slate-300">
    //   Rock-Paper-Scissors
    // </h1>
    <div className="max-w-5xl p-3 mx-auto flex items-center">
    <Image src={'/Rock-Paper-Scissors.png'} alt="RPS" width={"500"} height={200}  className="w-full shadow-2xl"/>
    </div>
  );
};

export default Header;

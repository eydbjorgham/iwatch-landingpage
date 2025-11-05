'use client';
import { useState } from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import SearchBuy from "./components/SearchBuy";
import PerfectMoment from "./components/PerfectMoment";
import Button from "./components/Button";
import Watches from "./components/Watches";
import Circles from "./components/Circles";


export default function Home() {
  const [activeWatch, setActiveWatch] = useState("navy");
  const [currentWatch, setCurrentWatch] = useState("navy");

    const watchImages = {
      navy: "/navy.png",
      mint: "/mint.png",
      pink: "/ocean.png",
    };

  return (
    <div className="grid-container">
      <div className="navbar">
        <Logo />
        <Navbar />
        <SearchBuy />
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 ml-10 self-center text-6xl leading-20 text-white">
        <PerfectMoment />
      </div>
      <div className="text-center text-white text-xl font-bold pt-3 border-5 col-1 row-2 ml-10 h-[65px] w-[230px] self-end rounded-full border-white bg-inherit hover:bg-white transition duration-200 ease-in-out">
        <Button />
      </div>
      <div className="col-start-2 col-end-3 row-start-2">
        <Image
          src={watchImages[activeWatch]}
          alt={`${activeWatch} watch`}
          width={500}
          height={500}
        />
      </div>
      <div className="col-3 row-2 self-center">
        <Circles onWatchChange={setActiveWatch} currentWatch={activeWatch} />
      </div>
      <div className="col-2 row-4">
        <Watches onWatchChange={setActiveWatch} currentWatch={activeWatch} />
      </div>
    </div>
  );
}

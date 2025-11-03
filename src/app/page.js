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
      <div className="perfect-moment">
        <div className="perfect-moment-text">
          <PerfectMoment />
        </div>
          <Button />
        <div className="watch-section"> 
        <Image 
          src={watchImages[activeWatch]} 
          alt={`${activeWatch} watch`} 
          width={500} 
          height={500} />
          </div> 
          <Circles 
          onWatchChange={setActiveWatch} 
          currentWatch={activeWatch} />
      </div>
      <Watches onWatchChange={setActiveWatch} currentWatch={activeWatch} />
    </div>
  );
}

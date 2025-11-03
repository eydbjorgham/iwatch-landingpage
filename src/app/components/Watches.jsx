"use client";
import { useState } from "react";

import Image from "next/image";
import Navywatch from "./Navywatch";
import Mintwatch from "./Mintwatch";
import Oceanwatch from "./Oceanwatch";

const Watches = ({ onWatchChange, currentWatch}) => {
  const [activeWatch, setActiveWatch] = useState("navy");
  
  return (
    <div className="watches-section">
      <div className="navywatch" onClick={() => onWatchChange("navy")}>
        <Navywatch />
      </div>
      <div className="mintwatch" onClick={() => onWatchChange("mint")}>
        <Mintwatch />
      </div>
      <div className="oceanwatch" onClick={() => onWatchChange("pink")}>
        <Oceanwatch />
      </div>
    </div>
  );
};

export default Watches;

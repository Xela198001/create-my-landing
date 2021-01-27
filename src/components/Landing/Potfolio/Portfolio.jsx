import React, { useState, useEffect} from "react";
import Slider from "../Slider";
import listItems from "./Items.js";

function Portfolio(props) {
  const Items = listItems;
  const [active, setActive] = useState();
  
  return (
    <>
      <div className="section-team flex flex-row flex-wrap justify-center w-full p-10 mt-10">
        <h3 className="section-team-title w-full flex justify-center font-medium uppercase text-center text-3xl text-gray-300 leading-7 tracking-wider">
          {props.title}
        </h3>
        <Slider initial={active} data={Items} />
      </div>
    </>
  );
}

export default Portfolio;

import React from "react";
import ListItemDiv from "../ListItemDiv/ListItemDiv";
import Items from "./items.js";

function Team(props) {
  return (
    <>
      <div className="section-team flex flex-row flex-wrap justify-center w-full p-10 mt-10">
        <h3 className="section-team-title w-full flex justify-center font-medium uppercase text-center text-3xl text-gray-300 leading-7 tracking-wider">
          {props.title}
        </h3>
        <div className="w-full mt-10">
          <ListItemDiv listItems={Items} />
        </div>
      </div>
    </>
  );
};

export default Team;

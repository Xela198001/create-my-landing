import React from "react";
import ListItemDiv from "../ListItemDiv";
import items from "./items.js";

function Team(props) {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <div>
          <ListItemDiv listItems={items}/>
        </div>
      </div>
    </>
  );
};

export default Team;

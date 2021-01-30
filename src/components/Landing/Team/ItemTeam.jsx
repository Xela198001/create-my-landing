import React from "react";

export default function Team(props) {
  const item = props.listItem;
  return (
    <div className="shadow-sm rounded-3xl mr-5 ml-5 pt-10 pb-10">
      <div className="bg-cover bg-center rounded-full overflow-hidden w-40 h-40 ml-auto mr-auto shadow-md">
        <img src={item.avatar} className="w-full h-full" alt={item.post} />
      </div>
      <span className="flex justify-center mt-10">{item.post}</span>
    </div>
  );
};

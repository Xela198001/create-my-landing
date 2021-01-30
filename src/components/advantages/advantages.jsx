import React from 'react';
import items from './items.js';
import './advantages.css';

function advantages(props) {
  const listItems = items.map((item) => (
    <div
      className="advantages-item flex flex-col justify-center self-start text-gray-700 mr-10 ml-10"
      key={item.id}
    >
      <div className="w-full flex justify-center items-center">{item.svg}</div>
      <h4 className="block w-full flex justify-center items-center text-center text-xl font-medium">
        {item.text}
      </h4>
      <p className="w-full flex justify-center items-center text-center">
        {item.desc}
      </p>
    </div>
  ));
  
  return (
    <div className="main-advntages flex justify-center flex-wrap items-center w-full p-10 text-gray-400">
      {listItems}
    </div>
  );
};

export default advantages;
import React from 'react';
import Items from './items';
import ListItem from "../ListItem/ListItem.jsx";

function Price(props) {

  return (
    <div className="section-price w-full flex flex-row flex-wrap justify-center p-10 box-border bg-gray-200 border-box-border">
      <h3 className="section-price-title w-full flex justify-center font-medium uppercase text-center text-3xl text-gray-300 leading-7 tracking-wider">{props.title}</h3>
      {Items.map((item) => (
        <div className="bg-white w-30-p h-52 shadow-sm p-5 mr-5 ml-5 mt-10 rounded-lg translate-y-10 hover:shadow-x1">
          <h4 className="block price-title w-full font-medium text-2xl text-center text-grey-700 uppercase space-x-3 tracking-widest">{item.title}</h4>
          <ListItem listItems={item} />
        </div>
      ))}
    </div>
  );
};

export default Price;

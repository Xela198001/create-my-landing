import React from 'react';
import items from './items';

export default function nav(params) {
  const listItems = items[0].menu.map((item, index) => (
    <li className="text-white text-xl font-bold mr-10 uppercase z-10 font-sans" key={index}>{item}</li>)
  );
  
  return <ul className='z-10 list-none flex justify-end p-2'>{listItems}</ul>;
};

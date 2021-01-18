import React from 'react';

import Top from './top/top';
import Nav from './nav/nav';

import "./Header.css";

function Header(props) {
  return (
    <div className="header overflow-hidden flex flex-row flex-wrap justify-center">
      <Top />
      <div className="bgImg relative bg-cover w-full">
        <div className="bg absolute left-0 top-0 bg-purple-900 w-full h-full bg-opacity-75"></div>
        <div className="w-full">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;

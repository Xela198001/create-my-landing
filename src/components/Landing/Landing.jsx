import React, { useState } from 'react';
import Header from "./Header/Header";
import Advantages from './advantages/advantages';

function Landing() {
const [name, setName] = useState("Alex");

  return (
    <div className="mx-auto m-0 p-0">
      <Header></Header>
      <Advantages />
    </div>
  );
};

export default Landing;
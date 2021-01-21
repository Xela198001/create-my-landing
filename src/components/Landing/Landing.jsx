import React, { useState } from 'react';
import Header from "./Header/Header";
import Advantages from './advantages/advantages';
import Price from './Price/Price';

function Landing() {
const [name, setName] = useState("Alex");

  return (
    <div className="mx-auto m-0 p-0">
      <Header></Header>
      <Advantages />
      <Price title="Цены на Landing Page" />
    </div>
  );
};

export default Landing;
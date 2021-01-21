import React, { useState } from 'react';
import Header from "./Header/Header";
import Advantages from './advantages/advantages';
import Team from './Team/Team';

function Landing() {
const [name, setName] = useState("Alex");

  return (
    <div className="mx-auto m-0 p-0">
      <Header></Header>
      <Advantages />
      <Team title="Команда"/>
    </div>
  );
};

export default Landing;
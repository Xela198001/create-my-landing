import React, { useState } from 'react';
import Header from "./Header/Header.jsx";

function Landing() {
const [name, setName] = useState("Alex");

  return (
    <>
      <Header></Header>
    </>
  );
};

export default Landing;
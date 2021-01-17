import React, { useState } from 'react';
import Header from "./Header/Header";

function Landing() {
const [name, setName] = useState("Alex");

  return (
    <div className="mx-auto m-0 p-0">
      <Header></Header>
    </div>
  );
};

export default Landing;
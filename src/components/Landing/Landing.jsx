import React, { useState } from 'react';
import Header from "./Header/Header.jsx";

function Landing() {
const [name, setName] = useState("Alex");

  return (
    <div className="container p-0 ml-0 mr-auto">
      <Header></Header>
    </div>
  );
};

export default Landing;
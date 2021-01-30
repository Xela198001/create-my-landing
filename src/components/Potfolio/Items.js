import React from "react";
import img1 from "./img/interior.png";
import img2 from "./img/logotype.png";
import img3 from "./img/waxom.jpg";

const listItems = [
  <>
    <h4 className="slider_title">1</h4>
    <img className="bg-cover" src={img1} alt="slide" />
  </>,
  <>
    <h4 className="slider_title">2</h4>
    <img className="bg-cover" src={img2} alt="slide" />
  </>,
  <>
    <h4 className="slider_title">3</h4>
    <img className="bg-cover" src={img3} alt="slide" />
  </>,
];

export default listItems;

import React, { useState, useEffect, useLayoutEffect, useImperativeHandle } from "react";
import Slider from "react-slick";
import ListReviews from "./ListReviews";
import items from "./Items.js";
import "./Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews(props) {
  const [pageWidth, setPageWidth] = useState(0);
  const [col, setCol] = useState(2);

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: col,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  useEffect(() => {
    function handleResize() {
      setPageWidth(() => window.innerWidth);
    };
    handleResize();
    console.log(pageWidth);
    setCol(() => (pageWidth < 1024 ? 1 : 2));
  }, [pageWidth]);

  return (
    <div>
      <div className="w-full h-auto p-10 mt-5">
        <h3 className="section-team-title w-full flex justify-center font-medium uppercase text-center text-3xl text-gray-300 leading-7 tracking-wider">
          {props.title}
        </h3>
        <Slider {...settings} className="mt-5">
          {items.map((item, index) => (
            <ListReviews data={item} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;

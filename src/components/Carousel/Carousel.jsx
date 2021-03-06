// import { current } from "fibers";
import React from "react";
import "./Carousel.css";
// import { ArowLeft } from "./img/ArowLeft";
// import { ArrowRight } from "./img/ArrowRight";
// import { ZoomIcon } from "./img/ZoomIcon";
// import { PlayIcon } from "./img/PlayIcon";
// import { ThumbsIcon } from "./img/ThumbsIcon";
// import { CloseIcon } from "./img/CloseIcon";

function Carousel({ data, initial }) {
  const [index, setIndex] = React.useState(1);
  // const [scale, setScale] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setIndex((current) => (current === data.length - 1 ? 0 : current + 1));
    }, 5000);
  }, [initial]);

  const prevSlide = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const nextSlide = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className=" w-96 h-96 pb-4 flex flex-row justify-center">
      <div className="slider_inner w-96 h-96 flex justify-center aling-center overflow-hidden m-10">
        {data[index]}
      </div>
      <div className="slider_inner w-96 h-96 flex justify-center aling-center overflow-hidden m-10">
        {data[index+1]}
      </div>
    </div>
  );
}

export default Carousel;

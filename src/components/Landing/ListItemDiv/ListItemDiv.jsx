import React, { Component } from "react";
import ItemTeam from '../Team/ItemTeam.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import IconCheck from "../advantages/img/icons/iconCheck";
// import "./ListItem.css";

class ListItemDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const items = this.props.listItems;
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };

    return (
      <Slider {...settings}>
        {items.map((item, index) => (
          <ItemTeam listItem={item} key={index} />
        ))}
      </Slider>
    );
  }
}

export default ListItemDiv;

import React, { Component } from "react";

import IconCheck from "../advantages/img/icons/free-icon-check-mark";
import "./ListItem.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const items = this.props.listItems;
    console.log(items);
    return (
      <ul>
        {items.plus.map((item, index) => (
          <li
            className="list-item pl-0 text-black relative text-base text-orange-400 leading-8 tracking-wide"
            key={index}
          >
            <IconCheck />
            <span className="text-black">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItem;

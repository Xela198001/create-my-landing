import React, { Component } from "react";

// import IconCheck from "../advantages/img/icons/iconCheck";
// import "./ListItem.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const items = this.props.listItems;
    return (
      <ul>
        {items.plus.map((item, index) => (
          <li
            className="list-item pl-0 text-black relative text-base text-orange-400 leading-8 tracking-wide"
            key={index}
          >
            <span className="text-black">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItem;

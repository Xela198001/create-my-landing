import React, { Component } from "react";
import ItemTeam from '../Team/ItemTeam.jsx';

// import IconCheck from "../advantages/img/icons/iconCheck";
// import "./ListItem.css";

class ListItemDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const items = this.props.listItems;
    return (
      items.map((item, index) => (
          <ItemTeam listItem={item} key={index} />
        ))
    );
  }
}

export default ListItemDiv;

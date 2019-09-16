import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    const { id, image, name, description, link, keywords } = this.props.item;
    return (
        <div>
      <img
        //apply inline style
        // style={styles}
        src={image}
        alt={name}
        //onClick Event we are binding and passing the id to the onClick method in App.js
       
      />
      <p>{description}</p>
      <p>{link}</p>
      <p>{keywords}</p>
     
      
      </div>
    );
  }
}

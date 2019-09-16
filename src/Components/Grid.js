import React, { Component } from "react";
import { SpringGrid, measureItems, layout } from "react-stonecutter";
import ItemCard from "./ItemCard"

export default class Grid extends Component {
  render() {
    const Grid = measureItems(SpringGrid);
    return (
      <div>
        <Grid
          component='ul'
          columns={5}
          columnWidth={150}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={800}
          easing='ease-out'
        >
          {this.props.items.map(item => (
            <div key={item.id}>
            <ItemCard
              
              item={item}
              //the onClick method
              onClick={this.props.onClick}
            />
            </div>
          ))}
        </Grid>
      </div>
    );
  }
}

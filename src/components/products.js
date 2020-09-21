import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <React.Fragment>
          {this.props.list.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default Products;

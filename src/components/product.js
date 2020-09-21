import React, { Component } from "react";

class Product extends Component {

  render() {
    const buttonClass = "btn  btn-secondary mx-2"; 
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <div className="d-flex flex-row">
              <p>{this.props.product.name}</p>
            </div>
          </div>
          <div className="col-1">
            <div className="d-flex flex-row">
              <p>{this.props.product.value}</p>
            </div>
          </div>
          <div className="col-3">
              <button className={buttonClass} onClick={() => this.props.onIncrement(this.props.product)}>+</button>
              <button className={buttonClass} onClick={() => this.props.onDecrement(this.props.product)}>-</button>
              <button className={buttonClass} onClick={() => this.props.onDelete(this.props.product)}>X</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;

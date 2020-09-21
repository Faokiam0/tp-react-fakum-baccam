import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Form from "./components/form";
import Footer from "./components/footer";
//import logo from './logo.svg';
//mport './App.css';

class App extends Component {
  state = {
    list: [
      { id: 1, name: "T-shirt Noir", value: 1 , price:2},
      { id: 2, name: "Jeans", value: 1 , price:10},
    ],
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getTotal = () => {
    let tmp = 0;
    this.state.list.forEach((product) => {tmp += product.value * product.price})
    return tmp;
  }

  handleIncrement = (product) => {
    const tab = this.state.list;
    const index = tab.indexOf(product);
    tab[index].value++;
    this.setState({ list: tab });
  };

  handleDecrement = (product) => {
    if (product.value > 0) {
      const tab = this.state.list;
      const index = tab.indexOf(product);
      tab[index].value--;
      this.setState({ list: tab });
    } else this.handleDelete(product);
  };

  handleDelete = (product) => {
    const tab = this.state.list.filter((element) => element !== product);
    this.setState({ list: tab });
  };

  handleSubmit(product) {
    const tab = this.state.list;
    tab.push(product);
    this.setState({list: tab})
  }

  render() {
    return (
      <React.Fragment>
        <NavBar nbproduits={this.state.list.length} total={this.getTotal()}/>
        <div className="container my-5">
          
        <div className="col-10 offset-1">
          <Products
            list={this.state.list}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </div>
        <Form key="form" id={this.state.list.length+1} onSubmit={this.handleSubmit}></Form>
        </div>
        <Footer nbproduits={this.state.list.length} total={this.getTotal()}/>
      </React.Fragment>
    );
  }
}

export default App;

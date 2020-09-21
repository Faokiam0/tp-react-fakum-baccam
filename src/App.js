import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
//import logo from './logo.svg';
//mport './App.css';

class App extends Component {
  state = {
    list: [
      { id: 1, name: "T-shirt Noir", value: 1 },
      { id: 2, name: "Jeans", value: 1 },
    ],
  };

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

  render() {
    return (
      <React.Fragment>
        <NavBar nbproduits={this.state.list.length} />
        <div className="container">
          <Products
            list={this.state.list}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </div>
        
        <footer>Footer</footer>
      </React.Fragment>
    );
  }
}

/* Par défaut
function App0() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;

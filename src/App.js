import React, { Component } from 'react';
import NavBar from './components/navbar';
//import logo from './logo.svg';
//mport './App.css';

class App extends Component {
  state = {
    list: [
      {id: 1, name: "T-shirt Noir", value:1},
      {id: 2, name: "Jeans", value:1},
    ]
  }

  render() {
    return (
      <React.Fragment>
        <NavBar nbproduits={this.state.list.length}/>
        <div>Div</div>
        <footer>Footer</footer>
      </React.Fragment>
    );
  }
}

/*
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

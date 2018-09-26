import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beer Review</h1>
        </header>
        <NavBar logOut={this.handleClick}/>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}


export default App;

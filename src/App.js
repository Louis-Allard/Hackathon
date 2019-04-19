import React, { Component } from 'react';
import FaceVisible from "./FaceVisible";
import './App.css';
import haeder from "./img/haeder.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Galerie from './components/Galerie';
import Var from './components/var'
const EasterEgg = require('react-easter');
class App extends Component {
  myFunction() {
    
    alert("VAR!")
  } 
  render() {
    const konamiCode = [
      'v',
      'a',
      'r',
      'enter'
    ];
    return (

      <div className="App">
      <EasterEgg keys={konamiCode}
      >
        <Var/>
      </EasterEgg>
        <header className="App-header">
        <img src={haeder} alt="logo" />
          <h1 className="title">EasterEgg fight</h1>
        </header>
        <Galerie/>
        <footer className="Footer"> 
          <p>footer</p>
        </footer>

      </div>

    );
  }
}

export default App;

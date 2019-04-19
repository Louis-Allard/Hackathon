import React, { Component } from 'react';
import FaceVisible from "./FaceVisible";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Galerie from './components/Galerie';
import Var from './components/var'
const EasterEgg = require('react-easter');
class App extends Component {
 

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
          <h1>Header</h1>
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

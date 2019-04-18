import React, { Component } from 'react';
import FaceVisible from "./FaceVisible";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Galerie from './components/Galerie';


class App extends Component {
  render() {
    return (
      <div className="App">
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

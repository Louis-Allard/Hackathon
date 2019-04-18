import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        <h1>Hackathon #1 Easter-egg chalenge</h1>
        </header>

        <footer className="Footer"> 
          <Modal />
          <p>Hackathon réalisé par l'équpe JLAN !</p>
        </footer>
      </div>
    );
  }
}

export default App;

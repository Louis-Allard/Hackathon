import React, { Component } from 'react';
import FaceVisible from "./FaceVisible";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Galerie from './components/Galerie';
import Var from './components/var'
import Compte from './components/compte'

const EasterEgg = require('react-easter');
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      showChild : true
    }
  }

  componentDidMount() {
      console.log('Parent Mounted');
  }

  reloadChild = () => {
      this.setState({
        showChild : false
      })
    
      setTimeout(() => {
        this.setState({
          showChild : true
        })
      },100);

      console.log("Reload Child Invoked")
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
          <Var />
        </EasterEgg>
        <header className="App-header">
          <h1>Egg's Card Game</h1>
        </header>
        <Compte />
        {this.state.showChild ?
          <Galerie reloadChild={this.reloadChild} /> : null
        }
        <footer className="Footer">
          <p>footer</p>
        </footer>

      </div>

    );
  }
}

export default App;

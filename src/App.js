import React, { Component } from 'react';
import FaceVisible from "./FaceVisible";
import './App.css';
import haeder from "./img/haeder.png";
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
    const Loic = [
      'v',
      'a',
      'r',
      
    ];
    const konamiCode = [
      'arrowup',
      'arrowup',
      'arrowdown',
      'arrowdown',
      'arrowleft',
      'arrowright',
      'arrowleft',
      'arrowright',
      'b',
      'a',
      
    ];
    return (

      <div className="App">
        <header className="App-header">
        <img src={haeder} alt="logo" />
          <h1>Header</h1>
        </header>
        <EasterEgg keys={Loic}
      >
        <Var/>
      </EasterEgg>
        <EasterEgg keys={konamiCode}
        >
          <div class="overlay">
            <iframe class="sexy-nude-geek-girls-playing-mario"
              src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1"
              frameborder="0"
              allowfullscreen />
          </div>
      </EasterEgg>
        <Compte />
        {this.state.showChild ?
          <Galerie reloadChild={this.reloadChild} /> : null
        }
        <footer className="Footer"> 
          <p>Made with ❤️ by Wild Code School</p>
        </footer>

      </div>

    );
  }
}

export default App;

import React from "react";
import Cards from "./Cards";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
  

const data = ["","","","",""]



class Galerie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('Child component Mounted');
  }

  componentWillUnmount(){
    console.log('Child Component Unmounted');
  }

  onButtonClick = () => {
    console.log("Button Clicked")
    this.props.reloadChild();
  }



  render() {
    return (
      <div>
     <div className="container-fluid  ">
       <div className="row  justify-content-center">
      <CardDeck className="">
        
        <div className =" row  mt-2 ">       
          {data.map((i, idx) => {
          return (
            <Cards/> 
          );
        })}
        </div>
        </CardDeck>
        </div>
      </div>
      <Button
      onClick={this.onButtonClick}>Nouvelle manche</Button>
       <div className="container-fluid  ">
       <div className="row justify-content-center">
        <CardDeck >   
        <div className ="row  mt-2">       
          {data.map((i, idx) => {
          return (
            <Cards/> 
          );
        })}
        </div> 
        
      </CardDeck>
      </div>
      </div>
      </div>
    );
  }
}
export default Galerie;

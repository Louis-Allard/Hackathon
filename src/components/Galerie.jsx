import React from "react";
import Cards from "./Cards";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

const data = ["","","","",""]



class Galerie extends React.Component {
  render() {
    return (

      <CardDeck >
        <div className ="row mr-2 ml-2 mt-2">       
          {data.map((film, idx) => {
          return (
            <Cards/> 
          );
        })}
        </div>     
        <div className ="row mr-2 ml-2 mt-2">       
          {data.map((film, idx) => {
          return (
            <Cards/> 
          );
        })}
        </div> 
      </CardDeck>
  
    );
  }
}
export default Galerie;

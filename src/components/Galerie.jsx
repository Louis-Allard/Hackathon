import React from "react";
import Cards from "./Cards";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

const data = ["","","","",""]



class Galerie extends React.Component {
  render() {
    return (

      <CardDeck >
        <div className ="row">       
          {data.map((i, idx) => {
          return (
            <Cards/> 
          );
        })}
        </div>     
        <div className ="row">       
          {data.map((i, idx) => {
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

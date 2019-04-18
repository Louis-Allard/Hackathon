import React from "react";
import Oeuf from "./Oeuf";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

const data = ["","","","","","","","","","","","","","",""]



class Galerie extends React.Component {
  render() {
    return (

      <CardDeck>
        <div className ="row mr-2 ml-2">       
          {data.map((film, idx) => {
          return (
            <Oeuf/>
          );
        })}
        </div>        
      </CardDeck>
  
    );
  }
}
export default Galerie;

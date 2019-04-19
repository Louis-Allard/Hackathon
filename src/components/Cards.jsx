import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Front from './Front';
import Back from './Back';
import axios from 'axios';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap'; 
import "../cards.css";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eggs: "",
            character : "",
            name :"",
            skills :[],
            image:"",
        }
    }

    componentDidMount() {
        axios.get('http://easteregg.wildcodeschool.fr/api/eggs/random')
            .then(res => {
                this.setState({
                    eggs: res.data.image
                });
            });
        axios.get('http://easteregg.wildcodeschool.fr/api/characters/random')
            .then(res2 => {
                this.setState({
                    character: res2.data.image,
                    name: res2.data.name,
                    skills: res2.data.skills
                });
            });
        axios.get('https://deckofcardsapi.com/api/deck/new/draw/')
            .then(res3 => {
                this.setState({
                    image: res3.data.cards.map(cards => cards.image),
                });
            });
    }

    render() {

	    return (
            <div>

            <Flippy
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
            >
                <FrontSide className="Card imageFront">
                <Front src={this.state.eggs} />
                </FrontSide>

                <BackSide className="Card imageFront ">
                    <Back 
                    image= {this.state.image}
                    character={this.state.character}
                    name={this.state.name}
                     />
                </BackSide>
            </Flippy>
            
            </div>
        )
    }
}

export default Cards;

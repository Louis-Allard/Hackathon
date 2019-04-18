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
            skills :[]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    calc(values) {
        return values.reduce((acc, currentValue) => {
            return acc + Number.parseInt(currentValue.split(':')[1]);
        }, 0);
     }
    

    componentDidMount() {
        axios.get('http://easteregg.wildcodeschool.fr/api/eggs/random')
            .then(res => {
                this.setState({
                    eggs: res.data.image
                });
            });
        axios.get('http://easteregg.wildcodeschool.fr/api/characters/random')
            .then(res => {

                const generateValue = this.calc(res.data.skills);
                this.setState({
                    character: res.data.image,
                    name: res.data.name,
                    skills: res.data.skills,
                    result: generateValue
                });

            })
             
    }
    handleClick() {
       alert (this.state.result);
      }
    render() {
	    return (
            <div className= "col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mt-1" onClick={this.handleClick}>
            
            <Flippy
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '250px' }} /// these are optional style, it is not necessary
            >
                <FrontSide className="imageFront">
                <Front src={this.state.eggs} />
                </FrontSide>

                <BackSide className="imageFront">
                    <Back 
                    character= {this.state.character}
                    name={this.state.name}
                    skills={this.state.skills}
                    
                     />
                     
                </BackSide>
            </Flippy>
            
            </div>
        )
    }
}

export default Cards;

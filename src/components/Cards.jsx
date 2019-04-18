import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Front from './Front';
import Back from './Back';
import axios from 'axios';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap'; 

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eggs: []
        }
    }
    componentDidMount() {
        axios.get('http://easteregg.wildcodeschool.fr/api/eggs/random')
        .then (res => {
            this.setState({
              eggs : res.image  
            });
        });
    }
    render() {
	    return (
            <div className= "col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mt-1 ">
            
            <Flippy
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide>
                    <Front/>
                </FrontSide>

                <BackSide>
                    <Back/>          
                </BackSide>
            </Flippy>
            
            </div>
        )
    }
}

export default Cards;

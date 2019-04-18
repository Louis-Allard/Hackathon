import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Front from './Front';
import Back from './Back';
import axios from 'axios';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eggs: "",
            character : {}
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
                    character: res2.data
                });
            });
    }

    render() {
         console.log(this.state.character);
        return (
            <Flippy
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide>
                <Front src={this.state.eggs} />
                </FrontSide>

                <BackSide>
                    <Back character= {this.state.character} />
                </BackSide>
            </Flippy>
        )
    }
}

export default Cards;

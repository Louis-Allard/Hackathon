import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Front from './Front';
import Back from './Back';



class Cards extends React.Component{

    render() {
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
                    <Front/>
                </FrontSide>

                <BackSide>
                    <Back/>          
                </BackSide>
            </Flippy>
        )
    }
}

export default Cards;

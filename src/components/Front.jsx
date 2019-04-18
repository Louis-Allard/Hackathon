import React from 'react';
import "Front.css";

class Front extends React.Component{
    render(){
        return(

            <div>

<img src={this.props.src} style={{ width: '150px', height: '150px' }} />
            </div>

        )
    }
}

export default Front;
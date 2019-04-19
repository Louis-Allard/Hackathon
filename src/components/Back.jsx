import React from 'react';
import "../cards.css";

class Back extends React.Component{
    render(){
        return(
            <div>
            <p className = "card-title"> {this.props.name} </p>
            <img className = "card-img img-fluid character" src={this.props.character} />
            <img className = "card-img img-fluid character" src={this.props.image} />
            </div>
        )
    }
}

export default Back;
import React from 'react';
import "../cards.css";

class Back extends React.Component{
    render(){
        return(
            <div>
            <h1 className = "characterName"> {this.props.name} </h1>
            <img className = "charaImg" src={this.props.character} />
            <p className="description"><br/>{this.props.skills[0]}<br/>{this.props.skills[1]}<br/>{this.props.skills[2]} </p>
            </div>
        )
    }
}

export default Back;
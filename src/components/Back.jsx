import React from 'react';
import "../cards.css";

class Back extends React.Component{
    render(){
        return(
            <div>
            <img src={this.props.character} style={{  height: '150px' }} />
            <p className="description">{this.props.name}<br/>{this.props.skills[0]}<br/>{this.props.skills[1]}<br/>{this.props.skills[2]} </p>
            </div>
        )
    }
}

export default Back;
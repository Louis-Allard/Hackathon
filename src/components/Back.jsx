import React from 'react';

class Back extends React.Component{
    render(){
        return(
            <div>
            <img src={this.props.character} style={{ width: '150px', height: '150px' }} />
            <h5>{this.props.name}</h5>
            <br/>
            <p>{this.props.skills[0]}<br/>{this.props.skills[1]}<br/>{this.props.skills[2]} </p>
            </div>
        )
    }
}

export default Back;
import React from 'react';

class Back extends React.Component{
    render(){
        return(
            <div>
            <img src={this.props.character} style={{ width: '150px', height: '150px' }} />
            <p>{this.props.name}<br/>{this.props.skills[0]}<br/>{this.props.skills[1]}<br/>{this.props.skills[2]} </p>
            </div>
        )
    }
}

export default Back;
import React from 'react';
import "../cards.css";

class Back extends React.Component{
    render() {
        return (
            <div>
                <img className="card-img img-fluid character" src={this.props.image} />
            </div>
        )
    }
}

export default Back;
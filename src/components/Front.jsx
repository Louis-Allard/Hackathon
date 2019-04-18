import React from 'react';

class Front extends React.Component{
    render(){
        return(

            <div>
                <img className="eggImg" src={this.props.src} />
            </div>

        )
    }
}

export default Front;
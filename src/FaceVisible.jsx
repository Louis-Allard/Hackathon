import React from "react";
import axios from 'axios';

class FaceVisible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fiche:[],
        genres: [], 
        videoId: ""
    };
  }
  componentDidMount() {
    this.getFiche()
  }
  getFiche() { 
    axios.get(`http://easteregg.wildcodeschool.fr/api/characters` )
      .then(response  => {         
        this.setState({        
          fiche : response.data,
          genres: response.data.genres
        });         
    });    
  }
    render() {      
      return (  
        <div>           
        
        </div>        
      );
    }
  }  
  export default FaceVisible;
import React, { Component } from 'react';
class Var extends React.Component {
  
  myFunction() {
    
    alert("VAR!")
  } 

    
    render() {
      return ( 
        <div >
            {this.myFunction()}
         </div>
       )
    }
    
  
  
  }
  export default Var
  
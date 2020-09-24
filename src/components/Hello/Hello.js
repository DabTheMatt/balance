import React from 'react';
import {HashRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Main from "../Main/Main"


function Hello() {
    return (

    

        <div className="center container">
        <div><h1 className="titleRotation">BALANC<span className="weight300">E</span></h1></div>
        
        <h2>how much is it worth?</h2>
        <button ><Link className="check" to="/main">Check</Link></button>
      </div>
      
            
        
     
      
    );
  }
  
  export default Hello;
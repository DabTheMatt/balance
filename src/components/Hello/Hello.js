import React from 'react';
import {HashRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Main from "../Main/Main"


function Hello() {
    return (

    

        <div className="center container">
        <div className="margintop20vh"><h1 className="titleRotation  animate__animated animate__fadeIn">BALANCE</h1></div>
        
        <h2 className="mainh2">how much is it worth?</h2>
        <div className="checkmargintop20vh"><button ><Link className="check  animate__slow animate__animated animate__fadeIn" to="/what">check</Link></button></div>
        <div><h2><br></br><Link className="check polishbutton" to="/what_pl">wersja polska</Link></h2></div>
      </div>
      
            
        
     
      
    );
  }
  
  export default Hello;
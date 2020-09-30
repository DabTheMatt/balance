import React from 'react';
import {HashRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import Main from "../Main/Main"


function Hello() {
    return (

    

        <div className="center container">
        <div className="margintop20vh"><h1 className="titleRotation">BALANCE</h1></div>
        
        <h2 className="mainh2">how much is it worth? / Ile to jest warte?</h2>
        <div className="checkmargintop20vh"><button ><Link className="check" to="/what">Check / </Link><Link className="check" to="/what_pl">Sprawdź</Link></button></div>
      </div>
      
            
        
     
      
    );
  }
  
  export default Hello;
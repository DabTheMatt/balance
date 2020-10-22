import "../../gridStyle.css";

import React, { Component } from "react";

import line from "../../asets/construction/scratch_1.png";

import {
  HashRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Main from "../Main/Main";

export default class Balance extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isEnter: false,
        isEnterClassName: "balanceChevronBlack",
        
    };
  }

 

  render() {
    return (
      <div className="gridContainer">
          <div className="gridHeader"></div>
          <div className="gridMain">

          <h1 className="mainTitle">balance</h1>
        <h2 className="mainSubTitle">How much is worth?</h2>
        <div className="mianScratch">
          <img className="mainScratchLine" src={line}></img>
        </div>
        <div className="mainButtons">
        <Link className="mainButton" to="/GAskBalance">
          check <span style={{fontSize: "0.7em"}}>>></span>
          </Link><br/><br/>
          <Link className="mainButton" style={{fontSize: "2em"}}
                to="/BalanceAbout">
          about <span style={{fontSize: "0.7em"}}>>></span>
          </Link>
        </div>
        
        <div className="">v0.4-alpha-grid</div>

          </div>
        <div className="gridFooter"></div>
      </div>
    );
  }
}

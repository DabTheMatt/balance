import React, { Component } from "react";
import "../../bStyle.css";
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

  handleEnter = () => {
    this.setState({
      isTurnOn: this.state.isEnter ? false : true,
      isEnterClassName: "balanceChevronWhite",
    });
    
  };

  handleLeave = () => {
    this.setState({
      isTurnOn: this.state.isEnter ? false : true,
      isEnterClassName: "balanceChevronBlack",
    });
    
  };

  render() {
    return (
      <div className="balanceCenterContainer tealBackground">
        <h1 className="balanceTitle">balance</h1>
        <h2 className="balanceSubtitle balanceSubtitleBottom">How much is worth?</h2>
        <div className="balanceLineContainer">
          <img className="balanceImageLineSmall" src={line}></img>
        </div>
        <br />
        <br />
        <Link className="balanceButtonB" onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
                to="/AskBalance">
          check <sapn className={this.state.isEnterClassName} >>></sapn>
          </Link>
          <Link className="balanceAbout" 
                to="/BalanceAbout">
          about 
          </Link>
        <div className="balanceVersion">v0.4-alpha-lightning</div>
      </div>
    );
  }
}

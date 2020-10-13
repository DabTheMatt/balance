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

    this.state = {};
  }

  render() {
    return (
      <div className="balanceCenterContainer">
        <h1 className="balanceTitle">balance</h1>
        <h2 className="balanceSubtitle balanceSubtitleBottom">How much is worth?</h2>
        <div className="balanceLineContainer">
          <img className="balanceImageLine" src={line}></img>
        </div>
        <br />
        <br />
        <Link className="balanceButton" to="/AskBalance">
          check <sapn className="balanceChevron">>></sapn>
          </Link>
        <div className="balanceVersion">v0.3-alpha-giraffe</div>
      </div>
    );
  }
}

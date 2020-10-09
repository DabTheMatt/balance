import React, { Component } from "react";
import blackSheep from "../../asets/licensed/blacksheep.png";

import {
  HashRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Main from "../Main/Main";

export default class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnter: false,
      bulbOn: "bulbOn",
    };
  }

  componentDidMount = () => {
    this.setState({
      isTurnOn: true,
      bulbOn: "bulbOff",
    });
  };

  handleEnter = () => {
    this.setState({
      isTurnOn: this.state.isEnter ? false : true,
      bulbOn: "bulbOn",
    });
    console.log("on", this.state.isEnter);
    console.log("class", this.state.bulbOn);
  };

  handleLeave = () => {
    this.setState({
      isTurnOn: this.state.isEnter ? false : true,
      bulbOn: "bulbOff",
    });
    console.log("on", this.state.isEnter);
    console.log("class", this.state.bulbOn);
  };

  render() {
    return (
      <div>
        <div className="center container">
          <div className="margintop20vh bulbPosition">
            <div className={this.state.bulbOn}></div>
          </div>
          <div>
            <h1 className="titleRotation  animate__animated animate__fadeIn">
              BALANCE
            </h1>
          </div>

          <h2 className="mainh2">how much is it worth?</h2>
          <div className="checkmargintop20vh">
            <button
              onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave}
            >
              <Link
                className="check  animate__slow animate__animated animate__fadeIn"
                to="/what"
              >
                check
              </Link>
            </button>
          </div>
          <div>
            <h2>
              
              <Link className="check polishbutton" to="/hellopl">
                / wersja polska /
              </Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link className="check polishbutton" to="about">
                about
              </Link>
            </h2>
            <p>v0.1-alpha</p><Link className="check polishbutton" style={{fontSize: "10px"}}to="/whatr"><img src={blackSheep} style={{width: "20px"}}></img></Link>
          </div>
        </div>
      </div>
    );
  }
}

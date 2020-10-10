import React, { Component } from "react";
import Tabletop from "tabletop";
import blackSheep from "../../asets/licensed/blacksheep.png";
import {
  HashRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

export default class Whatr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      valuesArray: [],
      whatValue: "",
      defaultValue: 0,
      costValue: "",
      showHow: false,
      nomberOfVacines: "",
      table: [],
      numberOfShelters: "",
      numberOf: "",
      image: "",
      text1: "",
      text2: "",
      info: "",
      adress: "",
      href: "",
      whatErrorMsg: "",
      costErrorMsg: "",
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1NKa7gPtvcImda1TyAfkM9mlkJ5rDuke5eRqmQImNFWA",
      callback: (googleData) => {
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  }

  reloadPage = () => {
    window.location.reload(false);
  };


  handleSubmit = (e) => {
    
 
    if (this.state.costValue == 0) {
      console.log("zero");
      this.setState({
        costErrorMsg: "enter the amount",
      });
      e.preventDefault();
    } else if (this.state.costValue !== 0) {
      console.log("empty");
      this.setState({
        showHow: this.state.showHow ? false : true,
      });
    }
  
  };
  handleThingChange = (e) => {
    this.setState({
      whatValue: e.target.value,
    });
  };
 

  handleCostChange = (e) => {
    e.preventDefault();

    this.setState({
      costValue: e.target.value,
    });
  };

  handleClick = () => {
    this.state.data.map((obj) => {
      console.log("oppi1", obj.price_per_item);

      if (Number(obj.price_per_item) < this.state.costValue) {
        this.setState({
          valuesArray: this.state.valuesArray.push(obj),
        });
      }
    });
    console.log("costValue", this.state.costValue);
    console.log("valuesArray", this.state.valuesArray);
    console.log("val", this.state.valuesArray.length);
    let random = Math.floor(
      Math.random() *
        (this.state.valuesArray.length - (this.state.valuesArray.length - 3)) +
        (this.state.valuesArray.length - 3)
    );
    console.log("random", random);
    let obj = this.state.valuesArray[random];
    console.log("ppp", obj);

    let array = new Array(
      parseInt(Number(this.state.costValue) / obj.price_per_item)
    );
    return this.setState({
      numberOf: array.length,
      image: obj.image,
      table: [...array],
      text1: `${obj.text1}`,
      text2: obj.text2,
      info: obj.info,
      adress: obj.website_name,
      href: obj.webpage_adress,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container main">
        {this.state.showHow ? (
          <div className="center container main">
            <h1 className="top1em">
              Your <br />
              <span className="thing">{this.state.whatValue}</span>
            </h1>
            <h2>
              is worth <br />
              <br />
              <span style={{ color: "black" }}>
                {this.state.text1} {this.state.table.length} {this.state.text2}
              </span>{" "}
            </h2>
            <div className="margin3em info">
              {[...this.state.table].map((i) => {
                return <img className="image" src={this.state.image} />;
              })}
            </div>
            <div className="margin3em info">
              <h2>
                <br />
                <q>{this.state.info}</q>
              </h2>
            </div>
            <div>
              <h3>
                more info at:{" "}
                <a className="a" href={this.state.href}>
                  {this.state.adress}
                </a>
              </h3>
            </div>
            <div>
              <h3 className="ainvert" onClick={this.reloadPage}>
                Check once again...
              </h3>
            </div>
            <div>
              <a
                className="a check"
                style={{ marginTop: "6em", fontSize: "1.5em" }}
                href="../balance/#/"
              >
                Home
              </a>
            </div>

            <div id="footer">
              <br></br>
              <br></br>

              <br></br>
            </div>
          </div>
        ) : (
          <div className="margintop10vh">
            <form onSubmit={this.handleSubmit} className="form">
              <label>What do you want to buy?</label>
              <input
                className="input"
                onChange={this.handleThingChange}
                value={this.state.whatValue}
              ></input>
              <label>How much it costs?</label>

              <input
                type="number"
                pattern="[0-9]"
                className="input"
                onChange={this.handleCostChange}
                placeholder="$"
                value={this.state.costValue}
                style={{ width: "40%" }}
              ></input>
              {this.state.costErrorMsg ? (
                <div style={{ height: "20px" }}>{this.state.costErrorMsg}</div>
              ) : (
                <div style={{ height: "20px" }}>{this.state.costErrorMsg}</div>
              )}
              <button
                onClick={this.handleClick}
                type="submit"
                className="check top5rem"
                style={{ textTransform: "" }}
              >
                How much is it worth?
              </button>
            </form>
          </div>
        )}

        <div></div>
        <p>v0.1-alpha</p><Link className="check polishbutton" style={{fontSize: "10px"}}to="/whatr"><img src={blackSheep} style={{width: "20px"}}></img></Link>

      </div>
    );
  }
}

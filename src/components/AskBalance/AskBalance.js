import React, { Component } from "react";
import {
    HashRouter as Router,
    Link,
    NavLink,
    Route,
    Switch,
  } from "react-router-dom";
import Tabletop from "tabletop";

export default class What extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
    e.preventDefault();

    if (this.state.costValue == 0) {
      e.preventDefault();

      console.log("zero");
      this.setState({
        costErrorMsg: "enter the amount",
      });
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
  handleThingChange = (e) => {
    this.setState({
      whatValue: e.target.value,
    });
  };

  handleCostChange = (e) => {
    this.setState({
      costValue: e.target.value,
    });
  };

  handleClick = () => {
    if (this.state.costValue == 0) {
      console.log("ggg");
    } else if (this.state.costValue <= 20) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 20) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 40) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 40) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 60) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 60) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 100) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 100) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 200) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 200) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 250) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 250) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 500) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 500) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 2000) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 2000) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 25000) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 25000) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 50000) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 50000) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    } else if (this.state.costValue <= 100000) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 100000) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="">
        {this.state.showHow ? (
          <div className="balanceCenterContainer">
              <div className="replayContainer">
            <h1 className="replyHeader">
              Your 
              <span className="white replyHeaderSpan capitalize"> {this.state.whatValue} </span>
            
            
              is worth <br/>
              
              <span className="white replyHeaderSpan">
                {this.state.text1} {this.state.text2}
                <sup className="balanceAdress">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="balanceChevron">>>&nbsp;</span>{this.state.href}</sup></span>
              </h1>
              <div className="balanceLine"></div>
              <div className="balanceInfo white">{this.state.info}</div>
             {/* <div className="margin3em info">
              {[...this.state.table].map((i) => {
                return <img className="image" src={this.state.image} />;
              })}
              </div>  */}
            </div>
            {/* <div className="margin3em info">
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
            </div> */}
            {/* <div>
              <a
                className="a"
                style={{ marginTop: "6em", fontSize: "1.5em" }}
                href="../balance/#/"
              >
                Home
              </a>
            </div> */}
            <Link className="balanceButton marginTop" to="/Balance">
          <span className="balanceChevron">{`<<`}</span> home
                    </Link>
            <div id="">
            <p className="balanceVersion">v0.2-alpha</p>
              <br></br>
              <br></br>
              
              <br></br>
            </div>
            
          </div>
        ) : (
          <div className="balanceCenterContainer">
            <form onSubmit={this.handleSubmit} className="askForm">
              <label className="balanceSubtitle balanceAskBottom">What do you want to buy?</label>
              <input
                className="askInput balanceAskBottom"
                onChange={this.handleThingChange}
                value={this.state.whatValue}
                
              ></input>
              
              <label className="balanceSubtitle balanceAskBottom">How much it costs?</label>
                <input
                type="number"
                className="askInput balanceAskBottom"
                onChange={this.handleCostChange}
                
                value={this.state.costValue}
                
              ></input>
              <h2 className="balanceSubtitle balanceAskBottom">Ho much is it worth?</h2>
              
              {this.state.costErrorMsg ? (
                <div style={{ height: "20px" }}>{this.state.costErrorMsg}</div>
              ) : (
                <div style={{ height: "20px" }}>{this.state.costErrorMsg}</div>
              )}
              <button 
                onClick={this.handleClick}
                type="submit"
                className="balanceButton"
                style={{ textTransform: "" }}
              >
                check <sapn className="balanceChevron">>></sapn>
              </button>
            </form>
            <p className="balanceVersion">v0.3-alpha-giraffe</p>
          </div>
        )}

        <div><br/><br/></div>
        
      </div>
    );
  }
}

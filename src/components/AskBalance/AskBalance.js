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
      adress_short: "",
      href: "",
      whatErrorMsg: "",
      costErrorMsg: "",
      isEnterClassName: "balanceChevronBlack",
      numberOfImages: "",
      objectName: "",
      objectNameShort: "",
      imageGrid: ""
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isEnterClassName: "balanceChevronBlack",
    });

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
    let randomNumber = Math.floor(Math.random() * 9);
    this.setState ({
      imageNumber: Math.floor(Math.random() * (9 - 1)) + 1
    })
    
    if (this.state.costValue <= 20) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 20) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: `https://raw.githubusercontent.com/DabTheMatt/balance/master/src/asets/es/pencil_`,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
            numberOfImages: obj.number_of_images,
            objectName: obj.name,
            imageGrid: obj.image_grid
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
            image: obj.image_es,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
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
            image: obj.image_es,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
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
            image: `https://raw.githubusercontent.com/DabTheMatt/balance/master/src/asets/es/books/book_`,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
            numberOfImages: obj.number_of_images,
            objectName: obj.name,
            objectNameShort: obj.name_short,
            imageGrid: obj.image_grid
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
            image: `https://raw.githubusercontent.com/DabTheMatt/balance/master/src/asets/es/firstaids/firstaid_`,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
            numberOfImages: obj.number_of_images,
            objectName: obj.name,
            objectNameShort: obj.name_short,
            imageGrid: obj.image_grid
          });
        }
      });
    } else if (this.state.costValue <= 250) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 500) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image_es,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
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
            image: obj.image_es,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
          });
        }
      });
    } else if (this.state.costValue <= 10000) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 10000) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image_es,
            table: [...array],
            text1: `${obj.text1} ${array.length}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
          });
        }
      });
    } else if (this.state.costValue <= 40000) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 40000) {
          let array = new Array(
            parseInt(Number(this.state.costValue) / obj.price_per_item)
          );
          return this.setState({
            numberOf: array.length,
            image: obj.image_es,
            table: [...array],
            text1: `${obj.text1} ${array.length}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
            numberOfImages: obj.number_of_images,
            objectName: obj.name,
            objectNameShort: obj.name_short,
            imageGrid: obj.image_grid

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
            image: `https://raw.githubusercontent.com/DabTheMatt/balance/master/src/asets/es/beds/bed_`,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
            numberOfImages: obj.number_of_images,
            objectName: obj.name,
            objectNameShort: obj.name_short,
            imageGrid: obj.image_grid

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
            image: obj.image_es,
            table: [...array],
            text1: `${array.length} ${obj.text1}`,
            text2: obj.text2,
            info: obj.info,
            adress: obj.website_name,
            href: obj.webpage_adress,
            adress_short: obj.website_adress_short,
          });
        }
      });
    }
  };

  render() {
    return (<div>
        

      <div className="whiteBackground">
        {this.state.showHow ? (
          <div className="balanceCenterContainer whiteBackground">
            <div className="replayContainer whiteBackground">
              <h1 className="replyHeader">
                <span className="replyHeaderYo">Y</span>our{" "}
                <span className="replyHeaderSpan  teal capitalize">
                  {this.state.whatValue}
                </span>{" "}
                is worth{" "}
                <span className="replyHeaderSpan  ">
                  {this.state.text1} {this.state.text2}
                </span>{" "}
                <sup ><a className="balanceAdress" href={this.state.href}><nobr>>> {this.state.adress_short}</nobr></a></sup>
              </h1>
              <div className="balanceLine"></div>
              
              <div className={this.state.imageGrid}>{[...this.state.table].map((i) => {
                return <img className={this.state.objectNameShort} src={ `${this.state.image}`+ `${(Math.floor(Math.random() * (this.state.numberOfImages ) + 1))}`+`.png`} />;
              })}</div>
              
              <div className="balanceInfo teal ">{this.state.info}</div>
              <div className="balanceLineBottom"></div>
              <div style={{textAlign: "right", marginBottom: "2em"}}>
              <a className="balanceAdressBottom" href={this.state.href}><nobr>>> {this.state.adress_short}</nobr></a>
              </div>
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
            <div
              /* onMouseEnter={this.handleEnter}
              onMouseLeave={this.handleLeave} */
            >
              <Link className="balanceButtonB2 marginTop" to="/Balance">
                <span className={this.state.isEnterClassName}>{`<<`}</span> home
              </Link>
            </div>
            <div className="whiteBackground" id="">
              <p className="balanceVersion">v0.2-alpha</p>
              <br></br>
              <br></br>

              <br></br>
            </div>
          </div>
        ) : (<div className="tealBackground">
          <div className="balanceCenterContainer tealBackground">
            <form onSubmit={this.handleSubmit} className="askForm ">
              <label className="balanceSubtitle balanceAskBottom">
                What do you want to buy?
              </label>
              <input
                className="askInput balanceAskBottom"
                onChange={this.handleThingChange}
                value={this.state.whatValue}
              ></input>

              <label className="balanceSubtitle balanceAskBottom">
                How much it costs?
              </label>
              <input
                type="number"
                step=".01"
                className="askInput balanceAskBottom"
                onChange={this.handleCostChange}
                value={this.state.costValue}
              ></input>
              <h2 className="balanceSubtitle balanceAskBottom">
                How much is it worth?
              </h2>

              {this.state.costErrorMsg ? (
                <div style={{ height: "20px" }}>{this.state.costErrorMsg}</div>
              ) : (
                <div style={{ height: "20px" }}>{this.state.costErrorMsg}</div>
              )}
              <button
                onClick={this.handleClick}
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}
                type="submit"
                className="balanceButtonB"
                style={{ textTransform: "" }}
              >
                check <sapn className={this.state.isEnterClassName}>>></sapn>
              </button>
            </form>
            <p className="balanceVersion">v0.3-alpha-giraffe</p>
          </div></div>
        )}

        <div className="tealBackground">
          
        </div>
      </div>
      </div>
    );
  }
}

import React, { Component } from "react";
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
      key: process.env.REACT_APP_VALUES_KEY,
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
    } else if (this.state.costValue <= 50) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 50) {
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
    } else if (this.state.costValue <= 80) {
      this.state.data.map((obj) => {
        if (obj.thershold <= 80) {
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
                className="a"
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
        <p>v0.2-alpha</p><br/><br/>
      </div>
    );
  }
}

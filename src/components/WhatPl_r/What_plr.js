import React, { Component } from "react";
import Tabletop from "tabletop";

export default class What extends Component {
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
    e.preventDefault();

    if (this.state.costValue == 0) {
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
    let ppp = this.state.valuesArray[random];
    console.log("ppp", ppp);

    let array = new Array(
      parseInt(Number(this.state.costValue) / ppp.price_per_item_pl)
    );
    return this.setState({
      numberOf: array.length,
      image: ppp.image,
      table: [...array],
      text1: `${ppp.text1_pl}`,
      text2: ppp.text2_pl,
      info: ppp.info_pl,
      adress: ppp.website_name_pl,
      href: ppp.webpage_adress,
    });
    console.log("r");
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container main">
        {this.state.showHow ? (
          <div className="center container main">
            <h1 className="top1em">
              <br />
              <span className="thing">{this.state.whatValue}</span>
            </h1>
            <h2>
              kosztuje tyle, ile... <br />
              <br />
              <span style={{ color: "black" }}>
                {this.state.text1} {this.state.table.length} {this.state.text2}
              </span>{" "}
            </h2>
            <div className="margin3em">
              {[...this.state.table].map((i) => {
                return <img className="image" src={this.state.image} />;
              })}
            </div>
            <div className="margin3em">
              <h2>
                <br />
                <q>{this.state.info}</q>
              </h2>
            </div>
            <div>
              <h3>
                więcej informacji pod adresem:{" "}
                <a className="a" href={this.state.href}>
                  {this.state.adress}
                </a>
              </h3>
            </div>
            <div>
              <h3 className="ainvert" onClick={this.reloadPage}>
                Sprawdź jeszcze raz...
              </h3>
            </div>
            <div>
              <a
                className="a"
                style={{ marginTop: "6em", fontSize: "1.5em" }}
                href="../balance/#/"
              >
                Strona główna
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
              <label>Co chcesz kupić?</label>
              <input
                className="input"
                onChange={this.handleThingChange}
                value={this.state.whatValue}
                style={{ width: "40%" }}
              ></input>
              {this.state.whatErrorMsg ? (
                <div style={{ height: "20px" }}>{this.state.whatErrorMsg}</div>
              ) : (
                <div style={{ height: "20px" }}>{this.state.whatErrorMsg}</div>
              )}
              <label>Ile to kosztuje?</label>

              <input
                type="number"
                className="input"
                onChange={this.handleCostChange}
                placeholder="zł"
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
                Ile to jest wate?
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
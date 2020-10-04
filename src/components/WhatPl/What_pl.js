import React, { Component } from "react";
import Tabletop from "tabletop";


export default class What_pl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      whatValue: "",
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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showHow: this.state.showHow ? false : true,
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

  if (this.state.costValue <= 10) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 10) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${array.length} ${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })
    };
    }); 
  } else if (this.state.costValue <= 20) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 20) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${array.length} ${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    }); 
  } else if (this.state.costValue <= 50) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 50) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${array.length} ${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    }); 
    } else if (this.state.costValue <= 100) {
      this.state.data.map((obj) => {
        if (obj.thershold_pl <= 100) {
        let array = new Array(
          parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
        );
        return this.setState({
            numberOf: array.length,
            image: obj.image,
            table: [...array],
            text1: `${array.length} ${obj.text1_pl}`,
            text2: obj.text2_pl,
            info: obj.info_pl,
            adress: obj.website_name_pl,
            href: obj.webpage_adress,
        })};
      }); 
   
  } else if (this.state.costValue <= 500) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 500) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${array.length} ${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    }); 
  } else if (this.state.costValue <= 1000) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 1000) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    }); 
  } else if (this.state.costValue <= 2000) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 2000) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    }); 
  } else if (this.state.costValue <= 5000) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 5000) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    }); 
  } else if (this.state.costValue <= 50000) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 50000) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    });
  } else if (this.state.costValue <= 100000) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 100000) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
    });
  } else if (this.state.costValue <= 500000) {
    this.state.data.map((obj) => {
      if (obj.thershold_pl <= 500000) {
      let array = new Array(
        parseInt(Number(this.state.costValue) / obj.price_per_item_pl)
      );
      return this.setState({
        numberOf: array.length,
        image: obj.image,
        table: [...array],
        text1: `${obj.text1_pl}`,
        text2: obj.text2_pl,
        info: obj.info_pl,
        adress: obj.website_name_pl,
        href: obj.webpage_adress,
      })};
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
                <a className="a" style={{marginTop: "6em", fontSize: "1.5em"}} href="../balance/#/">
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
              ></input>
              <label>Ile to kosztuje?</label>

              <input
                type="number"
                className="input"
                onChange={this.handleCostChange}
                placeholder="zł"
                value={this.state.costValue}
                style={{ width: "40%" }}
              ></input>

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
      </div>
    );
  }
}

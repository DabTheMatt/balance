import React, { Component } from "react";
import vacine from "../../asets/vacine.png";
import shelter from "../../asets/shelter.png";
import tree from "../../asets/tree.png";
import firstaid from "../../asets/firstaid.png";
import polio from "../../asets/polio.png";
import leg from "../../asets/leg.png";
import book from "../../asets/book.png";


export default class What extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleSubmit = () => {
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
    if (this.state.costValue <= 50) {
        console.log("aaa")
      let randomNumber = Math.floor(Math.random() * (2 - 1)) + 1;
      console.log("cost", this.state.costValue);

      let array = new Array(parseInt(Number(this.state.costValue) / 0.19));

      this.setState({
        numberOf: array.length,
        image: polio,
        table: [...array],
        text1: "polio vacines for ",
        text2: "children",
        info: "These oral polio vaccine drops can protect children under age 5 from polio, a highly contagious viral infection. Honor your friends and loved ones by helping children who need it most.",
        adress: "UNICEF website",
        href: "https://www.market.unicefusa.org/inspired-gifts/polio-vaccines-to-protect-100-children/S359190/"
      });
    } else if (this.state.costValue <= 100) {
      console.log("bbb")
      let randomNumber = Math.floor(Math.random() * (1 + 2)) + 1;
    console.log("rn", randomNumber);

    let array = new Array(parseInt(Number(this.state.costValue) / 5));

    this.setState({
      numberOf: array.length,
      image: book,
      text1: `${array.length} books from a local bookstore for yourself or for`,
      text2: "of your friends",
      info: "Buying books at local bookstores not only supports local businesses and allows the distribution of cultural goods, but can also help in raising funds for those in real need.",
      adress: "OXFAM website",
      href: "https://www.oxfam.org.uk/"
    });

    this.setState({
      table: [...array],
    });
  } else if (this.state.costValue <= 200) {
        console.log("bbb")
        let randomNumber = Math.floor(Math.random() * (1 + 2)) + 1;
      console.log("rn", randomNumber);

      let array = new Array(parseInt(Number(this.state.costValue) / 32));

      this.setState({
        numberOf: array.length,
        image: firstaid,
        text1: `${array.length} large first aid kits for a `,
        text2: "health workers",
        info: "First aid kit for the treatment of minor injuries. The sturdy bag contains an array of medical supplies including bandages, soap, blanket, towel, forceps, scalpel blade, pain reliever and ointments.",
        adress: "UNICEF website",
        href: "https://www.market.unicefusa.org/inspired-gifts/large-first-aid-kit-for-a-health-worker/S9975020/"
      });

      this.setState({
        table: [...array],
      });
    } else if (this.state.costValue <= 500) {
        console.log("bbb")
        let randomNumber = Math.floor(Math.random() * (1 + 2)) + 1;
      console.log("rn", randomNumber);

      let array = new Array(parseInt(Number(this.state.costValue) / 18));

      this.setState({
        numberOf: array.length,
        image: shelter,
        text1: `${array.length} tarpaulins too shelter `,
        text2: "families",
        info: "In times of disaster, this tarp made of heavy-duty plastic sheeting can help protect a family from the elements. This large sheet can provide temporary cover and serve as a windshield or groundsheet. These tarps are provided to Child-Friendly Spaces and also used to wrap around temporary latrines",
        adress: "UNICEF website",
        href: "https://www.market.unicefusa.org/inspired-gifts/tarpaulins-to-shelter-children-and-their-families/S5086011/"

      });

      this.setState({
        table: [...array],
      });

   
  } else if (this.state.costValue <= 2000) {
        console.log("bbb")
        let randomNumber = Math.floor(Math.random() * (1 + 2)) + 1;
      console.log("rn", randomNumber);

      let array = new Array(parseInt(Number(this.state.costValue) / 69));

      this.setState({
        numberOf: array.length,
        image: tree,
        text1: "as much as planting ",
        text2: "baobabs",
        info: "The baobab is an indigenous tree of Madagascar and widespread throughout Africa. Well-known for its imposing presence, consider that the tree’s diameter can reach a width of 10 meters. Considered the social hub of villages, the baobab’s shade hosts markets, meetings, dances, and games. It’s planted in to assist with the recovery of natural forests.",
        adress: "Treedom, let's green the planet website",
        href: "https://www.treedom.net/en/plant-a-tree/baobab-tree_637"

      });

      this.setState({
        table: [...array],
      });

   
  } else if (this.state.costValue <= 50000) {
    console.log("bbb")
    let randomNumber = Math.floor(Math.random() * (1 + 2)) + 1;
  console.log("rn", randomNumber);

  let array = new Array(parseInt(Number(this.state.costValue) / 500));

  this.setState({
    numberOf: array.length,
    image: leg,
    text1: "as much as funding ",
    text2: "mechanical leg prosthesis for children",
    info: `Most of our patients have lost their limbs due to the war. Despite the circumstances that brought people to the center, it’s a hopeful place. Daily, we see physical and psychological support provide tangible improvements to refugees’ quality of life."`,
    adress: "RELIEF International website",
    href: "https://www.ri.org/providing-life-changing-prosthetics-for-syrian-refugees/"

  });

  this.setState({
    table: [...array],
  });


};

}

  render() {
    return (
      <div
        className="container"
        style={{
          width: "80%",
          height: "auto",
          marginBottom: "6rem",
          marginTop: "6rem",
        }}
      >
        {this.state.showHow ? (
          <div style={{}}>
            <h1>
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
            {this.state.table.map((i) => {
              return <img className="image" src={this.state.image} />;
            })}
            <div><h2><br/><q>{this.state.info}</q></h2></div>
            <div><h3>more info at: <a className="a" href={this.state.href}>{this.state.adress}</a></h3></div>
            <div><h3><br/><br/><br/><a className="ainvert" href="../">Check once again...</a></h3></div>
          </div>
        ) : (
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
              placeholder=""
              value={this.state.costValue}
              style={{ width: "40%" }}
            ></input>

            <button
              onClick={this.handleClick}
              type="submit"
              className="check top5rem"
              style={{ textTransform: "" }}
            >
              How much is it worth?
            </button>
          </form>
        )}

        <div></div>
      </div>
    );
  }
}

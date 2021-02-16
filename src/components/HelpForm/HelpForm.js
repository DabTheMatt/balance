import React, { Component } from "react";

export default class HelpForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        
      };
    }

    render() {
        
        return (
            <div>
                <div className="margintop10vh">
            <form onSubmit={this.handleSubmit} className="helpform">
              <label className="helpLabel">Name of the organization / initiative</label>
              <input
                className="helpInput"
                onChange={this.handleThingChange}
                value={this.state.whatValue}
                style={{ width: "40%" }}
              ></input>
              <label className="helpLabel">you can help others by buying ...</label>
              <input
                className="helpInput"
                onChange={this.handleThingChange}
                value={this.state.whatValue}
                style={{ width: "40%" }}
              ></input>
              <label className="helpLabel">it costs...</label>

              <input
                
                className="helpInput"
                onChange={this.handleCostChange}
                placeholder="$"
                value={this.state.costValue}
                style={{ width: "40%" }}
              ></input>
              <label className="helpLabel">leave your email here if you want to contact us</label>
              <input
                className="helpInput"
                onChange={this.handleThingChange}
                value={this.state.whatValue}
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
                style={{ textTransform: "" , marginBottom: "2em"}}
              >
                Send form
              </button>
            </form>
          </div>
            </div>

        )
    }
}